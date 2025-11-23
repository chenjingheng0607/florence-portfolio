import React from 'react';

export default function Hero() {
  return (
    <section className="pt-12 pb-8 px-4 md:px-12 max-w-6xl mx-auto flex flex-col items-center text-center">
      <span className="font-serif text-yellow-500 text-2xl font-bold mb-[-10px] self-end md:mr-32">'25</span>
      <div className="relative flex items-center justify-center mb-6">
        <h1 className="font-serif text-[5rem] md:text-[10rem] leading-[0.8] text-[#4A2C18] font-black tracking-tighter">
          P<br />F
        </h1>
        {/* Vinyl Record */}
        <div className="mx-2 w-32 h-32 md:w-64 md:h-64 bg-black rounded-full flex items-center justify-center animate-spin-slow relative z-10">
           <div className="absolute w-full h-full rounded-full border-4 border-[#333] opacity-50" />
           <div className="w-12 h-12 md:w-24 md:h-24 bg-[#A93838] rounded-full border-4 border-black" />
        </div>
        <h1 className="font-serif text-[5rem] md:text-[10rem] leading-[0.8] text-[#4A2C18] font-black tracking-tighter">
          RT<br />LIO
        </h1>
        
        {/* Character Illustration Placeholder */}
        <div className="absolute -right-4 md:-right-24 -bottom-10 hidden md:block">
          <div className="w-40 h-40 bg-[#E8A984] rounded-full overflow-hidden border-4 border-[#4A2C18]">
             {/* Replace src with your actual image */}
             <img src="https://placehold.co/200x200/png?text=Me" alt="Illustration" className="object-cover w-full h-full"/>
          </div>
        </div>
      </div>
      
      <div className="flex items-center gap-4 text-[#E86C3F] font-semibold tracking-wide uppercase text-sm md:text-base mt-8">
        <span>Florence Tan</span>
        <span className="text-[#4A2C18]">|</span>
        <span>Designer. Listener. Dreamer.</span>
      </div>
    </section>
  );
}