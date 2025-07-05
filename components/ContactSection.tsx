import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaGlobe } from "react-icons/fa";
import { FaLinkedin, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa6";

export default function ContactSection() {
  return (
    <section className="bg-white text-text py-16">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 space-y-10">
        {/* Heading */}
        <div className="flex items-center gap-5">
          <h2 className="text-3xl font-bold text-primary">Contact Us</h2>
          <div className="w-16 h-1 rounded-full bg-secondary" />
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-base">
          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-primary mt-1" />
              <div>
                <p className="font-semibold">Lakvee Software Training Institute</p>
                <p>
                  1st Floor, Samdariya Gold, <br />
                  Sirmour Chowk, Rewa (M.P.)
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-primary" />
              <a href="tel:+919340052512" className="hover:underline">
                +91-93400 52512
              </a>
            </div>

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-primary" />
              <a href="mailto:info@lakvee.com" className="hover:underline">
                info@lakvee.com
              </a>
            </div>

            <div className="flex items-center gap-4">
              <FaGlobe className="text-primary" />
              <a href="https://www.lakveesoftwares.co.in" target="_blank" rel="noopener noreferrer" className="hover:underline">
                www.lakveesoftwares.co.in
              </a>
            </div>
          </div>

          {/* Social + CTA */}
          <div className="flex flex-col justify-between space-y-6">
            <div>
              <p className="text-lg font-semibold mb-3">Follow Us</p>
              <div className="flex gap-5 text-primary text-xl">
                <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
                <a href="#" aria-label="Instagram"><FaInstagram /></a>
                <a href="#" aria-label="Facebook"><FaFacebook /></a>
                <a href="#" aria-label="YouTube"><FaYoutube /></a>
              </div>
            </div>

            <div className="bg-secondary text-white p-6 rounded-lg shadow-md">
              <p className="text-lg font-semibold mb-2">📣 Enquire Now</p>
              <p className="mb-4">For demo classes, corporate training, or franchise partnerships.</p>
              <button className="bg-primary hover:bg-opacity-90 text-white font-semibold px-6 py-3 rounded-full transition">
                Enquire Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}