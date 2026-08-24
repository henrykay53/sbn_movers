import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionHeading from "./sectionHeading";

const ease = [0.22, 1, 0.36, 1];

const services = [
  {
    title: "Packaging",
    description:
      "Secure wrapping and protection of furniture and valuables to prevent damage during transit.",
    image: "/images/loading.jpeg",
    alt: "men using film to cover furniture for transport",
  },
  {
    title: "Technology-Driven Planning",
    description:
      "Smart logistics powered by digital tools for planning, tracking, and operational efficiency.",
    image: "/images/tech.jpeg",
    alt: "a logistics personnel using a laptop",
  },
  {
    title: "Haulage & Truck Rentals",
    description:
      "Reliable trucks for short and long distance moves, tailored to your logistics needs.",
    image: "/images/holageOne.jpeg",
    alt: "a truck used for haulage services",
  },
  {
    title: "Logistics & Transportation",
    description:
      "Efficient and timely movement of goods with a focus on safety and reliability.",
    image: "/images/truck.jpeg",
    alt: "a logistics truck transporting goods",
  },
];

export default function Services() {
  return (
    <section className="bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">

        <SectionHeading
          eyebrow="What we do"
          title="Services built around your move"
          subtitle="Four capabilities that cover everything from a single apartment to a full commercial relocation."
          className="mb-16"
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: index * 0.08, ease }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-ink/6 bg-white shadow-soft transition-all duration-500 ease-premium hover:-translate-y-1 hover:shadow-lift"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[900ms] ease-premium group-hover:scale-105"
                />
                {/* Scrim at both ends so the index and the card edge read
                    against light or busy photography */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-linear-to-b from-ink/45 via-transparent to-ink/25"
                />
                <span
                  aria-hidden="true"
                  className="absolute left-4 top-4 text-xs font-semibold tabular-nums text-white/80"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Content */}
              <div className="flex grow flex-col p-6">
                <h3 className="text-base font-semibold leading-snug text-ink">
                  {service.title}
                </h3>

                <p className="mt-3 grow text-sm leading-relaxed text-ink/60">
                  {service.description}
                </p>

                <Link
                  to="/contact"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors duration-300 hover:text-primary-deep"
                >
                  Get started
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-500 ease-premium group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
