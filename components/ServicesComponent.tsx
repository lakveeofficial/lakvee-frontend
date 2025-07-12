import React from "react";

const trainingPrograms = [
	{
		title: "📘 Full-Stack Development",
		description:
			"Learn end-to-end application development from frontend to backend using the latest technologies.",
		modules: [
			"HTML, CSS, JavaScript",
			"React / Angular / Vue",
			"Node.js / Express.js",
			"MongoDB / MySQL",
			"Git & Deployment",
		],
	},
	{
		title: "💻 Core Programming & Backend Development",
		modules: [
			"C, C++",
			"Java (Core + Advanced) + Spring Boot",
			"Python (with Flask / Django)",
			".NET (C#, ASP.NET)",
		],
	},
	{
		title: "📱 Web & Mobile App Development",
		modules: [
			"Android Development (Java / Kotlin)",
			"iOS App Development (Swift)",
			"Flutter with Dart",
			"Responsive Web Design",
		],
	},
	{
		title: "🧠 Data Science & Analytics",
		modules: [
			"Python for Data Analysis",
			"NumPy, Pandas, Matplotlib",
			"SQL + Data Visualization",
			"Power BI / Tableau",
			"Basic Machine Learning",
		],
	},
	{
		title: "🧪 Software Testing",
		modules: [
			"Manual Testing",
			"Automation with Selenium",
			"TestNG, JUnit, Cucumber Framework",
			"REST API Testing, Postman, Swagger API",
			"Performance Testing Tools (JMeter)",
			"Database Testing (SQL, MySQL, Oracle, MongoDB)",
		],
	},
	{
		title: "🎨 UI/UX Design",
		modules: [
			"User Research & Wireframing",
			"Figma & Adobe XD",
			"Design Systems & Usability",
		],
	},
	{
		title: "⏱️ Short-Term & Job-Focused Courses",
		modules: [
			"SVN, Git & Github Version Control",
			"DevOps Fundamentals",
			"Resume Building & Interview Readiness",
			"Aptitude + Soft Skills Sessions",
			"Backend Support Development",
			"System Support Engineer",
			"Windows Support Engineer",
			"Application Support Engineer",
			"Product Support Engineer",
			"Linux Support Admin",
			"Unix Support Admin",
		],
	},
];

export default function ServicesComponent() {
	return (
		<div className="relative bg-cover bg-center bg-no-repeat bg-fixed bg-certificate">
			{/* Dark Overlay */}
			<div className="absolute inset-0 bg-black bg-opacity-40 z-0" />

			{/* Content */}
			<section id="services" className="relative z-10 py-16 px-4 md:px-16 space-y-10 max-w-screen-xl mx-auto text-text">
				<div className="flex items-center gap-5">
					<div className="bg-[#003366] px-6 py-2 rounded-lg shadow-lg flex items-center">
						<h2 className="text-3xl font-bold text-white tracking-wide">
							Courses Offered
						</h2>
					</div>
					<div className="w-16 h-1 rounded-full bg-white" />
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
					{trainingPrograms.map((program, index) => (
						<div
							key={index}
							className="bg-gradient-to-tr from-slate-50 to-slate-300 backdrop-blur-md text-text rounded-xl shadow-md p-6 hover:scale-105 transform transition-all duration-300 ease-in-out border border-gray-200"
						>
							<h3 className="text-xl font-semibold mb-4 text-primary">
								{program.title}
							</h3>
							{program.description && (
								<p className="text-sm text-gray-700 mb-3">
									{program.description}
								</p>
							)}
							<ul className="list-disc list-inside space-y-1 text-sm">
								{program.modules.map((item, idx) => (
									<li key={idx}>{item}</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</section>
		</div>
	);
}