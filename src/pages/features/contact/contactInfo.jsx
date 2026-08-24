import { Phone, Mail, MessageCircle, MapPin } from "lucide-react";

const channels = [
  {
    icon: Phone,
    label: "Phone",
    value: "0816 921 6565",
    href: "tel:+2348169216565",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat with us instantly",
    href: "https://wa.me/2348169216565?text=Hello%20I%20need%20a%20moving%20service",
    external: true,
  },
  {
    icon: Mail,
    label: "Email",
    value: "segzbrannigltd@gmail.com",
    href: "mailto:segzbrannigltd@gmail.com",
  },
];

export default function ContactInfo() {
  return (
    <div className="relative h-full overflow-hidden rounded-2xl bg-ink p-7 text-white shadow-soft sm:p-9">

      {/* Depth, matching the dark sections elsewhere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_70%_at_50%_-10%,rgba(255,255,255,0.10),transparent_60%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-primary/25 blur-[100px]"
      />

      <div className="relative z-10">
        <h2 className="text-xl font-semibold">Get in touch</h2>
        <p className="mt-2 text-sm leading-relaxed text-white/55">
          Reach us on whichever channel suits you.
        </p>

        <div className="mt-8 divide-y divide-white/10">
          {channels.map(({ icon: Icon, label, value, href, external }) => (
            <a
              key={label}
              href={href}
              {...(external
                ? { target: "_blank", rel: "noreferrer" }
                : {})}
              className="group flex items-center gap-4 py-5 first:pt-0 transition-colors duration-300"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white/8 text-white/80 transition-colors duration-500 ease-premium group-hover:bg-white group-hover:text-ink">
                <Icon size={17} strokeWidth={1.75} />
              </span>

              <span className="min-w-0">
                <span className="block text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-white/40">
                  {label}
                </span>
                <span className="mt-0.5 block truncate text-sm text-white/85 transition-colors duration-300 group-hover:text-white">
                  {value}
                </span>
              </span>
            </a>
          ))}

          {/* Address is not a link target, so it sits outside the list pattern */}
          <div className="flex items-start gap-4 pt-5">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white/8 text-white/80">
              <MapPin size={17} strokeWidth={1.75} />
            </span>

            <span>
              <span className="block text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-white/40">
                Office
              </span>
              <span className="mt-0.5 block text-sm leading-relaxed text-white/85">
                Km 20 Lekki-Epe Expressway, beside Oral Estate, Lekki, Lagos
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
