// src/components/ContactForm.jsx
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form Submitted", formData);
  };

  return (
    <div className="w-full md:w-1/2 bg-gray-100 p-6 rounded-2xl shadow-md">
      <h2 className="text-[#7c8c7d] text-xl font-semibold mb-4">Contact Form</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          className="w-full p-3 rounded border bg-white border-gray-300 focus:outline-[#7c8c7d]"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full p-3 rounded border bg-white border-gray-300 focus:outline-[#7c8c7d]"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          placeholder="Message"
          className="w-full p-3 rounded bg-white border border-gray-300 focus:outline-[#7c8c7d]"
        ></textarea>
        <button
          type="submit"
          className="bg-[#7c8c7d]  text-white px-5 py-2 rounded hover:bg-red-600"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
