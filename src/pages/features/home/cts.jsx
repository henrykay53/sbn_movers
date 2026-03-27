import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="bg-secondary text-white py-20 text-center">
      <h2 className="text-3xl font-bold mb-6">
        Ready to Move Without Stress?
      </h2>

      <Link
        to="/contact"
        className="bg-white text-secondary px-6 py-3 rounded font-semibold"
      >
        Contact Us Now
      </Link>
    </section>
  );
}