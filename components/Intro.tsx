import Link from "next/link";
import { Mail, MapPin, Instagram, Linkedin } from "lucide-react";

export default function Intro() {
  return (
    <section className="px-4 md:px-12 max-w-6xl mx-auto grid md:grid-cols-12 gap-8 items-center my-16">
      {/* ID Card */}
      <div className="md:col-span-4 bg-[#222] text-white p-4 rounded-[30px] shadow-xl rotate-[-2deg] max-w-xs mx-auto w-full">
        <div className="bg-[#FDF5E0]/10 h-48 rounded-2xl mb-4 overflow-hidden relative">
           <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400" alt="Profile" className="object-cover w-full h-full" />
        </div>
        <h3 className="text-xl font-bold mb-1">Florence Tan</h3>
        <p className="text-xs text-gray-400 mb-4">She/her</p>
        
        <div className="space-y-2 text-sm text-gray-300">
          <div className="flex items-center gap-2"><MapPin size={14} /> Kuala Lumpur</div>
          <div className="flex items-center gap-2"><Instagram size={14} /> florencez.t___</div>
          <div className="flex items-center gap-2"><Mail size={14} /> email@gmail.com</div>
        </div>
      </div>

      {/* Hello Text */}
      <div className="md:col-span-8 relative">
         <h2 className="font-serif text-6xl md:text-8xl text-[#E86C3F] mb-6 font-bold transform -rotate-2 inline-block">Hello!</h2>
         <div className="bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-[#4A2C18]/10">
           <p className="text-[#4A2C18] leading-relaxed mb-4">
             Hi there! I'm Florence. A curious soul who finds joy in turning messy ideas into meaningful designs.
             I believe every pixel should tell a story.
           </p>
           <p className="font-bold text-lg font-serif mb-6">
             I create designs that connect, inspire, and simplify life — because good design isn't just seen, it's felt.
           </p>
           <Link href="#" className="inline-flex items-center gap-2 bg-[#8B5E3C] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#4A2C18] transition-colors">
             <Linkedin size={18} /> See my linkedin page
           </Link>
         </div>
      </div>
    </section>
  );
}