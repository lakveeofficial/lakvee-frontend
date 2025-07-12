import React from "react";
import { HiOutlineCheckCircle } from "react-icons/hi";

const steps = [
  "Book a Free Counseling Session",
  "Choose a Program (with guidance from experts)",
  "Enroll and Start Learning",
  "Work on Live Projects",
  "Placement Support and Job Interview Rounds",
];

const modes = [
  "Offline (Classroom – Rewa, MP)",
  "Online Live Batches (Zoom/Google Meet)",
  "Weekend / Evening Batches for Working Professionals",
];

export default function AdmissionSection() {
  return (
    <section id="courses" className="relative bg-cover bg-center bg-no-repeat bg-fixed bg-hero h-screen text-white flex items-center justify-center">
      <div className="absolute inset-0 bg-black bg-opacity-80 z-0" />
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 space-y-12 z-10">
        {/* Header */}
        <div className="flex items-center gap-5">
          <div className="relative flex items-center">
            <span className="absolute inset-0 bg-[#003366] rounded-lg -skew-x-12 w-full h-full z-0" />
            <h2 className="relative text-3xl font-bold text-white tracking-wide px-6 py-2 z-10">Admission Process</h2>
          </div>
          <div className="w-16 h-1 rounded-full bg-secondary" />
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <ol className="space-y-6 border-l-4 border-primary pl-20">
              {steps.map((step, index) => (
                <li key={index} className="relative group">
                  <span className="absolute -left-8 top-1 ">
                    <HiOutlineCheckCircle size={24} />
                  </span>
                  <div className="text-lg font-medium">{`Step ${index + 1}:`} <span className="font-normal">{step}</span></div>
                </li>
              ))}
            </ol>
          </div>

          {/* Modes of Learning */}
          <div className="shadow-sm rounded-lg p-6 space-y-4 border border-slate-50 flex flex-col items-center text-center">
            <h3 className="text-xl font-semibold mb-2">
              Modes of Learning
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-100">
              {modes.map((mode, idx) => (
                <li key={idx}>{mode}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}