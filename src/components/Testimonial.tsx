'use client';

import { useState } from 'react';
import { MotionDiv, AnimatePresence } from './MotionWrapper';

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "We didn't change a single platform. Sophoros made it all work together seamlessly.",
      author: "Dr. Eugene Zeltser",
      title: "Nephrologist",
      image: "/testimonials/dr-zeltser.jpg"
    },
    {
      quote: "The AI integration has reduced our documentation time by 40%. It's like having an extra staff member.",
      author: "Dr. Tatyana Grinchenko",
      title: "Rheumatologist",
      image: "/testimonials/dr-grinchenko.jpg"
    },
    {
      quote: "Finally, a tech solution that understands how a medical practice actually works.",
      author: "Dr. Sarah Chen",
      title: "Internal Medicine",
      image: "/testimonials/dr-chen.jpg"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-glacier-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <AnimatePresence mode="wait">
            <MotionDiv
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="max-w-3xl mx-auto">
                <div className="text-6xl text-sky-teal mb-8">"</div>
                <p className="text-2xl md:text-3xl font-ibm-plex text-midnight-navy mb-8">
                  {testimonials[currentIndex].quote}
                </p>
                <div className="flex items-center justify-center space-x-4">
                  <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].author} className="w-16 h-16 rounded-full object-cover" />
                  <div className="text-left">
                    <p className="font-ibm-plex font-bold text-midnight-navy">
                      {testimonials[currentIndex].author}
                    </p>
                    <p className="text-slate-gray">
                      {testimonials[currentIndex].title}
                    </p>
                  </div>
                </div>
              </div>
            </MotionDiv>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors duration-200"
            aria-label="Previous testimonial"
          >
            <svg
              className="w-6 h-6 text-midnight-navy"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors duration-200"
            aria-label="Next testimonial"
          >
            <svg
              className="w-6 h-6 text-midnight-navy"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? 'bg-sky-teal' : 'bg-slate-gray/30'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial; 