import {
  Phone,
  Mail,
  MessageCircle,
  MapPin,
} from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="
      bg-white/10 backdrop-blur-md 
      border border-white/10
      p-6 sm:p-8 
      rounded-2xl 
      shadow-xl 
      space-y-8
    ">

      <div>
        <h2 className="text-xl font-semibold mb-2 text-white">
          Get in Touch
        </h2>
        <p className="text-gray-200 text-sm">
          We’re available 24/7 to help you move smoothly.
        </p>
      </div>

      <div className="flex items-start gap-4">
        <Phone className="text-white mt-1" size={20} />
        <div>
          <p className="font-medium">Phone</p>
          <a href="tel:08169216565" className="text-gray-200 hover:underline">
            08169216565
          </a>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <Mail className="text-white mt-1" size={20} />
        <div>
          <p className="font-medium">Email</p>
          <a href="mailto:segzbrannigltd@gmail.com" className="text-gray-200 hover:underline">
            segzbrannigltd@gmail.com
          </a>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <MessageCircle className="text-white mt-1" size={20} />
        <div>
          <p className="font-medium">WhatsApp</p>
          <a
            href="https://wa.me/2348169216565"
            target="_blank"
            rel="noreferrer"
            className="text-gray-200 hover:underline"
          >
            Chat with us instantly
          </a>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <MapPin className="text-white mt-1" size={20} />
        <p className="text-gray-200 text-sm">
          Km 20 Lekki-Epe Expressway, beside Oral Estate,
          Lekki, Lagos
        </p>
      </div>

    </div>
  );
}