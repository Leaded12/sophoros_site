'use client';

import { MotionDiv } from './MotionWrapper';

const ValueProposition = () => {
  const values = [
    {
      icon: (
        // HIPAA Compliant: Shield SVG slightly bigger
        <svg width="168" height="168" viewBox="0 0 168 168" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M84 42l38.5 15.75v28c0 24.5-21 38.5-38.5 45-17.5-6.5-38.5-20.5-38.5-45v-28L84 42z" fill="#50C9C3" stroke="#0B1E3F" strokeWidth="6.125"/>
          <path d="M63.9 85.6l14.7 18.2 30.8-30.8" stroke="#fff" strokeWidth="8.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'HIPAA Compliant',
      description: 'Built with healthcare privacy and security standards at its core.',
    },
    {
      icon: (
        // Works with Your Tools: Sync SVG slightly smaller
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="60" cy="60" r="50" fill="#50C9C3" stroke="#0B1E3F" strokeWidth="4.5"/>
          <path d="M80 60a20 20 0 1 0-20 20" stroke="#0B1E3F" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M75 75v10h10" stroke="#0B1E3F" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Works with Your Tools',
      description: 'Seamlessly integrates with your existing EHR and practice management software.',
    },
    {
      icon: (
        // Data-Driven Insights: Bar Chart SVG scaled up
        <svg width="144" height="144" viewBox="0 0 144 144" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="24" y="108" width="18" height="18" rx="6" fill="#50C9C3" stroke="#0B1E3F" strokeWidth="5.25"/>
          <rect x="48" y="72" width="18" height="54" rx="6" fill="#0B1E3F" stroke="#0B1E3F" strokeWidth="5.25"/>
          <rect x="72" y="54" width="18" height="72" rx="6" fill="#50C9C3" stroke="#0B1E3F" strokeWidth="5.25"/>
        </svg>
      ),
      title: 'Data-Driven Insights',
      description: 'Turn your practice data into actionable insights for better decision making.',
    },
    {
      icon: (
        // Human-Centered: People SVG scaled up
        <svg width="144" height="144" viewBox="0 0 144 144" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="48" cy="72" r="18" fill="#50C9C3" stroke="#0B1E3F" strokeWidth="5.25"/>
          <circle cx="96" cy="78" r="15" fill="#0B1E3F" stroke="#0B1E3F" strokeWidth="5.25"/>
          <rect x="24" y="99" width="45" height="27" rx="9" fill="#0B1E3F" stroke="#0B1E3F" strokeWidth="5.25"/>
          <rect x="72" y="94.5" width="36" height="21" rx="7" fill="#50C9C3" stroke="#0B1E3F" strokeWidth="5.25"/>
        </svg>
      ),
      title: 'Human-Centered',
      description: 'Designed with input from practicing physicians to enhance, not replace, human judgment.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-24 bg-glacier-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionDiv
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-midnight-navy mb-6">
            AI Integration Without the Headaches
          </h2>
          <p className="text-xl text-slate-gray max-w-3xl mx-auto font-montserrat">
            We handle the technical complexity so you can focus on what matters most: patient care.
          </p>
        </MotionDiv>

        <MotionDiv
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {values.map((value, index) => (
            <MotionDiv
              key={index}
              variants={itemVariants}
              className="bg-white p-8 rounded-2xl shadow-md border border-white/40 flex flex-col items-center text-center transition-all duration-200 hover:shadow-lg hover:border-sky-teal"
            >
              <div className="flex items-center justify-center h-24 mb-6 w-full">{value.icon}</div>
              <h3 className="text-lg font-montserrat font-bold text-midnight-navy mb-2">
                {value.title}
              </h3>
              <p className="text-slate-gray font-montserrat">
                {value.description}
              </p>
            </MotionDiv>
          ))}
        </MotionDiv>
      </div>
    </section>
  );
};

export default ValueProposition; 