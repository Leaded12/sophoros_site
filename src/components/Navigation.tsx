'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Why Us', href: '/why-us' },
    { name: 'Resources', href: '/resources' },
  ];

  // Determine if nav should use scrolled style (gray links) or not (white links)
  const useScrolledStyle = isScrolled || pathname !== '/';

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md border-b border-slate-gray/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Company Name */}
          <Link href="/" className="flex items-center space-x-4 py-1">
            <Image
              src="/logo.svg"
              alt="Sophoros Consulting Logo"
              width={56}
              height={56}
              className="w-14 h-14"
              priority
            />
            <span className={`text-3xl font-montserrat font-bold tracking-tight ${
              useScrolledStyle ? 'text-midnight-navy' : 'text-white'
            }`} style={{lineHeight: 1}}>
              Sophoros
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-5">
            <a href="/" className={`text-sm font-medium transition-colors duration-200 ${useScrolledStyle ? 'text-slate-gray hover:text-midnight-navy' : 'text-white hover:text-sky-teal'}`}>Home</a>
            <a href="/solutions" className={`text-sm font-medium transition-colors duration-200 ${useScrolledStyle ? 'text-slate-gray hover:text-midnight-navy' : 'text-white hover:text-sky-teal'}`}>Solutions</a>
            <a href="/why-us" className={`text-sm font-medium transition-colors duration-200 ${useScrolledStyle ? 'text-slate-gray hover:text-midnight-navy' : 'text-white hover:text-sky-teal'}`}>Why Us</a>
            <Link
              href="/get-started"
              className="bg-sky-teal text-midnight-navy px-7 py-2 rounded-lg font-semibold shadow-md hover:bg-sky-teal/90 transition-colors duration-200 ml-2 text-base"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white shadow-lg rounded-lg mt-2 py-4"
          >
            <div className="flex flex-col space-y-4 px-4">
              <Link
                href="/solutions"
                className="text-slate-gray hover:text-midnight-navy transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Solutions
              </Link>
              <Link
                href="/why-us"
                className="text-slate-gray hover:text-midnight-navy transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Why Us
              </Link>
              <Link
                href="/get-started"
                className="text-slate-gray hover:text-midnight-navy transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/get-started"
                className="bg-sky-teal text-midnight-navy px-6 py-2 rounded-md font-semibold hover:bg-sky-teal/90 transition-colors duration-200 text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation; 