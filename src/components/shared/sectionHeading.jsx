import { motion } from "framer-motion";

/**
 * Consistent section heading: tracked-out eyebrow, tight display title,
 * measured supporting line. `tone` switches it for dark or light sections.
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  tone = "light",
  align = "center",
  className = "",
}) {
  const onDark = tone === "dark";

  const alignment =
    align === "left" ? "text-left" : "text-center mx-auto items-center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`flex flex-col ${alignment} max-w-2xl ${className}`}
    >
      {eyebrow && (
        <span
          className={`eyebrow mb-4 ${onDark ? "text-white/50" : "text-primary"}`}
        >
          {eyebrow}
        </span>
      )}

      <h2
        className={`text-3xl sm:text-4xl md:text-[2.75rem] font-semibold leading-[1.1] ${
          onDark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`mt-5 text-base sm:text-lg leading-relaxed ${
            onDark ? "text-white/65" : "text-ink/60"
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
