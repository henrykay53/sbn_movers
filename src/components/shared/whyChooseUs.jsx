import { Users, Globe, ShieldCheck, SlidersHorizontal } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "./sectionHeading";

const ease = [0.22, 1, 0.36, 1];

const reasons = [
  { icon: Users, text: "Customer-centric service" },
  { icon: Globe, text: "Nationwide reach with local expertise" },
  { icon: ShieldCheck, text: "Maximum safety for your items" },
  { icon: SlidersHorizontal, text: "Flexible service tailored to your needs" },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-start gap-14 md:grid-cols-2 md:gap-20">

          {/* Left: the claim */}
          <SectionHeading
            eyebrow="Why SBN"
            title="The details are where moves go wrong"
            subtitle="So we obsess over them — planning, packing, and handling, all under one accountable team."
            align="left"
          />

          {/* Right: the reasons, as a quiet ruled list */}
          <div className="divide-y divide-ink/8">
            {reasons.map(({ icon: Icon, text }, index) => (
              <motion.div
                key={text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: index * 0.08, ease }}
                className="group flex items-center gap-5 py-6 first:pt-0 last:pb-0"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/8 text-primary transition-colors duration-500 ease-premium group-hover:bg-primary group-hover:text-white">
                  <Icon size={19} strokeWidth={1.75} />
                </span>

                <p className="text-base leading-snug text-ink/80">{text}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
