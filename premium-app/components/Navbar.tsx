// components/Navbar.tsx
'use client';

import Link from 'next/link';
import { ShoppingBag, User, Search } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className='fixed top-0 w-full z-50 border-b border-slate-100 bg-white/80 backdrop-blur-md'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <div className='shrink-0 flex items-center'>
            <Link
              href='/'
              className='text-xl font-bold tracking-tighter text-slate-900'>
              THAI DRESS<span className='text-blue-600'></span>
            </Link>
          </div>

          {/* Navigation Links - Centered */}
          <div className='hidden md:flex space-x-8 text-sm font-medium text-slate-600'>
            <Link href='/shop' className='hover:text-black transition-colors'>
              Shop All
            </Link>
            <Link href='/new' className='hover:text-black transition-colors'>
              New Arrivals
            </Link>
            <Link
              href='/collections'
              className='hover:text-black transition-colors'>
              Collections
            </Link>
          </div>

          {/* Action Icons */}
          <div className='flex items-center space-x-5'>
            <button className='text-slate-600 hover:text-black'>
              <Search size={20} />
            </button>
            <Link href='/account' className='text-slate-600 hover:text-black'>
              <User size={20} />
            </Link>
            <Link
              href='/cart'
              className='relative text-slate-600 hover:text-black'>
              <ShoppingBag size={20} />
              <span className='absolute -top-1 -right-1 bg-blue-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full'>
                0
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
