import React from 'react'
import './App.css'
import Header from './components/header/Header'
import Home from './components/home/Home'
import About from './components/about/About'
import Features from './components/features/Features'
import Menu from './components/menu/Menu'
import Choose from './components/choose/Choose'
import Stat from './components/stat/Stat'
import Gallery from './components/gallery/Gallery'
import Offer from './components/offer/Offer'
import Reservation from './components/reservation/Reservation'
import Testimonials from './components/testimonials/Testimonials'
import Footer from './components/footer/Footer'

function App() {
  return(
    <>
      <Header />
      <Home />
      <About />
      <Features />
      <Menu />
      <Choose />
      <Stat />
      <Gallery />
      <Offer />
      <Reservation />
      <Testimonials />
      <Footer />
    </>
  )
  
}

export default App
