import ContactForm from "@/components/ContactForm";
import HeaderComponent from "@/components/HeaderComponent";
import React from "react";

export default function ContactPage() {
  return (
    <div className="space-y-10">
      <HeaderComponent />
      <div className="px-8 pt-20">
        <ContactForm />
      </div>
    </div>
  );
}
