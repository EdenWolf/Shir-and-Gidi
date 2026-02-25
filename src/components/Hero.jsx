import './Hero.css'

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-flowers hero-flowers-top">
        <span>🌸</span><span>🌼</span><span>🌷</span><span>🌺</span><span>🌸</span>
      </div>
      <div className="hero-content">
        <p className="hero-subtitle">ב״ה</p>
        <h1 className="hero-names">שיר & גדעון</h1>
        <div className="hero-line"></div>
        <p className="hero-family">וולפסון ♡ ברטל</p>
        <p className="hero-tagline">מתחתנים!</p>
        <p className="hero-date">29.03.2026</p>
        <button className="hero-cta" onClick={() => document.getElementById('countdown')?.scrollIntoView({ behavior: 'smooth' })}>
          כמה עוד נשאר? ↓
        </button>
      </div>
      <div className="hero-flowers hero-flowers-bottom">
        <span>🌻</span><span>🌹</span><span>💐</span><span>🌷</span><span>🌻</span>
      </div>
    </section>
  )
}
