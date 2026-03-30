const innovations = [
  "Visual surveys for remote inventory assessment",
  "Automated scheduling and logistics optimization",
  "Predictive maintenance using smart sensors",
  "Hyper-personalized moving plans",
  "24/7 customer support systems",
];

export default function Innovations() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6">
      <h2 className="text-2xl font-semibold mb-8 text-center">
        Our Innovation
      </h2>

      <div className="space-y-4">
        {innovations.map((item) => (
          <div
            key={item}
            className="p-4 border rounded-lg hover:shadow transition"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}