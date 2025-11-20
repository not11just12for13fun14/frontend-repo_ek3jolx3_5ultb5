export default function Hero() {
  return (
    <section className="relative w-full min-h-[80vh] md:min-h-[88vh] flex items-center">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 w-full">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-title tracking-[0.08em] text-black">Fruits of the Future</h1>
          <p className="mt-6 text-lg md:text-xl text-black/70 leading-relaxed max-w-2xl">
            Bio-engineered flavors, crystalline textures, and zero-waste nutrition. Designed for wellness-driven tastemakers who live light and think ahead.
          </p>
          <div className="mt-10">
            <a href="#grid" className="inline-flex items-center justify-center rounded-[15px] border border-[#007BA7]/40 bg-white/20 backdrop-blur-md px-8 py-4 text-base md:text-lg font-semibold text-[#007BA7] shadow-[0_8px_40px_rgba(0,123,167,0.15)] hover:bg-white/30 transition-colors" style={{lineHeight:1}}>
              <span className="leading-none tracking-wide">Explore Fruits</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
