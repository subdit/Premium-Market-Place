// components/ProductCard.tsx

import Image from 'next/image';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

export function ProductCard({ product }) {
  return (
    <Card className='group overflow-hidden border-none bg-secondary/20 transition-all hover:bg-secondary/40'>
      <CardContent className='p-0'>
        <div className='relative aspect-square overflow-hidden'>
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className='object-cover transition-transform duration-500 group-hover:scale-105'
          />
        </div>
      </CardContent>
      <CardFooter className='flex flex-col items-start p-4'>
        <h3 className='text-sm font-medium text-primary'>{product.name}</h3>
        <p className='text-lg font-bold'>${(product.price / 100).toFixed(2)}</p>
      </CardFooter>
    </Card>
  );
}
