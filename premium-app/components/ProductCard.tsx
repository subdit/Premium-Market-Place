import Image from 'next/image';
import { ShoppingCart } from 'lucide-react';

interface ProductProps {
  product: {
    id: string;
    name: string;
    price: number;
    image: string;
    category: string;
    description?: string;
  };
}

export default function ProductCard({ product }: ProductProps) {
  return (
    <div className='group cursor-pointer'>
      <div className='relative aspect-4/5 overflow-hidden rounded-2xl bg-slate-100'>
        <Image
          src='/images/thai-dress-2.jpg'
          alt={product}
          fill
          className='object-cover transition-transform duration-500 group-hover:scale-105'
        />
        <button className='absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-black hover:text-white'>
          <ShoppingCart size={18} />
        </button>
      </div>
      <div className='mt-4 space-y-1'>
        <p className='text-xs text-slate-400 uppercase tracking-widest'>
          {product.category}
        </p>
        <h3 className='text-sm font-semibold text-slate-900'>{product.name}</h3>
        <p className='text-sm font-medium text-slate-600'>
          ${(product.price / 100).toFixed(2)}
        </p>
      </div>
    </div>
  );
}
