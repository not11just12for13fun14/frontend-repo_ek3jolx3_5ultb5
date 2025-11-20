const cats = [
  { title: 'Best-seller', img: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?q=80&w=1600&auto=format&fit=crop' },
  { title: 'Health', img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1600&auto=format&fit=crop' },
  { title: 'In season', img: 'https://images.unsplash.com/photo-1619566636858-8081aaf45c65?q=80&w=1600&auto=format&fit=crop' },
  { title: 'Always in season', img: 'https://images.unsplash.com/photo-1505685296765-3a2736de412f?q=80&w=1600&auto=format&fit=crop' },
  { title: 'Work in progress', img: 'https://images.unsplash.com/photo-1490818387583-1baba5e638af?q=80&w=1600&auto=format&fit=crop' },
  { title: 'Packages', img: 'https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?q=80&w=1600&auto=format&fit=crop' },
]

export default function Categories() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <h2 className="text-3xl md:text-4xl font-title tracking-[0.2em] text-black text-center mb-12">Browse by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {cats.map((c, idx) => (
            <div key={idx} className="rounded-xl overflow-hidden border border-[#007BA7]/30 bg-white/20 backdrop-blur-md shadow-[0_8px_40px_rgba(0,123,167,0.12)]">
              <div className="aspect-[16/10] relative">
                <img src={c.img} alt={c.title} className="absolute inset-0 w-full h-full object-cover opacity-90" />
              </div>
              <div className="p-4">
                <div className="text-lg font-medium text-[#007BA7] text-center">{c.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
