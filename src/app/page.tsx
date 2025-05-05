import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ValueProposition from '@/components/ValueProposition';
import InteractiveFeatures from '@/components/InteractiveFeatures';
import Testimonial from '@/components/Testimonial';
import CalloutBanner from '@/components/CalloutBanner';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <ValueProposition />
      <InteractiveFeatures />
      <Testimonial />
      <CalloutBanner />
      <Footer />
    </main>
  );
} 