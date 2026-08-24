import { motion } from "framer-motion";
import DarkSection from "../../../components/shared/darkSection";
import SectionHeading from "../../../components/shared/sectionHeading";

const ease = [0.22, 1, 0.36, 1];

const innovations = [
  {
    title: "Smart Logistics & Planning",
    text: "We leverage modern digital tools to plan, track, and optimize every move. From route efficiency to real-time coordination, our system ensures faster deliveries and reduced delays.",
    image: "/images/whiteBus.jpeg",
  },
  {
    title: "Intelligent Packaging System",
    text: "Our team uses advanced protective materials and proven techniques to safeguard your belongings from damage, dust, and environmental factors during transit.",
    image: "/images/packingTwo.jpeg",
  },
  {
    title: "Optimized Fleet Operations",
    text: "Our fleet is strategically managed to match the right vehicle with every job, ensuring efficiency, cost-effectiveness, and timely delivery across all locations.",
    image: "/images/busTwo.jpeg",
  },
  {
    title: "Automated Customer Experience",
    text: "From booking to delivery updates, we streamline communication and scheduling to give you a seamless, transparent, and stress-free moving experience.",
    image: "/images/automated.jpg",
  },
];

export default function Innovations() {
  return (
    <DarkSection className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">

        <SectionHeading
          eyebrow="How we operate"
          title="Technology behind every move"
          subtitle="We combine tooling, strategy, and hands-on expertise to make relocation predictable."
          tone="dark"
          className="mb-16"
        />

        <div className="grid gap-6 md:grid-cols-2">
          {innovations.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: index * 0.08, ease }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] transition-all duration-500 ease-premium hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07]"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[900ms] ease-premium group-hover:scale-105"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-linear-to-t from-ink/70 via-ink/10 to-transparent"
                />
              </div>

              <div className="p-7">
                <h3 className="text-lg font-semibold leading-snug text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {item.text}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </DarkSection>
  );
}
