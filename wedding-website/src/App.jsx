import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Countdown from './components/Countdown'
import Timeline from './components/Timeline'
import Invitations from './components/Invitations'
import Honeymoon from './components/Honeymoon'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Countdown />
      <Timeline />
      <Invitations />
      <Honeymoon />
      <Footer />
    </div>
  )
}

export default App
