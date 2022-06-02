import { ContatcMe } from './components/ContactMe/ContactMe'
import { About } from './components/About/About'
import NavBar from './components/NavBar/NavBar'
import { Projects } from './components/Projects/Projects'

function App() {

  return (
    <div className="App">
      <NavBar />
      <Projects/> 
      <About />
      <ContatcMe />
    </div>
  )
}

export default App
