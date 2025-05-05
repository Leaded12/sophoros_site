'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const InteractiveFeatures = () => {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

  const features = [
    {
      icon: (
        <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="48" cy="48" r="46" fill="#50C9C3" stroke="#0B1E3F" strokeWidth="3.5"/>
          <rect x="40" y="24" width="16" height="48" rx="8" fill="#fff" stroke="#0B1E3F" strokeWidth="3"/>
          <ellipse cx="48" cy="60" rx="6" ry="3" fill="#50C9C3"/>
          <circle cx="48" cy="40" r="2" fill="#50C9C3"/>
          <circle cx="48" cy="50" r="1.5" fill="#50C9C3"/>
        </svg>
      ),
      title: 'Lab Analysis',
      description: 'Automated analysis of lab results with instant insights and trend detection.',
      value: 'Saves 2-3 hours per week on lab review',
    },
    {
      icon: (
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="30" y="25" width="60" height="70" rx="10" fill="#50C9C3" stroke="#0B1E3F" strokeWidth="3.5"/>
          <rect x="40" y="45" width="40" height="8" rx="4" fill="#fff"/>
          <rect x="40" y="62" width="30" height="8" rx="4" fill="#fff"/>
          <rect x="40" y="79" width="20" height="8" rx="4" fill="#fff"/>
        </svg>
      ),
      title: 'Note Summarization',
      description: 'AI-powered summarization of patient notes and medical records.',
      value: 'Reduces documentation time by 40%',
    },
    {
      icon: (
        <svg width="144" height="144" viewBox="0 0 144 144" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M72 36l33 13.5v24c0 21-18 33-33 38.5-15-5.5-33-17.5-33-38.5v-24L72 36z" fill="#50C9C3" stroke="#0B1E3F" strokeWidth="5.25"/>
          <path d="M54.6 74.4l12.6 15.6 26.4-26.4" stroke="#fff" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Eligibility Checks',
      description: 'Real-time insurance eligibility verification and coverage checks.',
      value: 'Prevents 95% of claim denials',
    },
    {
      icon: (
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="36" y="32" width="48" height="68" rx="10" fill="#50C9C3" stroke="#0B1E3F" strokeWidth="3.5"/>
          <rect x="48" y="24" width="24" height="10" rx="8" fill="#0B1E3F"/>
          <path d="M45 65l13 13 17-17" stroke="#fff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Prior Auth Prep',
      description: 'Automated preparation of prior authorization documentation.',
      value: 'Cuts prior auth time by 75%',
    },
  ];

  return (
    <section className="py-24 bg-midnight-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-glacier-white text-center mb-16">
          What Could AI Do In Your Practice?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="relative group"
              onHoverStart={() => setActiveFeature(index)}
              onHoverEnd={() => setActiveFeature(null)}
            >
              <div
                className={`bg-white/10 rounded-2xl p-8 shadow-md border border-white/10 transition-all duration-300 flex flex-col items-center text-center h-full ${
                  activeFeature === index
                    ? 'bg-white/20 scale-105 shadow-lg border-sky-teal'
                    : 'hover:bg-white/20 hover:shadow-lg'
                }`}
              >
                <div className="flex items-center justify-center h-32 mb-6 w-full">{feature.icon}</div>
                <h3 className="text-lg font-montserrat font-bold text-glacier-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-white text-sm mb-2">
                  {feature.description}
                </p>
                {activeFeature === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="mt-4 pt-4 border-t border-sky-teal/20"
                  >
                    <p className="text-sky-teal font-montserrat text-sm">
                      {feature.value}
                    </p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteractiveFeatures; 