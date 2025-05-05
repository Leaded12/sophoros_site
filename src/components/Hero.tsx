'use client';

import { MotionDiv, MotionH1, MotionP } from './MotionWrapper';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-midnight-navy overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-sky-teal/10 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <MotionH1 
          className="text-4xl md:text-6xl font-ibm-plex font-bold text-glacier-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Intelligent Integration.<br />
          Trusted by Doctors.
        </MotionH1>
        
        <MotionP 
          className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto"
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
            className="bg-sky-teal text-midnight-navy px-8 py-4 rounded-md text-lg font-semibold hover:bg-sky-teal/90 transition-colors duration-200"
          >
            Schedule Demo
          </a>
          <a
            href="/get-started"
            className="bg-white/10 text-glacier-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-white/20 transition-colors duration-200"
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