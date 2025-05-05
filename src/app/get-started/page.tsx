'use client';
import Navigation from '@/components/Navigation';

export default function GetStarted() {
  return (
    <main className="min-h-screen bg-glacier-white">
      <Navigation />
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-midnight-navy mb-6 text-center">Get Started</h1>
        <p className="text-lg text-slate-gray mb-10 text-center">Fill out the form below and our team will reach out to you shortly.</p>
        <form
          action="https://formspree.io/f/xblooark"
          method="POST"
          className="bg-white rounded-xl shadow-md p-8 space-y-6"
        >
          <div>
            <label className="block text-midnight-navy font-semibold mb-2" htmlFor="name">Name</label>
            <input id="name" name="name" type="text" required className="w-full px-4 py-2 border border-slate-gray/30 rounded-md focus:outline-none focus:border-sky-teal" />
          </div>
          <div>
            <label className="block text-midnight-navy font-semibold mb-2" htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required className="w-full px-4 py-2 border border-slate-gray/30 rounded-md focus:outline-none focus:border-sky-teal" />
          </div>
          <div>
            <label className="block text-midnight-navy font-semibold mb-2" htmlFor="practice">Practice Name</label>
            <input id="practice" name="practice" type="text" required className="w-full px-4 py-2 border border-slate-gray/30 rounded-md focus:outline-none focus:border-sky-teal" />
          </div>
          <div>
            <label className="block text-midnight-navy font-semibold mb-2" htmlFor="phone">Phone</label>
            <input id="phone" name="phone" type="tel" className="w-full px-4 py-2 border border-slate-gray/30 rounded-md focus:outline-none focus:border-sky-teal" />
          </div>
          <div>
            <label className="block text-midnight-navy font-semibold mb-2" htmlFor="role">Role</label>
            <input id="role" name="role" type="text" className="w-full px-4 py-2 border border-slate-gray/30 rounded-md focus:outline-none focus:border-sky-teal" />
          </div>
          <div>
            <label className="block text-midnight-navy font-semibold mb-2" htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={4} className="w-full px-4 py-2 border border-slate-gray/30 rounded-md focus:outline-none focus:border-sky-teal" />
          </div>
          <button type="submit" className="w-full bg-sky-teal text-midnight-navy font-bold py-3 rounded-md hover:bg-sky-teal/90 transition-colors duration-200">Submit</button>
        </form>
      </div>
    </main>
  );
} 