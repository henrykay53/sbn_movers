/**
 * Dark section shell.
 *
 * Replaces the four-layer background stack (moving streak + radial glow +
 * grid texture + gradient) that was copy-pasted across six sections. One
 * restrained treatment, applied consistently: deep ink base, a single soft
 * light fall from above, and hairlines at the seams.
 */
export default function DarkSection({ children, className = "" }) {
  return (
    <section
      className={`relative overflow-hidden bg-ink text-white ${className}`}
    >
      {/* Single soft light source from top — enough depth, no busywork */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_75%_at_50%_-15%,rgba(255,255,255,0.10),transparent_62%)]"
      />

      {/* Faint brand warmth in one corner */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 -bottom-40 h-96 w-96 rounded-full bg-primary/20 blur-[120px]"
      />

      {/* Seam hairlines */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/15 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent"
      />

      <div className="relative z-10">{children}</div>
    </section>
  );
}
