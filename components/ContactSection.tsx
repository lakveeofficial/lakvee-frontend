import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaGlobe } from "react-icons/fa";
import { FaLinkedin, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa6";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-white text-text py-16">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 space-y-10">
        {/* Heading */}
        <div className="flex items-center gap-5">
          <div className="bg-[#003366] px-6 py-2 rounded-lg shadow-lg flex items-center">
            <h2 className="text-3xl font-bold text-white tracking-wide">Contact Us</h2>
          </div>
          <div className="w-16 h-1 rounded-full bg-secondary" />
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-base items-center">
          <div className="space-y-7 flex flex-col justify-center md:justify-center order-1 text-lg md:text-xl">
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-primary mt-1" />
              <div>
                <p className="font-semibold">LakVee Softwares & Skill Development Institute</p>
                <p>
                  1st Floor, Samdariya Gold, <br />
                  Sirmour Chowk, Rewa (M.P.) 486001
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-primary" />
              <a href="tel:+919340052512" className="hover:underline">
                +91-93400 52512, +91-9964097664
              </a>
            </div>

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-primary" />
              <a href="mailto:lakveeofficial@gmail.com" className="hover:underline">
                lakveeofficial@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-4">
              <FaGlobe className="text-primary" />
              <a href="https://www.lakveesoftwares.co.in" target="_blank" rel="noopener noreferrer" className="hover:underline">
                www.lakveesoftwares.co.in
              </a>
            </div>

            <div>
              <p className="text-lg font-semibold mb-3 mt-6">Follow Us</p>
              <div className="flex gap-5 text-primary text-xl">
                <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
                <a href="#" aria-label="Instagram"><FaInstagram /></a>
                <a href="#" aria-label="Facebook"><FaFacebook /></a>
                <a href="#" aria-label="YouTube"><FaYoutube /></a>
              </div>
            </div>
          </div>

          <div className="flex justify-center md:justify-end items-center order-2">
            <div className="w-full md:w-[520px]">
              <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-primary mb-4 md:mb-6">Send Us a Message</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}