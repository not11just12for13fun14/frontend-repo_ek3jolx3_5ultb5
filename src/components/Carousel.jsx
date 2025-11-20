import { useEffect, useRef, useState } from 'react'

const products = [
  { name: 'Hexa-berry', img: 'https://images.unsplash.com/photo-1547516508-4c1f4abb5b8b?q=80&w=1600&auto=format&fit=crop' },
  { name: 'Peppermint Pear', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1600&auto=format&fit=crop' },
  { name: 'Icy Apricot', img: 'https://images.unsplash.com/photo-1514517220038-3f04cd0f7c18?q=80&w=1600&auto=format&fit=crop' },
  { name: 'Starfig', img: 'https://images.unsplash.com/photo-1474626302101-1d91e94f6d19?q=80&w=1600&auto=format&fit=crop' },
]

export default function Carousel() {
  const [index, setIndex] = useState(0)
  const total = products.length

  const next = () => setIndex((i) => (i + 1) % total)
  const prev = () => setIndex((i) => (i - 1 + total) % total)

  const visible = [0,1,2].map((offset) => (index + offset) % total)

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 text-center">
        <h2 className="text-3xl md:text-4xl font-title tracking-[0.2em] text-black mb-10">Featured Fruits</h2>
        <div className="relative">
          <div className="flex items-end justify-center gap-6 md:gap-10">
            {visible.map((v, i) => {
              const p = products[v]
              const depth = i === 1 ? 0 : 1
              const tilt = i === 1 ? 0 : (i === 0 ? 8 : -8)
              const scale = i === 1 ? 1 : 0.92
              return (
                <div key={v} className="relative w-40 h-56 md:w-56 md:h-72 rounded-xl border border-[#007BA7]/30 bg-white/20 backdrop-blur-md overflow-hidden shadow-[0_8px_40px_rgba(0,123,167,0.15)]" style={{transform:`translateY(${depth*8}px) rotateX(12deg) rotateZ(${tilt}deg) scale(${scale})`, transformStyle:'preserve-3d'}}>
                  <img src={p.img} alt={p.name} className="absolute inset-0 w-full h-full object-cover opacity-90" />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white/70 to-transparent p-4">
                    <div className="font-medium text-[#007BA7]">{p.name}</div>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="mt-8 flex items-center justify-center gap-6">
            <button aria-label="Previous" onClick={prev} className="rounded-[15px] px-5 py-3 border border-[#007BA7]/40 bg-white/20 backdrop-blur-md text-[#007BA7] font-semibold hover:bg-white/30 transition-colors" style={{lineHeight:1}}>Prev</button>
            <button aria-label="Next" onClick={next} className="rounded-[15px] px-5 py-3 border border-[#007BA7]/40 bg-white/20 backdrop-blur-md text-[#007BA7] font-semibold hover:bg-white/30 transition-colors" style={{lineHeight:1}}>Next</button>
          </div>
        </div>
      </div>
    </section>
  )
}
