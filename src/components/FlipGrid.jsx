import { useState } from 'react'

const items = [
  { title: 'Best Seller', img: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=1600&auto=format&fit=crop' },
  { title: 'Bundles', img: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1600&auto=format&fit=crop' },
  { title: 'Work in Progress', img: 'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=1600&auto=format&fit=crop' },
  { title: 'In Season', img: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?q=80&w=1600&auto=format&fit=crop' },
]

function FlipCard({ title, img }) {
  const [hover, setHover] = useState(false)
  return (
    <div
      className="group relative h-[50vh] md:h-[50vh] lg:h-[50vh] perspective"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className={`relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d] ${hover ? '[transform:rotateY(180deg)]' : ''}`}>
        {/* Front */}
        <div className="absolute inset-0 rounded-xl border border-[#007BA7]/30 bg-white/20 backdrop-blur-md shadow-[0_8px_40px_rgba(0,123,167,0.12)] [backface-visibility:hidden] flex items-center justify-center">
          <h3 className="text-2xl md:text-3xl font-title tracking-widest text-[#007BA7]">{title}</h3>
        </div>
        {/* Back */}
        <div className="absolute inset-0 rounded-xl border border-[#007BA7]/30 bg-white/10 backdrop-blur-md overflow-hidden [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <img src={img} alt={title} className="absolute inset-0 w-full h-full object-cover opacity-90" />
          <div className="absolute inset-0 bg-white/20" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="text-2xl md:text-3xl font-title tracking-widest text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]">{title}</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function FlipGrid() {
  return (
    <section id="grid" className="w-full min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2">
        {items.map((it, idx) => (
          <div key={idx} className="min-h-[50vh]">
            <FlipCard title={it.title} img={it.img} />
          </div>
        ))}
      </div>
    </section>
  )
}
