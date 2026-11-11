"use node";

import { internalAction } from "./_generated/server";
import { v } from "convex/values";
import { internal } from "./_generated/api";
import { vly } from "../lib/vly-integrations";

/** Default recipient: the site owner's inbox. */
const OWNER_EMAIL = "yovenzor2009@gmail.com";

/**
 * Best-effort e-mail notification for new contact-form messages.
 *
 * Uses the platform's integration gateway (see /integrations.md). The
 * recipient is the Convex environment variable `CONTACT_NOTIFY_EMAIL` when
 * set, otherwise the site owner's address (OWNER_EMAIL above) — so every
 * submitted message always reaches the owner's inbox. The message itself is
 * stored in the dashboard either way, so a failing mail gateway can never
 * lose a submission.
 */
export const notify = internalAction({
  args: { messageId: v.id("messages") },
  handler: async (ctx, { messageId }): Promise<{ sent: boolean; reason?: string }> => {
    const recipient = process.env.CONTACT_NOTIFY_EMAIL || OWNER_EMAIL;

    const message = await ctx.runQuery(internal.contact.getMessage, { messageId });
    if (!message) return { sent: false, reason: "message not found" };

    const subject = `[Portfolio] ${message.subject}`;
    const text = [
      `Nuevo mensaje desde el portfolio de Yovenzor Singh.`,
      ``,
      `Nombre: ${message.name}`,
      `Correo: ${message.email}`,
      `Idioma: ${message.language}`,
      `Fecha: ${new Date(message.createdAt).toISOString()}`,
      ``,
      message.message,
    ].join("\n");

    const html = `
      <div style="font-family:Inter,Arial,sans-serif;max-width:560px;margin:0 auto;color:#111">
        <p style="font-family:monospace;font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#666">
          Mensaje nuevo · Portfolio
        </p>
        <h2 style="font-size:20px;margin:8px 0 4px">${escapeHtml(message.subject)}</h2>
        <p style="color:#666;font-size:13px">
          De <strong>${escapeHtml(message.name)}</strong> ·
          <a href="mailto:${escapeHtml(message.email)}">${escapeHtml(message.email)}</a>
          · ${escapeHtml(message.language)} · ${new Date(message.createdAt).toLocaleString("es-ES")}
        </p>
        <div style="white-space:pre-wrap;background:#f6f7f8;border:1px solid #e5e7eb;border-radius:10px;padding:16px;font-size:14px;line-height:1.6">
${escapeHtml(message.message)}
        </div>
      </div>`;

    try {
      const result = await vly.email.send({
        to: recipient,
        subject,
        html,
        text,
      });
      if (!result.success) {
        console.error("[contact] gateway rejected notification:", result.error);
        return { sent: false, reason: String(result.error ?? "gateway error") };
      }
      return { sent: true };
    } catch (error) {
      console.error("[contact] notification failed:", error);
      return { sent: false, reason: error instanceof Error ? error.message : "unknown error" };
    }
  },
});

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
