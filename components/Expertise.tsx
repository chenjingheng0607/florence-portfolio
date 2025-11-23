import { PenTool } from "lucide-react";

export default function Expertise() {
  return (
    <div className="flex flex-col">
       <div className="bg-[#4A2C18] text-white py-3 px-6 rounded-xl font-bold text-xl self-end mb-8">Area of Expertise</div>
       
       <div className="relative h-full min-h-[400px]">
         {/* Sticker 1 */}
         <div className="absolute top-0 right-10 bg-[#F2E8CF] p-6 w-48 shadow-lg transform rotate-6 z-10" style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 90%, 90% 100%, 0% 100%)"}}>
           <div className="w-8 h-8 bg-yellow-400 rounded-full opacity-50 absolute -top-3 left-1/2"></div>
           <p className="font-handwriting font-bold text-center">COLLABORATION & SUPPORTIVE</p>
         </div>

         {/* Sticker 2 (Heart) */}
         <div className="absolute top-20 left-0 bg-[#E8A984] p-8 w-56 h-56 rounded-full shadow-md flex items-center justify-center transform -rotate-12">
            <p className="font-serif font-bold text-center text-[#4A2C18]">EMPATHY-DRIVEN<br/>DESIGN</p>
         </div>

         {/* Sticker 3 (Paper) */}
         <div className="absolute bottom-0 right-0 bg-[#E1E4C7] p-6 w-64 shadow-lg transform rotate-2 border border-dashed border-gray-400">
            <div className="flex justify-between mb-2">
              <span className="text-xs">UI DESIGN</span>
              <span className="text-xs">VISUAL AESTHETICS</span>
            </div>
            <div className="h-16 flex items-center justify-center">
              <PenTool className="text-[#4A2C18]" size={32} />
            </div>
            <p className="font-bold text-center mt-2 text-[#4A2C18]">USER EXPERIENCE THINKING</p>
         </div>
       </div>
    </div>
  );
}