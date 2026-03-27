const testimonials = [
  {
    name: "Ade, Lekki",
    text: "SBN Movers made my relocation completely stress-free.",
  },
  {
    name: "Chioma, Ajah",
    text: "Very professional and reliable service.",
  },
  {
    name: "Tunde, Ikeja",
    text: "My items arrived safely and on time.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold mb-10">What Our Clients Say</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="p-6 shadow rounded">
              <p className="text-gray-600 mb-4">"{t.text}"</p>
              <h4 className="font-semibold">{t.name}</h4>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}