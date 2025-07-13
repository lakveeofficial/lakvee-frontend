"use client";
import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", contact: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      name: form.name,
      email: form.email,
      contact: form.contact,
      message: form.message,
    };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID || "", 
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID || "", 
        templateParams,
        process.env.NEXT_PUBLIC_EMAIL_PUBLIC_ID || ""
      )
      .then(
        () => {
          setSubmitted(true);
          setTimeout(()=>{
            setSubmitted(false);
          }, 5000);
          setForm({ name: "", email: "",contact: "", message: "" });
          setLoading(false);
        },
        (error) => {
          console.log("EmailJS error:", error.text);
          setLoading(false);
        }
      );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 max-w-lg mx-auto bg-gradient-to-tr from-primary via-pink-400 to-yellow-300 p-1 rounded-xl shadow-lg"
    >
      
      <div className="bg-white rounded-xl p-6">
        <h3 className="text-xl font-bold mb-4 text-primary text-center">Contact Us</h3>

        {submitted && <p className="text-green-600 mt-4 text-center font-bold">Thank you! We will reach you soon.</p>}
        <div className="mb-3">
          <label className="block mb-1 font-medium text-primary">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border border-primary rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400 bg-pink-50"
          />
        </div>
        <div className="mb-3">
          <label className="block mb-1 font-medium text-primary">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border border-primary rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-300 bg-yellow-50"
          />
        </div>
        <div className="mb-3">
          <label className="block mb-1 font-medium text-primary">Contact</label>
          <input
            name="contact"
            value={form.contact}
            onChange={handleChange}
            required
            className="w-full border border-primary rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-300 bg-yellow-50"
          />
        </div>
        <div className="mb-3">
          <label className="block mb-1 font-medium text-primary">Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full border border-primary rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary bg-blue-50"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full disabled:opacity-50 disabled:animate-pulse flex items-center justify-center gap-2 bg-[#0072CE] hover:bg-[#005fa3] text-white font-semibold px-6 py-2 rounded-lg shadow hover:scale-105 transition-all duration-200"
        >
          <FaPaperPlane /> Send Enquiry
        </button>
      </div>
    </form>
  );
}
