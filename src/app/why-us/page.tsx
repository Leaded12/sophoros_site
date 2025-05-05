import { MotionDiv } from '@/components/MotionWrapper';
import Navigation from '@/components/Navigation';

const values = [
  {
    icon: (
      // Healthcare First SVG
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="32" r="30" fill="#50C9C3" stroke="#0B1E3F" strokeWidth="3"/>
        <path d="M32 18v28" stroke="#0B1E3F" strokeWidth="3" strokeLinecap="round"/>
        <path d="M18 32h28" stroke="#0B1E3F" strokeWidth="3" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Healthcare First',
    description: 'Our team includes practicing physicians and healthcare administrators who understand the unique challenges of medical practices.',
    bullets: [
      'Founded by healthcare professionals',
      'Deep understanding of clinical workflows',
      'Focus on patient care enhancement',
    ],
  },
  {
    icon: (
      // Seamless Integration SVG
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="18" width="44" height="28" rx="8" fill="#50C9C3" stroke="#0B1E3F" strokeWidth="3"/>
        <rect x="20" y="28" width="24" height="8" rx="4" fill="#fff"/>
        <path d="M32 18v-6" stroke="#0B1E3F" strokeWidth="3" strokeLinecap="round"/>
        <path d="M32 52v-6" stroke="#0B1E3F" strokeWidth="3" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Seamless Integration',
    description: 'We work with your existing systems, not against them. No need to change your workflow or retrain staff.',
    bullets: [
      'Works with major EHR systems',
      'Minimal training required',
      'No workflow disruption',
    ],
  },
  {
    icon: (
      // Security & Compliance SVG
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M32 12l16 6.5v14c0 12-10 19-16 21-6-2-16-9-16-21v-14L32 12z" fill="#50C9C3" stroke="#0B1E3F" strokeWidth="3"/>
        <path d="M23 32l8 6 12-12" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Security & Compliance',
    description: 'Built with healthcare privacy and security standards at its core. HIPAA compliant and regularly audited.',
    bullets: [
      'HIPAA compliant',
      'Regular security audits',
      'Data encryption at rest and in transit',
    ],
  },
  {
    icon: (
      // Dedicated Support SVG
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="28" r="12" fill="#50C9C3" stroke="#0B1E3F" strokeWidth="3"/>
        <rect x="16" y="44" width="32" height="12" rx="6" fill="#0B1E3F" stroke="#0B1E3F" strokeWidth="3"/>
        <path d="M32 37v-4" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Dedicated Support',
    description: 'Our support team includes healthcare professionals who understand your needs and can provide meaningful assistance.',
    bullets: [
      '24/7 technical support',
      'Healthcare-trained support staff',
      'Regular check-ins and updates',
    ],
  },
];

export default function WhyUs() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-midnight-navy mb-6 tracking-tight">
            Why Choose Sophoros?
          </h1>
          <p className="text-xl text-slate-gray max-w-3xl mx-auto font-ibm-plex">
            We're not just another tech company. We're healthcare professionals who understand your needs.
          </p>
        </MotionDiv>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((val, idx) => (
            <MotionDiv
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 + idx * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-white/40 flex flex-col items-center text-center transition-all duration-200 hover:shadow-2xl hover:-translate-y-2 hover:border-sky-teal"
            >
              <div className="flex items-center justify-center h-20 mb-6 w-full">
                <div className="w-16 h-16 flex items-center justify-center">
                  {val.icon}
                </div>
              </div>
              <h2 className="text-xl font-montserrat font-bold text-midnight-navy mb-2 tracking-tight">
                {val.title}
              </h2>
              <p className="text-slate-gray mb-4 font-ibm-plex">
                {val.description}
              </p>
              <ul className="space-y-2 text-slate-gray font-ibm-plex">
                {val.bullets.map((b, i) => (
                  <li key={i}>• {b}</li>
                ))}
              </ul>
            </MotionDiv>
          ))}
        </div>
      </div>
    </main>
  );
} 