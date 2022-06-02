import { ContatcMe } from './components/ContactMe/ContactMe'
import { About } from './components/About/About'
import NavBar from './components/NavBar/NavBar'
import { Projects } from './components/Projects/Projects'
import { Hero } from "./components/Hero/Hero";

function App() {

  return (
    <div className="App">
      <Hero />
      <NavBar />
      <Projects/> 
      <About />
      <ContatcMe />
    </div>
  )
}

export default App
