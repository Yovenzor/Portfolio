import { useState, type HTMLInputAutoCompleteAttribute } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import {
  ArrowUpRight,
  CheckCircle2,
  FileText,
  Linkedin,
  Mail,
  Send,
  TriangleAlert,
  type LucideIcon,
} from "lucide-react";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { siteConfig } from "@/content/site";
import { useLanguage, useT } from "@/i18n";
import { cn } from "@/lib/utils";

interface FormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
  /** Honeypot — humans never see or fill this field. */
  website: string;
}

/**
 * Contact section: honest channel cards (only real links render), the final
 * call to action, and a validated form backed by the `contact.submitMessage`
 * Convex mutation — submissions are validated, rate-limited and stored
 * server-side, then e-mailed to the owner when the notification address is
 * configured.
 */
export function Contact() {
  const t = useT();
  const { lang } = useLanguage();
  const submitMessage = useMutation(api.contact.submitMessage);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    defaultValues: { name: "", email: "", subject: "", message: "", website: "" },
    mode: "onBlur",
  });

  const onSubmit = async (values: FormValues) => {
    // Spam trap: pretend success, never surface the address.
    if (values.website.trim() !== "") {
      setStatus("success");
      reset();
      return;
    }
    try {
      await submitMessage({
        name: values.name,
        email: values.email,
        subject: values.subject,
        message: values.message,
        language: lang,
      });
      setStatus("success");
      reset();
    } catch {
      // Server errors (validation, rate limit, network) share one honest,
      // translated message — the form keeps the visitor's input.
      setStatus("error");
    }
  };

  const err = t.contact.form.errors;
  const fieldClass = (hasError?: unknown) =>
    cn(
      "h-11 rounded-xl border border-input bg-tint text-foreground placeholder:text-muted-foreground/50",
      "transition-colors focus-visible:border-brand/60 focus-visible:ring-2 focus-visible:ring-ring/30",
      hasError ? "border-destructive/70" : "hover:border-line-strong",
    );

  const channels: {
    key: keyof typeof t.contact.channels;
    href: string | null;
    icon: LucideIcon;
    external?: boolean;
    /** Forces an immediate download with this filename (same-origin only). */
    download?: string;
  }[] = [
    {
      key: "email",
      href: siteConfig.links.email ? `mailto:${siteConfig.links.email}` : null,
      icon: Mail,
    },
    {
      key: "linkedin",
      href: siteConfig.links.linkedin,
      icon: Linkedin,
      external: true,
    },
    {
      key: "cv",
      href: siteConfig.links.cv,
      icon: FileText,
      download: "CV-Yovenzor-Singh.pdf",
    },
  ];

  return (
    <Section id="contacto" tone="raised">
      <SectionHeading index="08" label={t.contact.label} title={t.contact.title} intro={t.contact.intro} accent="plum" />

      <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
        {/* ── final CTA + channels ───────────────────────────── */}
        <div>
          <Reveal>
            <p className="font-display text-2xl font-medium leading-snug tracking-tight text-foreground text-balance sm:text-3xl">
              {t.contact.finalCta}
            </p>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="mt-8">
              <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                {t.contact.channelsTitle}
              </h3>
              <ul className="mt-4 space-y-3">
                {channels.map((channel) => {
                  const label = t.contact.channels[channel.key];
                  if (!channel.href) {
                    return (
                      <li
                        key={channel.key}
                        className="flex items-start gap-3.5 rounded-xl border border-dashed border-line-strong bg-tint px-4 py-3.5"
                      >
                        <channel.icon className="mt-0.5 size-5 shrink-0 text-muted-foreground/50" aria-hidden="true" />
                        <div>
                          <p className="text-sm font-medium text-foreground/70">{label}</p>
                          <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground/70">
                            {t.contact.channelPending} — {t.contact.channelPendingHint}
                          </p>
                        </div>
                      </li>
                    );
                  }
                  return (
                    <li key={channel.key}>
                      <a
                        href={channel.href}
                        download={channel.download}
                        target={channel.external && !channel.download ? "_blank" : undefined}
                        rel={channel.external && !channel.download ? "noopener noreferrer" : undefined}
                        className="group flex items-center justify-between gap-4 rounded-xl border border-line bg-card px-4 py-3.5 outline-none transition-all hover:border-brand/40 focus-visible:ring-2 focus-visible:ring-ring/60"
                      >
                        <span className="flex items-center gap-3.5">
                          <span className="flex size-5 items-center justify-center text-muted-foreground transition-colors group-hover:text-brand">
                            <channel.icon className="size-4" aria-hidden="true" />
                          </span>
                          <span className="text-sm font-medium text-foreground">{label}</span>
                        </span>
                        <ArrowUpRight
                          className="size-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand rtl:rotate-180 rtl:group-hover:-translate-x-0.5 rtl:group-hover:translate-y-0.5"
                          aria-hidden="true"
                        />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* ── form ───────────────────────────────────────────── */}
        <Reveal delay={0.1}>
          <div className="rounded-2xl border border-line bg-card p-6 sm:p-8">
            <h3 className="font-display text-lg font-medium tracking-tight text-foreground">
              {t.contact.formTitle}
            </h3>

            {status === "success" ? (
              <div
                className="mt-6 flex flex-col items-start gap-4 rounded-xl border border-brand/35 bg-brand/[0.07] p-6"
                role="status"
                aria-live="polite"
              >
                <span className="flex size-10 items-center justify-center rounded-full bg-brand/15 text-brand">
                  <CheckCircle2 className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-base font-semibold text-foreground">
                    {t.contact.form.successTitle}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {t.contact.form.successBody}
                  </p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full border border-line bg-transparent hover:bg-tint"
                  onClick={() => setStatus("idle")}
                >
                  {t.contact.form.sendAnother}
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} noValidate className="mt-6 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  {/* name */}
                  <div className="space-y-2">
                    <Label htmlFor="contact-name" className="text-muted-foreground">
                      {t.contact.form.name}
                    </Label>
                    <Input
                      id="contact-name"
                      type="text"
                      autoComplete="name"
                      placeholder={t.contact.form.namePlaceholder}
                      aria-invalid={errors.name ? true : undefined}
                      aria-describedby={errors.name ? "contact-name-error" : undefined}
                      className={fieldClass(errors.name)}
                      {...register("name", {
                        validate: (v) =>
                          v.trim().length >= 2 || err.nameRequired,
                      })}
                    />
                    {errors.name && (
                      <p id="contact-name-error" role="alert" className="text-xs text-destructive">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* email */}
                  <div className="space-y-2">
                    <Label htmlFor="contact-email" className="text-muted-foreground">
                      {t.contact.form.email}
                    </Label>
                    <Input
                      id="contact-email"
                      type="email"
                      autoComplete={"email" as HTMLInputAutoCompleteAttribute}
                      placeholder={t.contact.form.emailPlaceholder}
                      dir="ltr"
                      aria-invalid={errors.email ? true : undefined}
                      aria-describedby={errors.email ? "contact-email-error" : undefined}
                      className={cn(fieldClass(errors.email), "rtl:text-start")}
                      {...register("email", {
                        validate: (v) => {
                          if (!v.trim()) return err.emailRequired;
                          return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) || err.emailInvalid;
                        },
                      })}
                    />
                    {errors.email && (
                      <p id="contact-email-error" role="alert" className="text-xs text-destructive">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* subject */}
                <div className="space-y-2">
                  <Label htmlFor="contact-subject" className="text-muted-foreground">
                    {t.contact.form.subject}
                  </Label>
                  <Input
                    id="contact-subject"
                    type="text"
                    placeholder={t.contact.form.subjectPlaceholder}
                    aria-invalid={errors.subject ? true : undefined}
                    aria-describedby={errors.subject ? "contact-subject-error" : undefined}
                    className={fieldClass(errors.subject)}
                    {...register("subject", {
                      validate: (v) => v.trim().length >= 2 || err.subjectRequired,
                    })}
                  />
                  {errors.subject && (
                    <p id="contact-subject-error" role="alert" className="text-xs text-destructive">
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                {/* message */}
                <div className="space-y-2">
                  <Label htmlFor="contact-message" className="text-muted-foreground">
                    {t.contact.form.message}
                  </Label>
                  <Textarea
                    id="contact-message"
                    rows={5}
                    placeholder={t.contact.form.messagePlaceholder}
                    aria-invalid={errors.message ? true : undefined}
                    aria-describedby={errors.message ? "contact-message-error" : undefined}
                    className={cn(
                      "min-h-28 resize-y rounded-xl border border-input bg-tint text-foreground placeholder:text-muted-foreground/50 transition-colors focus-visible:border-brand/60 focus-visible:ring-2 focus-visible:ring-ring/30",
                      errors.message && "border-destructive/70",
                    )}
                    {...register("message", {
                      validate: (v) => {
                        if (!v.trim()) return err.messageRequired;
                        if (v.trim().length < 10) return err.messageTooShort;
                        if (v.length > 2000) return err.messageTooLong;
                        return true;
                      },
                    })}
                  />
                  {errors.message && (
                    <p id="contact-message-error" role="alert" className="text-xs text-destructive">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* honeypot — visually hidden, not part of the a11y tree */}
                <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
                  <label htmlFor="contact-website">Website</label>
                  <input id="contact-website" type="text" tabIndex={-1} autoComplete="off" {...register("website")} />
                </div>

                {status === "error" && (
                  <div
                    className="flex items-start gap-3 rounded-xl border border-destructive/40 bg-destructive/10 px-4 py-3"
                    role="alert"
                  >
                    <TriangleAlert className="mt-0.5 size-4 shrink-0 text-destructive" aria-hidden="true" />
                    <div className="text-sm">
                      <p className="font-medium text-foreground">{t.contact.form.errorTitle}</p>
                      <p className="mt-0.5 text-muted-foreground">{t.contact.form.errorBody}</p>
                    </div>
                  </div>
                )}

                <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs leading-relaxed text-muted-foreground/70">
                    {t.contact.form.dataNote}
                  </p>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="h-11 shrink-0 rounded-full bg-brand px-6 text-sm font-semibold text-brand-foreground hover:brightness-105"
                  >
                    {isSubmitting ? (
                      t.contact.form.sending
                    ) : (
                      <>
                        <Send className="size-4" aria-hidden="true" />
                        {t.contact.form.submit}
                      </>
                    )}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
