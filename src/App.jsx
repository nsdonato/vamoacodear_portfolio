import { useState } from 'react'
import { ContatcMe } from './components/ContactMe/ContactMe'
import { About } from './components/About/About'
import logo from './logo.svg'
import './App.css'

function App() {

  return (
    <div className="App">
      <ContatcMe />
      <About />
    </div>
  )
}

export default App
