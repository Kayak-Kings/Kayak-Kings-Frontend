import React, { Component } from 'react'
import Navigation from './Components/Navigation'
import Header from './Components/Header'
import About from './Components/About'
import Tours from './Components/Tours'
import Staff from './Components/Staff'
import Book from './Components/Book'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Header />
        <About />
        <Tours />
        <Staff />
        <Book />
        <Contact />
        <Footer />
      </div>
     
    )
  }
}

export default App
