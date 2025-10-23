// app/components/HeroSection.tsx
"use client"; // This is still required for the animation

import Image from 'next/image';

const HeroSection = () => {
  return (
    <>
      <style jsx global>{`
        @keyframes blockRockingAnimation {
          from {
            transform: rotate(-10deg);
          }
          to {
            transform: rotate(-5deg);
          }
        }

        .portfolio-block {
          animation: blockRockingAnimation 4s ease-in-out infinite alternate;
          transform-origin: center center;
        }
      `}</style>

      <section style={{
        backgroundColor: '#FFFBEB',
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#4A3F3F',
        position: 'relative',
        overflow: 'hidden',
        padding: '2rem',
        fontFamily: 'var(--font-fredoka)',
      }}>
        
        <div style={{ 
          position: 'absolute', 
          top: '30%', 
          right: '20%', 
          opacity: 0.8 
        }}>
           <Image src="/waving-girl.png" alt="Waving Girl Illustration" width={120} height={120} />
        </div>

        {/* Main Content Wrapper */}
        <div 
          className="portfolio-block"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            // Adjusted clamp for a better fit across screen sizes
            fontSize: 'clamp(4rem, 18vw, 11rem)',
            fontWeight: 'bold',
            lineHeight: '1',
          }}
        >
          {/* Column 1: P and F */}
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'right',
            height: '2.1em', // This now defines the height for the image as well
          }}>
            <span>P</span>
            <span>F</span>
          </div>

          {/* Column 2: Vinyl Disk (Container for responsive image) */}
          <div style={{ 
            position: 'relative', // Required for next/image with fill={true}
            height: '2em',      // Match the height of the text columns
            width: '2em',       // Make it a square to maintain the disk's aspect ratio
          }}>
            {/* --- IMAGE IS NOW RESPONSIVE AND FILLS ITS CONTAINER --- */}
            <Image 
              src="/disk.png" 
              alt="Vinyl Record" 
              fill={true} 
              style={{ objectFit: 'contain' }} // Ensures the image scales correctly
            />
          </div>

          {/* Column 3: RT and LIO */}
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column',
            alignItems: 'left',
            height: '2.1em', // Match the height of the first column
          }}>
            <span>RT</span>
            <span>LIO</span>
          </div>
        </div>

        {/* Footer Text */}
        <div style={{
          width: 'clamp(300px, 70%, 900px)',
          position: 'absolute',
          bottom: '10%',
          textAlign: 'center',
          paddingTop: '1rem',
          color: '#A87B5E',
          fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderTop: '2px solid #A87B5E',
        }}>
          <span>Florence Tan</span>
          <span>Designer. Listener. Dreamer.</span>
        </div>
      </section>
    </>
  );
};

export default HeroSection;