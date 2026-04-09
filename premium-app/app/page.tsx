import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';

const MOCK_PRODUCTS = [
  {
    id: '1',
    name: 'Silk Ceremonial Wrap',
    price: 19900,
    category: 'Traditional',
    image: './images/thai-dress-2.jpg' // Local image for better performance
  },
  {
    id: '2',
    name: 'Modern Chut Thai',
    price: 19900,
    category: 'Contemporary',
    image: './images/thai-dress-3.jpg' // Local image for better performance
  },
  {
    id: '3',
    name: 'Hand-Woven Sabai',
    price: 19900,
    category: 'Accessories',
    image: './images/thai-dress-4.jpg' // Local image for better performance
  }
];

export default function Home() {
  return (
    <div className='flex flex-col w-full pb-20'>
      <Hero />

      <section className='max-w-7xl mx-auto px-4 py-20 w-full'>
        <div className='flex justify-between items-end mb-10'>
          <div>
            <h2 className='text-3xl font-bold tracking-tight text-slate-900'>
              Featured Collections
            </h2>
            <p className='text-slate-500 mt-2'>
              Hand-selected pieces from our master weavers.
            </p>
          </div>
          <button className='text-sm font-semibold border-b-2 border-black pb-1 hover:text-blue-600 hover:border-blue-600 transition-all'>
            View All
          </button>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'>
          {MOCK_PRODUCTS.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
