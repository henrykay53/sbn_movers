const values = [
  "Customer-Centricity",
  "Strategic Planning",
  "Technology-Driven",
  "Efficiency & Cost Optimization",
];

export default function CoreValues() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl font-semibold mb-8">
          Our Core Principles
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {values.map((value) => (
            <div
              key={value}
              className="p-4 bg-white rounded-lg shadow text-sm"
            >
              {value}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}