import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/hero/Hero'
import Parallax from './components/parallax/Parallax'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'


const App = () => {
  return (
    <div>
      <section id="HomePage">
        <Navbar/>
        <Hero/>
      </section>
      <section id="Services"><Parallax type="services"/></section>
      <section><Services/></section>
      <section id="Portfilio"><Parallax type="portfolio"/></section>
       <Portfolio/>
      <section id="Contact"><Contact/></section>
      {/* <Test/> */}
    </div>
  )
}

export default App
