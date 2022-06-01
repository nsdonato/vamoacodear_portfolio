import { useState } from 'react'
import { ContactForm } from './components/ContactForm/ContactForm'
import { ContatcMe } from './components/ContactMe/ContactMe'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <ContatcMe />
      <ContactForm />
    </div>
  )
}

export default App
