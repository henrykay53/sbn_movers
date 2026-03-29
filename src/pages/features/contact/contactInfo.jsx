import {
  Phone,
  Mail,
  MessageCircle,
  MapPin,
} from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="space-y-8">

      {/* Header */}
      <div>
        <h2 className="text-xl font-semibold mb-2">
          Get in Touch
        </h2>
        <p className="text-gray-600 text-sm sm:text-base">
          We’re available 24/7 to help you move smoothly.
        </p>
      </div>

      {/* Phone */}
      <div className="flex items-start gap-4">
        <Phone className="text-primary mt-1" size={20} />
        <div>
          <p className="font-medium">Phone</p>
          <a
            href="tel:08169216565"
            className="text-gray-600 hover:text-primary transition"
          >
            08169216565
          </a>
        </div>
      </div>

      {/* Email */}
      <div className="flex items-start gap-4">
        <Mail className="text-primary mt-1" size={20} />
        <div>
          <p className="font-medium">Email</p>
          <a
            href="mailto:segzbrannigltd@gmail.com"
            className="text-gray-600 hover:text-primary transition"
          >
            segzbrannigltd@gmail.com
          </a>
        </div>
      </div>

      {/* WhatsApp */}
      <div className="flex items-start gap-4">
        <MessageCircle className="text-green-500 mt-1" size={20} />
        <div>
          <p className="font-medium">WhatsApp</p>
          <a
            href="https://wa.me/2348169216565?text=Hello%20I%20need%20a%20moving%20service"
            target="_blank"
            rel="noreferrer"
            className="text-gray-600 hover:text-green-600 transition"
          >
            Chat with us instantly
          </a>
        </div>
      </div>

      {/* Address */}
      <div className="flex items-start gap-4">
        <MapPin className="text-primary mt-1" size={20} />
        <div>
          <p className="font-medium">Address</p>
          <p className="text-gray-600">
            km 20 Lekki-Epe Expressway, beside Oral Estate,
            Lekki, Lagos
          </p>
        </div>
      </div>

    </div>
  );
}