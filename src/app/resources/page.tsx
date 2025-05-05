import { MotionDiv } from '@/components/MotionWrapper';
import Navigation from '@/components/Navigation';

export default function Resources() {
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
            Resources
          </h1>
          <p className="text-xl text-slate-gray max-w-3xl mx-auto">
            Explore our collection of guides, case studies, and insights to help you make informed decisions about AI in healthcare.
          </p>
        </MotionDiv>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Case Studies */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <h2 className="text-2xl font-ibm-plex font-bold text-midnight-navy mb-4">
              Case Studies
            </h2>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-sky-teal hover:text-sky-teal/80 transition-colors duration-200">
                  How Dr. Chen's Practice Reduced Documentation Time by 40%
                </a>
              </li>
              <li>
                <a href="#" className="text-sky-teal hover:text-sky-teal/80 transition-colors duration-200">
                  The Wilson Clinic's Journey to AI Integration
                </a>
              </li>
              <li>
                <a href="#" className="text-sky-teal hover:text-sky-teal/80 transition-colors duration-200">
                  Success Story: Pediatric Practice Transformation
                </a>
              </li>
            </ul>
          </MotionDiv>

          {/* Guides */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <h2 className="text-2xl font-ibm-plex font-bold text-midnight-navy mb-4">
              Guides
            </h2>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-sky-teal hover:text-sky-teal/80 transition-colors duration-200">
                  Getting Started with AI in Your Practice
                </a>
              </li>
              <li>
                <a href="#" className="text-sky-teal hover:text-sky-teal/80 transition-colors duration-200">
                  HIPAA Compliance Checklist for AI Tools
                </a>
              </li>
              <li>
                <a href="#" className="text-sky-teal hover:text-sky-teal/80 transition-colors duration-200">
                  Staff Training Guide for AI Integration
                </a>
              </li>
            </ul>
          </MotionDiv>

          {/* Blog Posts */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <h2 className="text-2xl font-ibm-plex font-bold text-midnight-navy mb-4">
              Latest Insights
            </h2>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-sky-teal hover:text-sky-teal/80 transition-colors duration-200">
                  The Future of AI in Primary Care
                </a>
              </li>
              <li>
                <a href="#" className="text-sky-teal hover:text-sky-teal/80 transition-colors duration-200">
                  Balancing Technology and Patient Care
                </a>
              </li>
              <li>
                <a href="#" className="text-sky-teal hover:text-sky-teal/80 transition-colors duration-200">
                  ROI of AI in Medical Practices
                </a>
              </li>
            </ul>
          </MotionDiv>
        </div>

        {/* Newsletter Signup */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 bg-midnight-navy rounded-xl p-8 text-center"
        >
          <h2 className="text-2xl font-ibm-plex font-bold text-glacier-white mb-4">
            Stay Updated
          </h2>
          <p className="text-slate-gray mb-6">
            Subscribe to our newsletter for the latest insights on AI in healthcare.
          </p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-md bg-white/10 text-glacier-white placeholder-slate-gray border border-slate-gray/30 focus:outline-none focus:border-sky-teal"
            />
            <button
              type="submit"
              className="bg-sky-teal text-midnight-navy px-6 py-2 rounded-md font-semibold hover:bg-sky-teal/90 transition-colors duration-200"
            >
              Subscribe
            </button>
          </form>
        </MotionDiv>
      </div>
    </main>
  );
} 