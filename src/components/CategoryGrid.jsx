const categories = [
  { title: 'Best-seller', img: 'https://images.unsplash.com/photo-1547516508-4c1f4abb5b8b?q=80&w=1600&auto=format&fit=crop' },
  { title: 'Health', img: 'https://images.unsplash.com/photo-1514996937319-344454492b37?q=80&w=1600&auto=format&fit=crop' },
  { title: 'In season', img: 'https://images.unsplash.com/photo-1502741126161-b048400d0857?q=80&w=1600&auto=format&fit=crop' },
  { title: 'Always in season', img: 'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?q=80&w=1600&auto=format&fit=crop' },
  { title: 'Work in progress', img: 'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=1600&auto=format&fit=crop' },
  { title: 'Packages', img: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1600&auto=format&fit=crop' },
]

export default function CategoryGrid() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 text-center">
        <h2 className="text-3xl md:text-4xl font-title tracking-[0.2em] text-black mb-12">Categories</h2>
        <div className="mx-auto max-w-5xl grid grid-cols-1 sm:grid-cols-2 gap-8">
          {categories.map((c, idx) => (
            <div key={idx} className="rounded-xl border border-[#007BA7]/30 bg-white/20 backdrop-blur-md overflow-hidden shadow-[0_8px_40px_rgba(0,123,167,0.12)]">
              <div className="relative h-56 sm:h-64">
                <img src={c.img} alt={c.title} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white/80 to-transparent p-4 text-left">
                  <div className="font-medium text-[#007BA7]">{c.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
