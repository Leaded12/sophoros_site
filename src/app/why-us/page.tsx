import { MotionDiv } from '@/components/MotionWrapper';
import Navigation from '@/components/Navigation';

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
          <h1 className="text-4xl md:text-5xl font-ibm-plex font-bold text-midnight-navy mb-6">
            Why Choose Sophoros?
          </h1>
          <p className="text-xl text-slate-gray max-w-3xl mx-auto">
            We're not just another tech company. We're healthcare professionals who understand your needs.
          </p>
        </MotionDiv>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <MotionDiv
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-8 rounded-xl shadow-sm"
          >
            <h2 className="text-2xl font-ibm-plex font-bold text-midnight-navy mb-4">
              Healthcare First
            </h2>
            <p className="text-slate-gray mb-6">
              Our team includes practicing physicians and healthcare administrators who understand the unique challenges of medical practices.
            </p>
            <ul className="space-y-3 text-slate-gray">
              <li>• Founded by healthcare professionals</li>
              <li>• Deep understanding of clinical workflows</li>
              <li>• Focus on patient care enhancement</li>
            </ul>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-white p-8 rounded-xl shadow-sm"
          >
            <h2 className="text-2xl font-ibm-plex font-bold text-midnight-navy mb-4">
              Seamless Integration
            </h2>
            <p className="text-slate-gray mb-6">
              We work with your existing systems, not against them. No need to change your workflow or retrain staff.
            </p>
            <ul className="space-y-3 text-slate-gray">
              <li>• Works with major EHR systems</li>
              <li>• Minimal training required</li>
              <li>• No workflow disruption</li>
            </ul>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white p-8 rounded-xl shadow-sm"
          >
            <h2 className="text-2xl font-ibm-plex font-bold text-midnight-navy mb-4">
              Security & Compliance
            </h2>
            <p className="text-slate-gray mb-6">
              Built with healthcare privacy and security standards at its core. HIPAA compliant and regularly audited.
            </p>
            <ul className="space-y-3 text-slate-gray">
              <li>• HIPAA compliant</li>
              <li>• Regular security audits</li>
              <li>• Data encryption at rest and in transit</li>
            </ul>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-white p-8 rounded-xl shadow-sm"
          >
            <h2 className="text-2xl font-ibm-plex font-bold text-midnight-navy mb-4">
              Dedicated Support
            </h2>
            <p className="text-slate-gray mb-6">
              Our support team includes healthcare professionals who understand your needs and can provide meaningful assistance.
            </p>
            <ul className="space-y-3 text-slate-gray">
              <li>• 24/7 technical support</li>
              <li>• Healthcare-trained support staff</li>
              <li>• Regular check-ins and updates</li>
            </ul>
          </MotionDiv>
        </div>
      </div>
    </main>
  );
} 