"use node";

import { internalAction } from "./_generated/server";
import { v } from "convex/values";
import { internal } from "./_generated/api";
import { vly } from "../lib/vly-integrations";

/** Default recipient: the site owner's inbox. */
const OWNER_EMAIL = "yovenzor2009@gmail.com";

/** Where the form lives — used in the footer of the notification. */
const SITE_URL = "https://yovenzor.freebuff.page";

/**
 * Display name shown by mail clients. The gateway keeps its own no-reply
 * mailbox; only the visible name changes, so the message reads
 * "Portfolio Yovenzor" instead of the internal project name.
 */
const SENDER_NAME = "Portfolio Yovenzor";

/** Palette lifted from the site theme so the mail matches the portfolio. */
const COLORS = {
  paper: "#f2eee4",
  card: "#fffdf9",
  ink: "#2b2620",
  body: "#3a342b",
  muted: "#8a8072",
  line: "#e5ded0",
  brand: "#c9612c",
  brandSoft: "#faf6ee",
};

const FONT =
  "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif";
const MONO = "ui-monospace,SFMono-Regular,Menlo,Consolas,'Liberation Mono',monospace";

const LANGUAGE_NAMES: Record<string, string> = {
  es: "Español",
  en: "English",
  fr: "Français",
  pt: "Português",
  de: "Deutsch",
  ar: "العربية",
};

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

    const name = message.name;
    const subject = `[Portfolio Yovenzor] ${message.subject}`;
    const language = LANGUAGE_NAMES[message.language] ?? message.language;
    const sentAt = new Date(message.createdAt).toLocaleString("es-ES", {
      timeZone: "Europe/Madrid",
      dateStyle: "medium",
      timeStyle: "short",
    });

    const text = [
      `PORTFOLIO YOVENZOR`,
      `Nuevo mensaje desde el formulario de contacto`,
      ``,
      message.subject,
      ``,
      `Nombre:   ${name}`,
      `Correo:   ${message.email}`,
      `Idioma:   ${language}`,
      `Fecha:    ${sentAt}`,
      ``,
      `—`,
      ``,
      message.message,
      ``,
      `—`,
      `Responde a este correo para contestar a ${name}.`,
      `Enviado desde ${SITE_URL}`,
    ].join("\n");

    const html = renderEmail({
      name,
      email: message.email,
      subject: message.subject,
      language,
      sentAt,
      body: message.message,
    });

    // The gateway normally stamps its own sender. We ask for the portfolio's
    // display name on top of that mailbox; if a gateway rejects the override,
    // resend with the default sender so the notification still arrives.
    const send = (from?: string) =>
      vly.email.send({
        to: recipient,
        ...(from ? { from } : {}),
        replyTo: message.email,
        subject,
        html,
        text,
      });

    try {
      let result = await send(`${SENDER_NAME} <no-reply@auth.freebuff.app>`);
      if (!result.success) {
        console.warn(
          "[contact] sender override rejected, retrying with the gateway default:",
          result.error,
        );
        result = await send();
      }
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

function renderEmail(input: {
  name: string;
  email: string;
  subject: string;
  language: string;
  sentAt: string;
  body: string;
}): string {
  const name = escapeHtml(input.name);
  const email = escapeHtml(input.email);
  const subject = escapeHtml(input.subject);
  const language = escapeHtml(input.language);
  const sentAt = escapeHtml(input.sentAt);
  const body = escapeHtml(input.body);

  const row = (label: string, value: string, href?: string) => `
              <tr>
                <td style="padding:5px 0;font-family:${MONO};font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:${COLORS.muted};width:88px;vertical-align:top;">${label}</td>
                <td style="padding:5px 0;font-family:${FONT};font-size:14px;line-height:1.45;color:${COLORS.ink};vertical-align:top;">${
                  href
                    ? `<a href="${href}" style="color:${COLORS.brand};text-decoration:none;">${value}</a>`
                    : value
                }</td>
              </tr>`;

  return `<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<meta name="color-scheme" content="light" />
<title>${subject}</title>
</head>
<body style="margin:0;padding:0;background:${COLORS.paper};">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;">Nuevo mensaje de ${name}: ${subject}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${COLORS.paper};">
  <tr>
    <td align="center" style="padding:32px 16px;">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:600px;background:${COLORS.card};border:1px solid ${COLORS.line};border-radius:20px;overflow:hidden;">
        <tr>
          <td style="height:5px;background:${COLORS.brand};font-size:0;line-height:0;">&nbsp;</td>
        </tr>
        <tr>
          <td style="padding:28px 32px 0;">
            <p style="margin:0;font-family:${MONO};font-size:11px;letter-spacing:.24em;text-transform:uppercase;color:${COLORS.brand};font-weight:600;">Portfolio Yovenzor</p>
            <p style="margin:9px 0 0;font-family:${FONT};font-size:13px;line-height:1.5;color:${COLORS.muted};">Nuevo mensaje desde el formulario de contacto</p>
          </td>
        </tr>
        <tr>
          <td style="padding:16px 32px 0;">
            <h1 style="margin:0;font-family:${FONT};font-size:22px;line-height:1.32;color:${COLORS.ink};font-weight:700;">${subject}</h1>
          </td>
        </tr>
        <tr>
          <td style="padding:18px 32px 0;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-top:1px solid ${COLORS.line};padding-top:4px;">
              <tr><td style="height:14px;font-size:0;line-height:0;">&nbsp;</td></tr>
              ${row("Nombre", name)}
              ${row("Correo", email, `mailto:${email}`)}
              ${row("Idioma", language)}
              ${row("Enviado", sentAt)}
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding:22px 32px 0;">
            <div style="border-left:3px solid ${COLORS.brand};background:${COLORS.brandSoft};border-radius:0 12px 12px 0;padding:18px 20px;font-family:${FONT};font-size:15px;line-height:1.65;color:${COLORS.body};white-space:pre-wrap;">${body}</div>
          </td>
        </tr>
        <tr>
          <td style="padding:24px 32px 0;">
            <a href="mailto:${email}?subject=${encodeURIComponent(`Re: ${subject}`)}" style="display:inline-block;background:${COLORS.brand};color:#fffdf9;font-family:${FONT};font-size:14px;font-weight:600;text-decoration:none;padding:12px 22px;border-radius:999px;">Responder a ${name}</a>
          </td>
        </tr>
        <tr>
          <td style="padding:28px 32px 30px;">
            <hr style="border:none;border-top:1px solid ${COLORS.line};margin:0 0 14px;" />
            <p style="margin:0;font-family:${FONT};font-size:12px;line-height:1.65;color:${COLORS.muted};">
              Responder a este correo escribe directamente a ${name}.<br />
              Enviado desde <a href="${SITE_URL}" style="color:${COLORS.brand};text-decoration:none;">yovenzor.freebuff.page</a> · copia guardada en el panel de Convex.
            </p>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
</body>
</html>`;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
