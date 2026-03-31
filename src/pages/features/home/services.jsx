import AnimatedSection from "../../../components/shared/animatedSection";

const services = [
  {
    title: "Packaging",
    description:
      "Secure wrapping and protection of furniture and valuables to prevent damage during transit.",
    image: "/images/packaging.jpeg",
    alt: "men using film to cover furniture for transport",
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
    image: "/images/holageTwo.jpeg",
    alt: "a logistics truck transporting goods",
  },
  {
    title: "Technology-Driven Planning",
    description:
      "Smart logistics powered by digital tools for planning, tracking, and operational efficiency.",
    image: "/images/tech.jpeg",
    alt: "a logistics personnel using a laptop",
  },
];

export default function Services() {
  return (
    <section className="py-20 sm:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Services
          </h2>
        </AnimatedSection>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={service.title} delay={index * 0.1}>
              
              <div className="bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition hover:-translate-y-2 flex flex-col">
                
                {/* Image */}
                <img
                  src={service.image}
                  alt={service.alt}
                  className="w-full h-44 object-cover"
                />

                {/* Content */}
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="font-semibold mb-2">
                    {service.title}
                  </h3>

                  <p className="text-sm text-gray-600 flex-grow">
                    {service.description}
                  </p>

                  {/* CTA */}
                  <a
                    href="/contact"
                    className="mt-4 inline-block text-primary text-sm font-medium hover:underline"
                  >
                    Get started →
                  </a>
                </div>

              </div>

            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
}