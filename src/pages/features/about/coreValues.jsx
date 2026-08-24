import { Users, Compass, Cpu, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "../../../components/shared/sectionHeading";

const ease = [0.22, 1, 0.36, 1];

const values = [
  {
    title: "Customer-Centricity",
    icon: Users,
    text: "We prioritize your needs and ensure a smooth, stress-free moving experience.",
  },
  {
    title: "Strategic Planning",
    icon: Compass,
    text: "Every move is carefully planned to ensure efficiency and reliability.",
  },
  {
    title: "Technology-Driven",
    icon: Cpu,
    text: "We leverage modern tools to optimize logistics and improve service delivery.",
  },
  {
    title: "Efficiency & Cost Optimization",
    icon: TrendingUp,
    text: "We deliver high-quality services while minimizing time and cost.",
  },
];

export default function CoreValues() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">

        <SectionHeading
          eyebrow="Our principles"
          title="The values that drive how we work"
          subtitle="Four commitments that shape every move we handle."
          className="mb-16"
        />

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-ink/8 bg-ink/8 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: index * 0.08, ease }}
                className="group bg-white p-8 transition-colors duration-500 ease-premium hover:bg-surface"
              >
                <span className="mb-6 flex size-12 items-center justify-center rounded-xl bg-primary/8 text-primary transition-colors duration-500 ease-premium group-hover:bg-primary group-hover:text-white">
                  <Icon size={21} strokeWidth={1.75} />
                </span>

                <h3 className="text-base font-semibold leading-snug text-ink">
                  {value.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-ink/60">
                  {value.text}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
