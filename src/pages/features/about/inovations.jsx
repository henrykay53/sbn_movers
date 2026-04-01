export default function Innovations() {
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

  return (
    <section className="relative overflow-hidden py-24 bg-secondary text-white">

      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-r from-secondary via-secondary/90 to-secondary" />

      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute w-[200%] h-full bg-linear-to-r from-transparent via-white/40 to-transparent animate-slide" />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_70%)]" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Our Innovation
          </h2>
          <p className="text-gray-200 max-w-2xl mx-auto text-sm sm:text-base">
            We combine technology, strategy, and expertise to deliver a smarter and more efficient moving experience.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-10 md:grid-cols-2">

          {innovations.map((item, index) => (
            <div
              key={index}
              className="
                bg-white/10 backdrop-blur-md 
                border border-white/10
                rounded-2xl 
                overflow-hidden 
                shadow-lg
                transition-all duration-300
                hover:scale-[1.02] hover:shadow-2xl
              "
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6 text-left">
                <h3 className="text-lg font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-200 text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}