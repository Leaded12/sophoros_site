import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-midnight-navy text-glacier-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left Column */}
          <div>
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <Image
                src="/logo.svg"
                alt="Sophoros Consulting Logo"
                width={36}
                height={36}
                className="w-9 h-9"
              />
              <span className="text-2xl font-ibm-plex font-bold">Sophoros Consulting</span>
            </Link>
            <p className="text-slate-gray mb-6">
              Intelligent Integration. Trusted by Doctors.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-gray hover:text-sky-teal transition-colors duration-200"
              >
                LinkedIn
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-gray hover:text-sky-teal transition-colors duration-200"
              >
                X
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-gray hover:text-sky-teal transition-colors duration-200"
              >
                YouTube
              </a>
            </div>
          </div>

          {/* Center Column */}
          <div>
            <h3 className="font-ibm-plex font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-slate-gray hover:text-sky-teal transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/why-us"
                  className="text-slate-gray hover:text-sky-teal transition-colors duration-200"
                >
                  Why Sophoros
                </Link>
              </li>
              <li>
                <Link
                  href="/get-started"
                  className="text-slate-gray hover:text-sky-teal transition-colors duration-200"
                >
                  Schedule Demo
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-slate-gray hover:text-sky-teal transition-colors duration-200"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-slate-gray hover:text-sky-teal transition-colors duration-200"
                >
                  Careers (Coming Soon)
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Column */}
          <div>
            <h3 className="font-ibm-plex font-bold mb-4">Stay Updated</h3>
            <p className="text-slate-gray mb-4">
              Monthly insights on AI in medicine, real use cases, no spam.
            </p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-md bg-white/5 border border-slate-gray/20 text-glacier-white placeholder-slate-gray focus:outline-none focus:border-sky-teal"
              />
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="healthcare-provider"
                  className="mr-2"
                />
                <label
                  htmlFor="healthcare-provider"
                  className="text-sm text-slate-gray"
                >
                  I am a healthcare provider
                </label>
              </div>
              <button
                type="submit"
                className="w-full bg-sky-teal text-midnight-navy px-4 py-2 rounded-md font-semibold hover:bg-sky-teal/90 transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-gray/20 mt-12 pt-8 text-center text-slate-gray">
          <p>&copy; {new Date().getFullYear()} Sophoros Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 