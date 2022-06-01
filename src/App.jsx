import { ContatcMe } from './components/ContactMe/ContactMe'
import { About } from './components/About/About'
import './App.css'
import NavBar from './components/NavBar/NavBar'

function App() {

  return (
    <div className="App">
      <NavBar />
      <ContatcMe />
      <About />
    </div>
  )
}

export default App
