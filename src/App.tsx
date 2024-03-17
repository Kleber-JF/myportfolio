import About from './components/About'
import { Header } from './components/Header'
import SkillCards from './components/SkillCards'
import { GlobalCss } from './styles'

function App() {
  return (
    <>
      <GlobalCss />
      <Header />
      <About />
      <SkillCards />
    </>
  )
}

export default App
