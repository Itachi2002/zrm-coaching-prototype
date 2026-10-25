import { useEffect, useState } from 'react'
import About from './components/About'
import BodyBeyond from './components/BodyBeyond'
import Faq from './components/Faq'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import IntakeForm from './components/IntakeForm'
import PersonalTraining from './components/PersonalTraining'
import Problem from './components/Problem'

function scrollToId(id) {
  const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
  document.getElementById(id)?.scrollIntoView({ behavior, block: 'start' })
}

export default function App() {
  const [interest, setInterest] = useState('')
  const [directed, setDirected] = useState(false)
  const [journeyRequest, setJourneyRequest] = useState(0)

  useEffect(() => {
    function focusFromHash() {
      const id = window.location.hash.replace('#', '')
      if (!id) return
      document.getElementById(id)?.focus({ preventScroll: true })
    }

    focusFromHash()
    window.addEventListener('hashchange', focusFromHash)
    return () => window.removeEventListener('hashchange', focusFromHash)
  }, [])

  function choosePath(value) {
    setInterest(value)
    setDirected(true)
    setJourneyRequest((count) => count + 1)
    if (window.location.hash !== '#start') {
      window.history.pushState(null, '', '#start')
    }
    scrollToId('start')
  }

  function changeInterest(value) {
    setInterest(value)
    setDirected(false)
  }

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Problem />
        <BodyBeyond onChoose={() => choosePath('body-beyond')} />
        <PersonalTraining onChoose={() => choosePath('personal-training')} />
        <About />
        <HowItWorks />
        <Faq />
        <IntakeForm
          interest={interest}
          onInterestChange={changeInterest}
          directed={directed}
          requestId={journeyRequest}
        />
      </main>
      <Footer />
    </>
  )
}
