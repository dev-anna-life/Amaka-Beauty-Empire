import './styles/global.css'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Gallery from './components/Gallery'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
    return (
        <>
        <Navbar />
        <Hero />
        <Services />
        <Gallery />
        <About />
        <Testimonials />
        <Contact />
        <Footer />
        </>
    )
}