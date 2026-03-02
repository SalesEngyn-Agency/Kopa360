import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import TutorLink from './pages/TutorLink'
import SkillzBridge from './pages/SkillzBridge'
import TheNetwork from './pages/TheNetwork'
import ParentsPupils from './pages/ParentsPupils'
import Contact from './pages/Contact'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tutorlink" element={<TutorLink />} />
          <Route path="/skillzbridge" element={<SkillzBridge />} />
          <Route path="/the-network" element={<TheNetwork />} />
          <Route path="/parents" element={<ParentsPupils />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App
