const reasons = [
  "Customer-centric service",
  "Nationwide reach with local expertise",
  "Maximum safety for your items",
  "Flexible service tailored to your needs",
];

export default function WhyChooseUs() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold mb-10">Why Choose Us</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {reasons.map((reason) => (
            <div
              key={reason}
              className="bg-white p-6 rounded shadow"
            >
              {reason}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}