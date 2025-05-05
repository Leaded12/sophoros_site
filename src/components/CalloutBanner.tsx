'use client';

import { MotionDiv, MotionA } from './MotionWrapper';
import Image from 'next/image';

const CalloutBanner = () => {
  return (
    <section className="py-24 bg-sky-teal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-4">
          <Image
            src="/logo.svg"
            alt="Sophoros Logo"
            width={40}
            height={40}
            className="w-12 h-12 md:mr-1"
          />
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-midnight-navy text-center md:text-left">
            Ready to Transform Your Practice?
          </h2>
        </div>
        <MotionDiv
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xl text-midnight-navy/80 mb-8 max-w-3xl mx-auto">
            Join the growing number of practices that are saving time and improving patient care with our AI solutions.
          </p>
          <MotionA
            href="/get-started"
            className="inline-block bg-midnight-navy text-sky-teal px-8 py-4 rounded-md text-lg font-semibold hover:bg-midnight-navy/90 transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule Your Free Assessment
          </MotionA>
        </MotionDiv>
      </div>
    </section>
  );
};

export default CalloutBanner; 