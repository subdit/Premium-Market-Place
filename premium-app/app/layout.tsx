// app/layout.tsx
import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';

const geist = Geist({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Thai Dress | Premium Marketplace',
  description: 'Curated high-end goods for the modern collector.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body
        className={`${geist.className} antialiased bg-white text-slate-900`}>
        <Navbar />
        <main className='min-h-screen pt-20'>
          {' '}
          {/* pt-20 accounts for the fixed navbar */}
          {children}
        </main>
        <footer className='border-t py-12 text-center text-sm text-slate-500'>
          © 2026 Premium-Market-Place. Built for performance.
        </footer>
      </body>
    </html>
  );
}
