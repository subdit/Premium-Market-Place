export default function Hero() {
  return (
    <section className='relative h-[80vh] w-full flex items-center justify-center overflow-hidden bg-white'>
      <div className='relative z-10 text-center px-4'>
        <span className='text-blue-600 font-semibold tracking-widest uppercase text-[10px] mb-4 block'>
          Premium Collection 2026
        </span>
        <h1 className='text-5xl md:text-7xl font-bold tracking-tighter text-slate-900 mb-6'>
          Thai Dress <br /> Redefined.
        </h1>
        <p className='max-w-lg mx-auto text-slate-500 text-lg mb-8'>
          Where traditional craftsmanship meets modern elegance. Discover our
          curated selection of high-end attire.
        </p>
        <button className='bg-slate-900 text-white px-10 py-4 rounded-full font-medium hover:bg-slate-800 transition-all transform hover:scale-105'>
          Shop Now
        </button>
      </div>
      {/* Background Gradient Detail */}
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-blue-50 rounded-full blur-3xl -z-0' />
    </section>
  );
}
