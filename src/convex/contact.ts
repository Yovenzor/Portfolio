import { v } from "convex/values";
import { mutation, internalQuery } from "./_generated/server";
import { internal } from "./_generated/api";

const MAX_PER_DAY_PER_EMAIL = 5;
const DAY_MS = 24 * 60 * 60 * 1000;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/**
 * Public entry point of the contact form.
 *
 * Validation and rate limiting happen server-side (the client is never
 * trusted). The message is stored in the `messages` table — visible in the
 * Convex dashboard — and an e-mail notification is scheduled best-effort, so a
 * failing mail gateway can never lose a submitted message.
 */
export const submitMessage = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    subject: v.string(),
    message: v.string(),
    language: v.string(),
  },
  handler: async (ctx, args) => {
    const name = args.name.trim();
    const email = args.email.trim().toLowerCase();
    const subject = args.subject.trim();
    const message = args.message.trim();

    if (name.length < 2 || name.length > 120) throw new Error("INVALID_NAME");
    if (email.length > 200 || !EMAIL_RE.test(email)) throw new Error("INVALID_EMAIL");
    if (subject.length < 2 || subject.length > 200) throw new Error("INVALID_SUBJECT");
    if (message.length < 10 || message.length > 2000) throw new Error("INVALID_MESSAGE");
    // Link-only messages are almost always spam.
    if (/^https?:\/\//i.test(message)) throw new Error("INVALID_MESSAGE");

    // Simple abuse control: at most N submissions per sender per 24 h.
    const recent = await ctx.db
      .query("messages")
      .withIndex("by_email", (q) => q.eq("email", email))
      .order("desc")
      .take(MAX_PER_DAY_PER_EMAIL + 1);
    const now = Date.now();
    if (
      recent.length > MAX_PER_DAY_PER_EMAIL &&
      recent[MAX_PER_DAY_PER_EMAIL]!.createdAt > now - DAY_MS
    ) {
      throw new Error("RATE_LIMITED");
    }

    const id = await ctx.db.insert("messages", {
      name,
      email,
      subject,
      message,
      language: args.language.slice(0, 12),
      createdAt: now,
    });

    await ctx.scheduler.runAfter(0, internal.contactNotify.notify, { messageId: id });

    return { ok: true as const, id };
  },
});

/** Read one stored message (notification action only). */
export const getMessage = internalQuery({
  args: { messageId: v.id("messages") },
  handler: async (ctx, { messageId }) => {
    return await ctx.db.get(messageId);
  },
});
