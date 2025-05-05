import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-glacier-white text-midnight-navy p-8">
      <Image
        src="/logo.svg"
        alt="Sophoros Logo"
        width={80}
        height={80}
        className="mb-6"
      />
      <h1 className="text-5xl font-montserrat font-bold mb-4">Page Not Found</h1>
      <p className="text-lg text-slate-gray mb-8 text-center max-w-xl">
        Sorry, the page you are looking for does not exist or has been moved.<br />
        Please check the URL or return to the homepage.
      </p>
      <Link href="/" className="bg-sky-teal text-midnight-navy px-6 py-2 rounded-md font-semibold font-montserrat hover:bg-sky-teal/90 transition-colors duration-200">
        Go Home
      </Link>
    </main>
  );
} 