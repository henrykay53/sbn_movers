const reasons = [
  "Your items are our top priority with unmatched safety",
  "Nationwide reach with strong local expertise",
  "Flexible service design tailored to your needs",
];

export default function WhyChooseUs() {
  return (
    <section className="bg-blue-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl font-semibold mb-8">
          Why Choose Us
        </h2>

        <div className="space-y-4">
          {reasons.map((reason) => (
            <p key={reason} className="text-gray-200">
              {reason}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}