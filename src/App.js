import React, { Component } from 'react'
import Navigation from './Components/Navigation'
import Header from './Components/Header'
import About from './Components/About'

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Header />
        <About />
      </div>
     
    )
  }
}

export default App
