import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-background text-text py-6 border-t border-gray-200 mt-10">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm">© {new Date().getFullYear()} LakVee Softwares & Skill Development Institute. All rights reserved.</div>
        <div className="flex gap-4 text-primary">
          <a href="https://www.linkedin.com/company/lakvee" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://www.instagram.com/lakveeofficial" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.facebook.com/lakveeofficial" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://www.youtube.com/@lakveeofficial" target="_blank" rel="noopener noreferrer">YouTube</a>
        </div>
      </div>
    </footer>
  );
}
