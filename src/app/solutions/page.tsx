import { MotionDiv } from '@/components/MotionWrapper';
import Navigation from '@/components/Navigation';

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
          <h1 className="text-4xl md:text-5xl font-ibm-plex font-bold text-midnight-navy mb-6">
            Our Solutions
          </h1>
          <p className="text-xl text-slate-gray max-w-3xl mx-auto">
            Discover how our AI-powered solutions can transform your medical practice.
          </p>
        </MotionDiv>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Solution Cards */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <div className="text-4xl mb-4">🔬</div>
            <h2 className="text-2xl font-ibm-plex font-bold text-midnight-navy mb-4">
              Lab Analysis AI
            </h2>
            <p className="text-slate-gray mb-6">
              Automated analysis of lab results with instant insights and trend detection.
            </p>
            <ul className="space-y-2 text-slate-gray">
              <li>• Real-time result interpretation</li>
              <li>• Trend analysis and alerts</li>
              <li>• Integration with major lab systems</li>
            </ul>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <div className="text-4xl mb-4">📝</div>
            <h2 className="text-2xl font-ibm-plex font-bold text-midnight-navy mb-4">
              Smart Documentation
            </h2>
            <p className="text-slate-gray mb-6">
              AI-powered summarization of patient notes and medical records.
            </p>
            <ul className="space-y-2 text-slate-gray">
              <li>• Automated note generation</li>
              <li>• Smart templates</li>
              <li>• Voice-to-text integration</li>
            </ul>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <div className="text-4xl mb-4">✅</div>
            <h2 className="text-2xl font-ibm-plex font-bold text-midnight-navy mb-4">
              Insurance Assistant
            </h2>
            <p className="text-slate-gray mb-6">
              Streamlined insurance verification and prior authorization.
            </p>
            <ul className="space-y-2 text-slate-gray">
              <li>• Real-time eligibility checks</li>
              <li>• Automated prior auth</li>
              <li>• Claim optimization</li>
            </ul>
          </MotionDiv>
        </div>
      </div>
    </main>
  );
} 