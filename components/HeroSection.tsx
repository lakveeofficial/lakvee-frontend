import { GoDownload } from "react-icons/go";

export default function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-center text-center px-4 md:px-8 h-screen ">
      <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 text-text drop-shadow-md">
        LakVee Softwares & Skill Development Institute
      </h1>

      <h2 className="text-2xl md:text-3xl font-semibold mb-6  drop-shadow-sm">
        Learn. Build. Get Hired.
      </h2>

      <p className="text-base md:text-lg max-w-2xl mb-8">
        Where skills meet opportunity – <i>Get trained by experts</i>, build
        real-world projects, and launch your IT career with confidence.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        {/* Primary CTA */}
        <button className="bg-gradient-to-tr text-white opacity-80 from-slate-950 via-slate-800 to-slate-800 font-semibold px-6 py-3 rounded-full shadow-md hover:opacity-100 transition">
          📌 Book a Free Demo Session
        </button>

        {/* Secondary CTA */}
        <button className="border bg-slate-100 border-slate-950 text-slate-800 opacity-80 hover:opacity-100 flex items-center gap-2 px-6 py-3 rounded-full transition">
          <GoDownload className="text-lg" />
          Download Course Brochure
        </button>
      </div>
    </div>
  );
}
