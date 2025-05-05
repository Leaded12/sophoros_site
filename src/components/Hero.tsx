'use client';

import { MotionDiv, MotionH1, MotionP } from './MotionWrapper';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-midnight-navy overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-sky-teal/10 to-transparent" />
      {/* Subtle animated SVG background for depth */}
      <svg className="absolute left-0 top-0 w-full h-full opacity-10" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="#50C9C3" fillOpacity="0.2" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
      </svg>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col justify-center min-h-[60vh]">
        <MotionH1 
          className="text-4xl md:text-6xl font-montserrat font-extrabold tracking-tight text-glacier-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Intelligent Integration.<br />
          Trusted by Doctors.
        </MotionH1>
        <MotionP 
          className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto font-ibm-plex"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          We help private medical practices embed smart, ethical, and seamless AI solutions into their existing workflows—without the tech chaos.
        </MotionP>
        <MotionDiv
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a
            href="/get-started"
            className="bg-sky-teal text-midnight-navy px-10 py-4 rounded-lg text-xl font-bold shadow-lg hover:bg-sky-teal/90 transition-colors duration-200 border-2 border-sky-teal"
          >
            Schedule Demo
          </a>
          <a
            href="/get-started"
            className="border-2 border-sky-teal text-sky-teal px-10 py-4 rounded-lg text-xl font-bold bg-transparent hover:bg-sky-teal/10 transition-colors duration-200"
          >
            Learn More
          </a>
        </MotionDiv>
      </div>
      
      {/* Animated background elements */}
      <MotionDiv
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-sky-teal/20 rounded-full filter blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <MotionDiv
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sky-teal/10 rounded-full filter blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </section>
  );
};

export default Hero; 