import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Comparison from './components/Comparison.jsx'
import Features from './components/Features.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import InstallGuide from './components/InstallGuide.jsx'
import CtaFooter from './components/CtaFooter.jsx'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Comparison />
        <Features />
        <HowItWorks />
        <InstallGuide />
        <CtaFooter />
      </main>
    </>
  )
}

export default App
