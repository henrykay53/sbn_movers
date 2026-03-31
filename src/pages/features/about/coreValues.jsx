import { Users, Compass, Cpu, TrendingUp } from "lucide-react";

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
    <section className="bg-gradient-to-br from-red-50 to-red-200 py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">

        {/* Heading */}
        <h2 className="text-3xl font-bold mb-4">
          Our Core Principles
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto text-sm sm:text-base">
          The values that drive how we operate and deliver excellence every day.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <div
                key={value.title}
                className="
                  bg-white 
                  p-6 
                  rounded-xl 
                  shadow-md
                  transition-all duration-300
                  hover:shadow-xl hover:-translate-y-2
                  flex flex-col items-center text-center
                "
              >
                {/* Icon */}
                <div className="
                  w-14 h-14 mb-4
                  flex items-center justify-center
                  rounded-full
                  bg-primary/10 text-primary
                ">
                  <Icon size={26} />
                </div>

                {/* Title */}
                <h3 className="font-semibold mb-2 text-sm sm:text-base">
                  {value.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {value.text}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}