import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { toast } from "react-toastify";
import { ArrowRight } from "lucide-react";

const EMAILJS_SERVICE_ID = "service_gj1ar8s";
const EMAILJS_ADMIN_TEMPLATE_ID = "template_yud8qgg";
const EMAILJS_AUTOREPLY_TEMPLATE_ID = "template_jduloyg";
const EMAILJS_PUBLIC_KEY = "zZ0DD7NvjzVzP0ubs";

// Nigerian mobile numbers: 11 digits starting 0[7-9][0-1], or the same
// national number behind a +234 / 234 country code.
const NG_PHONE = /^(?:\+?234|0)[789][01]\d{8}$/;

const validatePhone = (value) => {
  const digits = value.replace(/[\s()-]/g, "");
  return (
    NG_PHONE.test(digits) ||
    "Enter a valid Nigerian number, e.g. 08169216565 or +2348169216565"
  );
};

const inputClass = (hasError) => `
  w-full rounded-xl border bg-surface/60 px-4 py-3.5 text-sm text-ink
  placeholder:text-ink/35
  transition-all duration-300 ease-premium
  focus:border-primary/40 focus:bg-white focus:outline-none focus:ring-4 focus:ring-primary/8
  ${hasError ? "border-red-400/70 bg-red-50/40" : "border-ink/10"}
`;

function Field({ id, label, error, children }) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-xs font-semibold tracking-wide text-ink/55"
      >
        {label}
      </label>
      {children}
      {error && (
        <p role="alert" className="mt-2 text-xs text-red-600">
          {error.message}
        </p>
      )}
    </div>
  );
}

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);

    // 1. Notify admin. This is the send that must not be lost — if it fails,
    //    the lead never reached us, so tell the customer.
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_ADMIN_TEMPLATE_ID,
        data,
        EMAILJS_PUBLIC_KEY,
      );
    } catch (error) {
      console.error("Admin notification failed:", error);
      toast.error(
        "We couldn't send your request. Please call or WhatsApp us on 0816 921 6565.",
      );
      setLoading(false);
      return;
    }

    // 2. Auto-reply to the customer is best-effort. The lead is already with us,
    //    so a failure here must not be reported as a failed submission.
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_AUTOREPLY_TEMPLATE_ID,
        data,
        EMAILJS_PUBLIC_KEY,
      );
    } catch (error) {
      console.error("Customer auto-reply failed:", error);
    }

    toast.success("Request sent. We'll get back to you shortly.");
    reset();
    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="rounded-2xl border border-ink/6 bg-white p-7 shadow-soft sm:p-9"
    >
      <h2 className="text-xl font-semibold text-ink">Request a quote</h2>
      <p className="mt-2 text-sm leading-relaxed text-ink/55">
        Fill in your details and we&rsquo;ll get back to you quickly.
      </p>

      <div className="mt-8 space-y-5">

        <Field id="name" label="Full name" error={errors.name}>
          <input
            id="name"
            {...register("name", {
              required: "Please enter your full name",
              minLength: { value: 2, message: "Please enter your full name" },
            })}
            placeholder="e.g. Chidi Okonkwo"
            aria-invalid={errors.name ? "true" : "false"}
            className={inputClass(errors.name)}
          />
        </Field>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field id="phone" label="Phone number" error={errors.phone}>
            <input
              id="phone"
              type="tel"
              inputMode="tel"
              {...register("phone", {
                required: "Please enter your phone number",
                validate: validatePhone,
              })}
              placeholder="08169216565"
              aria-invalid={errors.phone ? "true" : "false"}
              className={inputClass(errors.phone)}
            />
          </Field>

          <Field id="email" label="Email address" error={errors.email}>
            <input
              id="email"
              type="email"
              inputMode="email"
              {...register("email", {
                required: "Please enter your email address",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
                  message: "Enter a valid email address",
                },
              })}
              placeholder="name@example.com"
              aria-invalid={errors.email ? "true" : "false"}
              className={inputClass(errors.email)}
            />
          </Field>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field id="from" label="Moving from">
            <input
              id="from"
              {...register("from")}
              placeholder="e.g. Lekki Phase 1"
              className={inputClass(false)}
            />
          </Field>

          <Field id="to" label="Moving to">
            <input
              id="to"
              {...register("to")}
              placeholder="e.g. Ikeja GRA"
              className={inputClass(false)}
            />
          </Field>
        </div>

        <Field id="message" label="Additional details">
          <textarea
            id="message"
            {...register("message")}
            placeholder="Number of rooms, items needing special care, preferred date…"
            rows={4}
            className={inputClass(false)}
          />
        </Field>

      </div>

      <button
        type="submit"
        disabled={loading}
        className="group mt-8 inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-white shadow-soft transition-all duration-500 ease-premium hover:bg-primary-deep hover:shadow-lift disabled:cursor-not-allowed disabled:opacity-55 disabled:hover:shadow-soft"
      >
        {loading ? "Sending…" : "Submit request"}
        {!loading && (
          <ArrowRight
            size={17}
            className="transition-transform duration-500 ease-premium group-hover:translate-x-1"
          />
        )}
      </button>

      <p className="mt-4 text-center text-xs text-ink/40">
        Prefer to talk? Call{" "}
        <a
          href="tel:+2348169216565"
          className="font-medium text-ink/60 underline decoration-ink/20 underline-offset-2 transition-colors hover:text-primary"
        >
          0816 921 6565
        </a>
      </p>
    </form>
  );
}
