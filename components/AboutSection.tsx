import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="bg-background text-text py-20 px-6 md:px-16 h-screen flex items-center justify-center w-full">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Image */}
        <div className="flex-1">
          <Image
            src="/images/classroom_ai.png"
            alt="Lakvee Softwares About"
            width={500}
            height={500}
            className="object-contain rounded-md"
          />
        </div>

        {/* Text Content */}
        <div className="flex-1 space-y-6">
          <div className="flex items-center  gap-5">
            <h2 className="text-3xl font-bold text-primary">About Lakvee</h2>
            <div className="w-16 h-1 rounded-full bg-secondary" />
          </div>

          <div>
            <h3 className="text-xl font-semibold text-accent mb-1">
              Who We Are
            </h3>
            <p>
              Lakvee Software Training Institute is a future-focused training
              and placement organization committed to creating industry-ready
              software professionals. We are driven by a mission to equip
              students and working professionals with the{" "}
              <strong>Technical Skills</strong>,{" "}
              <strong>Live Project Experience</strong>,{" "}
              <strong>Real-Time Industry Exposure</strong>, and the{" "}
              <strong>Confidence</strong> needed to thrive in today’s
              competitive IT industry.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-accent mb-1">
              Our Vision
            </h3>
            <p>
              To be the most trusted institute for software training and
              placement support across India, bridging the gap between
              theoretical education and professional readiness.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-accent mb-1">
              Our Mission
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>
                Deliver hands-on, practical training that mirrors real-world
                scenarios
              </li>
              <li>Connect learners with industry opportunities</li>
              <li>Build a community of tech professionals who grow together</li>
            </ul>
          </div>

          {/* <div>
            <h3 className="text-xl font-semibold text-accent mb-1">What Sets Us Apart</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 list-disc list-inside text-sm md:text-base">
              <li>Project-Based Training</li>
              <li>Small Batch Sizes for Personal Attention</li>
              <li>Dedicated Placement Cell</li>
              <li>Mentorship from Working Professionals</li>
              <li>Flexible Batches – Online / Offline / Weekend</li>
              <li>Unlimited Mock Interview Calls</li>
              <li>Demo Sessions</li>
              <li>Soft Skill & English Communication Sessions</li>
              <li>Lifetime Course Access</li>
              <li>Recorded Sessions</li>
              <li>100% Placement Assistance</li>
            </ul>
          </div> */}
        </div>
      </div>
    </section>
  );
}
