// src/pages/Contact.jsx
import ContactInfo from "../components/ContactInfo";
import ContactForm from "../Components/ContactForm";
import FAQs from "../Components/FAQs";

export default function Contact() {
  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-[#7c8c7d] text-center mb-4">Get in Touch with Us</h1>

      <div className="flex flex-col md:flex-row gap-6 mb-12 mt-20">
        <ContactInfo />
        <ContactForm />
      </div>

      <FAQs />
    </div>
  );
}
