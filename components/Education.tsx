const educationData = [
  { year: "2015 - 2020", title: "IGCSE O-level", loc: "Premfield international school" },
  { year: "2021 - 2023", title: "Diploma in Information Technology", loc: "Help University • CGPA 3.48" },
  { year: "2023 - 2025", title: "Bachelor of IT (Honours)", loc: "Help University • CGPA 3.28" }
];

export default function Education() {
  return (
    <div>
      <div className="bg-[#4A2C18] text-white py-3 px-6 rounded-t-xl font-bold text-xl inline-block">Education</div>
      <div className="bg-[#2D1B0E] p-6 rounded-b-xl rounded-tr-xl relative pt-12">
         {/* Browser Dots */}
         <div className="absolute top-4 left-4 flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
         </div>
         
         <div className="bg-white rounded-lg py-2 px-4 mb-6 text-center text-sm text-gray-600 font-mono shadow-inner">
           www.myeducation.com
         </div>

         <div className="space-y-8 text-white">
            {educationData.map((edu, idx) => (
              <div key={idx} className="relative pl-8 border-l-2 border-white/20">
                <div className="absolute left-[-5px] top-0 w-2 h-2 bg-white rounded-full"></div>
                <p className="text-sm text-gray-400 mb-1">{edu.year}</p>
                <h4 className="font-bold text-lg">{edu.title}</h4>
                <p className="text-sm text-gray-300">{edu.loc}</p>
              </div>
            ))}
         </div>
      </div>
    </div>
  );
}