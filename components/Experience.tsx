import { Layout, Code, Database } from "lucide-react";

const jobs = [
  { period: "2025-2025 (3 months)", role: "UI/UX Intern", company: "@ The Makeover Guys", icon: <Layout /> },
  { period: "2024-2024 (3 months)", role: "Software Engineer Intern", company: "@ Zoom Mobile Solution", icon: <Code /> },
  { period: "2022-2022 (3 months)", role: "IT admin Intern", company: "@ MGB Berhad", icon: <Database /> },
];

export default function Experience() {
  return (
    <section className="px-4 md:px-12 max-w-6xl mx-auto my-24">
      <h2 className="font-serif text-4xl text-[#4A2C18] font-bold mb-8 underline decoration-[#E86C3F] decoration-4 underline-offset-4">Work Experiences</h2>
      
      <div className="bg-[#2D1B0E] p-8 rounded-3xl text-white relative">
         {/* Browser Header */}
         <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
         </div>
         <div className="bg-white rounded-full py-1 px-4 mb-12 text-center text-xs text-gray-600 font-mono w-1/2 mx-auto">
             www.myworkexperience.com
         </div>

         {/* Timeline */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-white/20 z-0"></div>

            {jobs.map((job, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform">
                 <div className="text-xs text-gray-400 mb-4">{job.period}</div>
                 <div className="w-4 h-4 bg-[#E86C3F] rounded-full mb-4 border-4 border-[#2D1B0E]"></div>
                 <h4 className="font-bold text-lg text-[#E86C3F]">{job.role}</h4>
                 <p className="text-sm mb-4">{job.company}</p>
                 <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center text-[#2D1B0E]">
                    {job.icon}
                 </div>
              </div>
            ))}
         </div>
      </div>
    </section>
  );
}