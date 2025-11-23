import { Code, Github } from "lucide-react";
import { FaReact, FaFigma, FaMicrosoft } from "react-icons/fa";
import { SiCanva, SiOpenai } from "react-icons/si";

const skills = [
  { name: "Canva", icon: <SiCanva size={40} />, desc: "Creating visual assets", color: "bg-blue-400" },
  { name: "Figma", icon: <FaFigma size={40} />, desc: "UI/UX design", color: "bg-purple-500" },
  { name: "VS Code", icon: <Code size={40} />, desc: "Front-end file editing", color: "bg-blue-600" },
  { name: "GitHub", icon: <Github size={40} />, desc: "Version control", color: "bg-gray-700" },
  { name: "ChatGPT", icon: <SiOpenai size={40} />, desc: "Idea generation", color: "bg-green-600" },
  { name: "Office", icon: <FaMicrosoft size={40} />, desc: "Documentation", color: "bg-orange-600" },
];

export default function Skills() {
  return (
    <section className="px-4 md:px-12 max-w-6xl mx-auto my-24">
      <h2 className="font-serif text-4xl text-[#4A2C18] font-bold mb-12 underline decoration-[#E86C3F] decoration-4 underline-offset-4">Software Skills</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
         {skills.map((skill, i) => (
           <div key={i} className="flex flex-col">
              <div className="w-full aspect-[4/3] bg-black rounded-xl relative flex items-center justify-center text-white mb-4">
                 <div className="absolute top-[-10px] left-0 w-1/3 h-[20px] bg-black rounded-t-lg"></div>
                 <div className={`text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400`}>
                   {skill.icon}
                 </div>
                 <div className="absolute bottom-4 left-4 text-xl font-bold tracking-widest">{skill.name}</div>
              </div>
              <div className="w-full h-3 bg-[#4A2C18] rounded-full mb-2 overflow-hidden">
                 <div className={`h-full ${skill.color} w-[80%] rounded-full`}></div>
              </div>
              <h3 className="font-bold text-[#4A2C18]">{skill.name}</h3>
              <p className="text-xs text-[#4A2C18]/70 leading-tight">{skill.desc}</p>
           </div>
         ))}
      </div>
    </section>
  );
}