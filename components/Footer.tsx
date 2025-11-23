import { Mail, Phone, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#FDF5E0] pt-12 pb-24 text-center px-4">
      <h2 className="font-serif text-4xl md:text-6xl text-[#E86C3F] font-bold mb-2">Thank you for visiting</h2>
      <h2 className="font-serif text-4xl md:text-6xl text-[#E86C3F] font-bold mb-8">my portfolio!</h2>
      <p className="text-[#4A2C18] mb-12 flex items-center justify-center gap-2">
        Let's connect and create something meaningful together <span className="text-yellow-500">💛</span>
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-sm text-[#4A2C18]">
         <a href="mailto:email@gmail.com" className="flex items-center gap-2 hover:text-[#E86C3F] transition-colors">
           <Mail size={18} /> email@gmail.com
         </a>
         <span className="hidden md:inline">|</span>
         <div className="flex items-center gap-2">
           <Phone size={18} /> +60123456789
         </div>
         <span className="hidden md:inline">|</span>
         <a href="#" className="flex items-center gap-2 hover:text-[#E86C3F] transition-colors">
           <Linkedin size={18} /> linkedin.com/in/florence
         </a>
      </div>
    </footer>
  );
}