'use client';

import React from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

interface Project {
  title: string;
  imageUrl: string;
}

const projectData: Project[] = [
  { title: 'VR Memory Recreation', imageUrl: '/vr-memory.png' },
  { title: 'Church Website', imageUrl: '/church-website.jpg' },
  { title: 'Drivecare', imageUrl: '/drivecare.png' },
  { title: 'Healthcare System', imageUrl: '/healthcare.png' },
];

const projects = [...projectData, ...projectData, ...projectData];

const MyProject = () => {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: 'start' },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  return (
    <section className="bg-[#F8F1E1] py-20 overflow-hidden">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-bold text-[#6B4F4F] mb-2">My</h2>
        <h1 className="text-8xl font-extrabold tracking-wider mb-12">
          <span className="text-[#6B4F4F]">PROJ</span>
          <span className="text-[#D37A47]">EC</span>
          <span className="text-[#FDBA74]">T</span>
        </h1>
      </div>

      <div className="embla" ref={emblaRef}>
        <div className="embla__container flex">
          {projects.map((project, index) => (
            <div className="embla__slide flex-[0_0_80%] sm:flex-[0_0_40%] md:flex-[0_0_30%] lg:flex-[0_0_22%] mx-4" key={`${project.title}-${index}`}>
              <div className="relative z-0 w-full h-80 rounded-3xl overflow-hidden group">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 80vw, (max-width: 1200px) 40vw, 22vw"
                  className="z-10 object-cover" // Removed transition classes for now to simplify debugging
                  
                  // --- THE FINAL FIX ---
                  // This inline style has the highest priority and will override
                  // any conflicting global styles that are making the image invisible.
                  style={{ display: 'block' }} 
                />
                <div className="absolute inset-0 z-20 bg-black bg-opacity-40 flex items-center justify-center p-4">
                  <h3 className="text-white text-3xl font-bold text-center">
                    {project.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyProject;