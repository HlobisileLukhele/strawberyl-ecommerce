// src/components/FAQSection.jsx
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function FAQs() {
  const [openId, setOpenId] = useState(null);

  const faqs = [
    { id: 1, question: " What makes Strawberyl products sustainable?", answer: "Strawberyl accessories are handcrafted from eco-friendly bamboo, a fast-growing renewable resource. Our production methods minimize waste and support environmental stewardship." },
    { id: 2, question: " Are your accessories truly handmade?", answer: "Yes. Every Strawberyl piece is carefully crafted by skilled artisans, ensuring unique designs and high-quality workmanship." },
    { id: 3, question: " How do I care for my bamboo accessories?", answer: "Avoid prolonged exposure to water and store in a dry place. Wipe gently with a soft cloth to preserve their natural beauty." },
    { id: 4, question: " Why choose bamboo over other materials?", answer: "Bamboo is lightweight, durable, and sustainable. It adds natural elegance to accessories while reducing our ecological footprint." },
    { id: 5, question: " Do you offer custom designs?", answer: "Yes! We love collaborating with customers to create personalized bamboo accessories. Contact us to discuss your ideas." },
    { id: 6, question: " How can I track my order?", answer: "Once your order is shipped, you will receive a tracking number via email. You can use this number on our website to track your order's status." },
    { id: 7, question: "8 What is your return policy?", answer : "We accept returns within 30 days of delivery. Please contact us for a return merchandise authorization (RMA) number before sending items back. Items must be in their original condition." },

];

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="bg-gray-100 p-6 rounded-2xl shadow-md mt-10">
      <h2 className="text-[#7c8c7d] text-xl font-semibold mb-4">Frequently Asked Questions</h2>
      <div className="space-y-4 text-gray-700">
        {faqs.map((faq) => (
          <div key={faq.id} className=" pb-2">
            <button
              className="w-full flex justify-between items-center text-left font-medium text-lg focus:outline-none"
              onClick={() => toggleFAQ(faq.id)}
            >
              <span>{faq.question}</span>
              {openId === faq.id ? <FaChevronUp className="text-[#7c8c7d]" /> : <FaChevronDown className="text-[#7c8c7d]" />}
            </button>
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                openId === faq.id ? "max-h-40 mt-2" : "max-h-0"
              }`}
            >
              <p className="text-md text-gray-600">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
