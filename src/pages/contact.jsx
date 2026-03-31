import ContactForm from "./features/contact/contactForm";
import ContactInfo from "./features/contact/contactInfo";
import Map from "./features/contact/map";

export default function Contact() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">

        <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          Contact Us
        </h1>

        <div className="grid md:grid-cols-2 gap-10">
          <ContactForm />
          <ContactInfo />
        </div>

       
      </div>

       <div className="mt-16">
          <Map />
        </div>

    </section>
  );
}