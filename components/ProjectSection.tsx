import React from "react";
import { FaCode, FaMobileAlt, FaProjectDiagram } from "react-icons/fa";
import { BsFillChatDotsFill } from "react-icons/bs";
import { MdDesignServices } from "react-icons/md";
import { AiOutlineApi } from "react-icons/ai";

const projectItems = [
  {
    title: "E-commerce Website Projects",
    icon: <FaProjectDiagram className="text-primary text-2xl" />,
  },
  {
    title: "Student Management System",
    icon: <FaCode className="text-primary text-2xl" />,
  },
  {
    title: "Online Portfolio Builder",
    icon: <MdDesignServices className="text-primary text-2xl" />,
  },
  {
    title: "Chat Applications",
    icon: <BsFillChatDotsFill className="text-primary text-2xl" />,
  },
  {
    title: "REST APIs & Backend Services",
    icon: <AiOutlineApi className="text-primary text-2xl" />,
  },
  {
    title: "Mobile App UI/UX Prototypes",
    icon: <FaMobileAlt className="text-primary text-2xl" />,
  },
];

export default function ProjectSection() {
  return (
    <section id="projects" className="py-16 bg-background text-text">
      <div className="max-w-screen-xl mx-auto py-0 px-4 md:px-16  space-y-10">
        {/* Section Heading */}
        <div className="flex items-center gap-5">
          <div className="bg-[#003366] px-6 py-2 rounded-lg shadow-lg flex items-center">
            <h2 className="text-3xl font-bold text-white tracking-wide">
              Live Development Projects
            </h2>
          </div>
          <div className="w-16 h-1 rounded-full bg-secondary" />
        </div>

        {/* Description */}
        <p className="text-gray-700 text-base max-w-3xl">
          All Lakvee courses include real-life development exposure. Students work
          on real projects integrated into the training for portfolio development,
          internship simulation, and client delivery experience.
        </p>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projectItems.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 bg-white shadow-sm rounded-lg p-5 border border-gray-200 hover:shadow-md transition-transform hover:-translate-y-1 duration-300"
            >
              <div>{item.icon}</div>
              <h3 className="font-medium text-lg">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}