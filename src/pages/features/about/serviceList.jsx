import { Truck, Warehouse, Package, Car } from "lucide-react";

const services = [
  { icon: Truck, title: "Logistics" },
  { icon: Warehouse, title: "Warehousing" },
  { icon: Package, title: "Packaging" },
  { icon: Car, title: "Car Sales & Haulage" },
];

export default function ServicesList() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6">
      <h2 className="text-2xl font-semibold mb-10 text-center">
        Our Services
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {services.map(({ icon: Icon, title }) => (
          <div
            key={title}
            className="p-6 rounded-xl shadow hover:shadow-lg transition text-center"
          >
            <Icon className="mx-auto mb-4 text-primary" size={28} />
            <p className="font-medium">{title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}