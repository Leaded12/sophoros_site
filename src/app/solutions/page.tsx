import { MotionDiv } from '@/components/MotionWrapper';
import Navigation from '@/components/Navigation';

const solutions = [
  {
    icon: (
      // Lab Analysis SVG
      <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="48" cy="48" r="46" fill="#50C9C3" stroke="#0B1E3F" strokeWidth="3.5"/>
        <rect x="40" y="24" width="16" height="48" rx="8" fill="#fff" stroke="#0B1E3F" strokeWidth="3"/>
        <ellipse cx="48" cy="60" rx="6" ry="3" fill="#50C9C3"/>
        <circle cx="48" cy="40" r="2" fill="#50C9C3"/>
        <circle cx="48" cy="50" r="1.5" fill="#50C9C3"/>
      </svg>
    ),
    title: 'Lab Analysis AI',
    description: 'Automated analysis of lab results with instant insights and trend detection.',
    bullets: [
      'Real-time result interpretation',
      'Trend analysis and alerts',
      'Integration with major lab systems',
    ],
  },
  {
    icon: (
      // Smart Documentation SVG
      <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="18" width="56" height="60" rx="10" fill="#50C9C3" stroke="#0B1E3F" strokeWidth="3.5"/>
        <rect x="32" y="36" width="32" height="6" rx="3" fill="#fff"/>
        <rect x="32" y="50" width="24" height="6" rx="3" fill="#fff"/>
        <rect x="32" y="64" width="16" height="6" rx="3" fill="#fff"/>
      </svg>
    ),
    title: 'Smart Documentation',
    description: 'AI-powered summarization of patient notes and medical records.',
    bullets: [
      'Automated note generation',
      'Smart templates',
      'Voice-to-text integration',
    ],
  },
  {
    icon: (
      // Insurance Assistant SVG
      <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="24" y="20" width="48" height="56" rx="10" fill="#50C9C3" stroke="#0B1E3F" strokeWidth="3.5"/>
        <rect x="36" y="14" width="24" height="8" rx="4" fill="#0B1E3F"/>
        <path d="M35 46l12 10 16-16" stroke="#fff" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Insurance Assistant',
    description: 'Streamlined insurance verification and prior authorization.',
    bullets: [
      'Real-time eligibility checks',
      'Automated prior auth',
      'Claim optimization',
    ],
  },
];

export default function Solutions() {
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
            Our Solutions
          </h1>
          <p className="text-xl text-slate-gray max-w-3xl mx-auto font-ibm-plex">
            Discover how our AI-powered solutions can transform your medical practice.
          </p>
        </MotionDiv>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((sol, idx) => (
            <MotionDiv
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 + idx * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-white/40 flex flex-col items-center text-center transition-all duration-200 hover:shadow-2xl hover:-translate-y-2 hover:border-sky-teal"
            >
              <div className="flex items-center justify-center h-24 mb-6 w-full">
                <div className="w-24 h-24 flex items-center justify-center">
                  {sol.icon}
                </div>
              </div>
              <h2 className="text-2xl font-montserrat font-bold text-midnight-navy mb-4 tracking-tight">
                {sol.title}
              </h2>
              <p className="text-slate-gray mb-6 font-ibm-plex">
                {sol.description}
              </p>
              <ul className="space-y-2 text-slate-gray font-ibm-plex">
                {sol.bullets.map((b, i) => (
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