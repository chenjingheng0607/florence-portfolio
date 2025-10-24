import Image from 'next/image';

const Landing = () => {
  return (
    // Main container
    <div className="bg-[#fdf5e6] p-8 font-sans overflow-hidden sm:p-12 md:p-16">
      <div className="flex flex-col items-center justify-center">

        {/* Top section holding the portfolio grid and waving girl */}
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16 mb-12">

          {/* The entire title is a single grid container. */}
          <div
            className="grid grid-rows-2 grid-cols-[auto_1fr_auto] items-center 
                       gap-y-2 gap-x-4 sm:gap-x-6 md:gap-x-8
                       text-7xl font-black text-[#5d4037] leading-none 
                       sm:text-8xl md:text-9xl"
          >
            {/* --- ROW 1 --- */}
            {/* Using the standard Tailwind utility for rotation */}
            <span className="justify-self-end -rotate-15">P</span>

            {/* Disk Image placed in the middle column, spanning both rows */}
            <div className="row-span-2 h-full w-full">
              <Image
                src="/disk.png"
                alt="Vinyl Record"
                width={200}
                height={200}
                className="w-full h-full object-contain"
              />
            </div>
            
            {/* "RT" and "'25" are grouped in a flex container */}
            <div className="flex items-start justify-self-start">
              <span className="rotate-10">RT</span>
              <span className="text-3xl font-bold text-[#f59e0b] ml-1 -translate-y-2 sm:text-4xl sm:-translate-y-3">
                ‘25
              </span>
            </div>

            {/* --- ROW 2 --- */}
            <span className="justify-self-end rotate-15">F</span>
            <span className="justify-self-start -rotate-5">LIO</span>
          </div>

          {/* Waving Girl Character */}
          <div className="mt-8 sm:mt-0">
            <Image
              src="/waving-girl.png"
              alt="Waving Girl"
              width={150}
              height={150}
              className="w-[120px] h-auto md:w-[150px]"
            />
          </div>
        </div>

        {/* Footer Section (unchanged) */}
        <div className="flex w-full max-w-lg items-center text-[#8d6e63]">
          <div className="flex-grow h-[1px] bg-[#8d6e63]"></div>
          <div className="mx-4 text-center text-sm sm:text-base whitespace-nowrap">
            <span>Florence Tan</span>
            <span className="mx-2">|</span>
            <span>Designer. Listener. Dreamer.</span>
          </div>
          <div className="flex-grow h-[1px] bg-[#8d6e63]"></div>
        </div>
      </div>
    </div>
  );
};

export default Landing;