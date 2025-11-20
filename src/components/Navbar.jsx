import { useEffect, useState } from 'react'

const NavLink = ({ children }) => (
  <a href="#" className="text-[#007BA7] hover:opacity-80 transition-opacity font-medium tracking-tight">
    {children}
  </a>
)

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 w-full ${scrolled ? 'backdrop-blur-md' : 'backdrop-blur'} `}>
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="flex items-center justify-between py-3 border-b border-[#007BA7]/20">
          {/* Left links */}
          <nav className="flex-1 flex items-center gap-6">
            <NavLink>Products</NavLink>
            <NavLink>Story</NavLink>
          </nav>

          {/* Logo centered */}
          <div className="flex-shrink-0 px-4">
            <div className="select-none text-2xl md:text-3xl font-title tracking-widest text-[#007BA7]">Fruiture</div>
          </div>

          {/* Right links */}
          <nav className="flex-1 flex items-center gap-6 justify-end">
            <NavLink>Contact</NavLink>
            <NavLink>Cart</NavLink>
          </nav>
        </div>
      </div>
    </header>
  )
}
