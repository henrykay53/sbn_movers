import {
  Users,
  Globe,
  ShieldCheck,
  SlidersHorizontal,
} from "lucide-react";

const reasons = [
  {
    icon: Users,
    text: "Customer-centric service",
  },
  {
    icon: Globe,
    text: "Nationwide reach with local expertise",
  },
  {
    icon: ShieldCheck,
    text: "Maximum safety for your items",
  },
  {
    icon: SlidersHorizontal,
    text: "Flexible service tailored to your needs",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-gray-100 py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">

        <h2 className="text-3xl font-bold mb-10">
          Why Choose Us
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {reasons.map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition flex items-center gap-4 text-left"
            >
              <div className="bg-primary/10 p-3 rounded-lg">
                <Icon className="text-primary" size={22} />
              </div>

              <p className="text-gray-700 text-sm sm:text-base">
                {text}
              </p>
            </div>
          ))}
          
        </div>

      </div>
    </section>
  );
}