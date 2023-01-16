import { useState } from 'react'
import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
    <Nav/>
    <Header/>
    <About/>
    <Skills/>
    <Portfolio/>
    <Contact/>
    <Footer/>
  </>
  )
}

export default App
