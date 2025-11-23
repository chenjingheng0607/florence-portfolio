const projects = [
  { title: "VR Memory Recreation", img: "https://images.unsplash.com/photo-1622979135228-d3387124cc89?auto=format&fit=crop&w=500" },
  { title: "Church website", img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=500" },
  { title: "Drivecare", img: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=500" },
  { title: "Mobile App", img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=500" },
];

export default function Projects() {
  return (
    <section className="my-24 overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="font-serif text-6xl text-[#4A2C18] font-bold">
          My <span className="text-[#E86C3F]">PROJECT</span>
        </h2>
      </div>
      
      <div className="flex gap-6 overflow-x-auto px-4 md:px-12 pb-12 snap-x scrollbar-hide">
        {projects.map((project, i) => (
          <div key={i} className="min-w-[300px] md:min-w-[400px] h-[400px] relative rounded-[30px] overflow-hidden snap-center group cursor-pointer">
            <img src={project.img} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-white font-serif text-2xl font-bold">{project.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}