export default function Footer(){
  return (
    <footer className="py-16">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 text-center">
        <div className="text-2xl font-title tracking-widest text-[#007BA7] mb-6">Fruiture</div>
        <div className="flex items-center justify-center gap-8 text-[#007BA7]">
          <a href="#" className="hover:opacity-80 transition-opacity">Products</a>
          <a href="#" className="hover:opacity-80 transition-opacity">Story</a>
          <a href="#" className="hover:opacity-80 transition-opacity">Contact</a>
        </div>
      </div>
    </footer>
  )
}
