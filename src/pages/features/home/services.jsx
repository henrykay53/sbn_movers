import AnimatedSection from "../../../components/shared/animatedSection";

export default function Services() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <AnimatedSection>
          <h2 className="text-3xl font-bold mb-12">
            Our Services
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-4 gap-8">
          {["Logistics", "Warehousing", "Packaging", "Truck Rentals"].map(
            (service, index) => (
              <AnimatedSection key={service} delay={index * 0.1}>
                <div className="p-6 rounded-xl shadow hover:shadow-xl transition hover:-translate-y-2">
                  {service}
                </div>
              </AnimatedSection>
            )
          )}
        </div>

      </div>
    </section>
  );
}