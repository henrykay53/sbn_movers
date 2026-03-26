const services = [
  "Logistics",
  "Warehousing",
  "Packaging",
  "Truck Rentals",
];

export default function Services() {
  return (
    <section className="py-16 text-center">
      <h2 className="text-2xl font-bold mb-8">Our Services</h2>

      <div className="grid md:grid-cols-4 gap-6 px-6">
        {services.map((s) => (
          <div key={s} className="p-6 shadow rounded">
            {s}
          </div>
        ))}
      </div>
    </section>
  );
}