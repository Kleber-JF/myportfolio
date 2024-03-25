import About from './components/About'
import Experience from './components/Experience'
import { Header } from './components/Header'
import Projects from './components/Projects'
import SkillCards from './components/SkillCards'
import { GlobalCss } from './styles'

function App() {
  return (
    <>
      <GlobalCss />
      <Header />
      <About />
      <SkillCards />
      <Projects />
      <Experience />
    </>
  )
}

export default App
