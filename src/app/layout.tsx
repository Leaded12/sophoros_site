import type { Metadata } from 'next'
import { Open_Sans, IBM_Plex_Serif, Roboto_Mono } from 'next/font/google'
import './globals.css'

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-open-sans',
})

const ibmPlex = IBM_Plex_Serif({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-ibm-plex',
})

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})

export const metadata: Metadata = {
  title: 'Sophoros Consulting',
  description: 'Expert consulting services for healthcare organizations',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${openSans.variable} ${ibmPlex.variable} ${robotoMono.variable}`}>
      <body className="min-h-screen bg-gray-50">{children}</body>
    </html>
  )
} 