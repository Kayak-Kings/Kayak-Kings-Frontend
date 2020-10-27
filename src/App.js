import React, { Component } from 'react'
import Navigation from './Components/Navigation'
import Header from './Components/Header'
import About from './Components/About'
import Routes from './Components/Routes'

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Header />
        <About />
        <Routes />
      </div>
     
    )
  }
}

export default App
