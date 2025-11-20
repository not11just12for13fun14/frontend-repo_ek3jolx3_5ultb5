import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FlipGrid from './components/FlipGrid'
import Carousel from './components/Carousel'
import Categories from './components/Categories'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-transparent text-black">
      <Navbar />
      <main>
        <Hero />
        <FlipGrid />
        <Carousel />
        <Categories />
      </main>
      <Footer />
    </div>
  )
}

export default App
