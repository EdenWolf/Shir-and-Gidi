import { useState, useEffect } from 'react'
import './Countdown.css'

const WEDDING_DATE = new Date('2026-03-29T19:30:00+03:00')

function getTimeLeft() {
  const now = new Date()
  const diff = WEDDING_DATE - now

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, passed: true }
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    passed: false,
  }
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft)

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000)
    return () => clearInterval(timer)
  }, [])

  const units = [
    { value: timeLeft.days, label: 'ימים' },
    { value: timeLeft.hours, label: 'שעות' },
    { value: timeLeft.minutes, label: 'דקות' },
    { value: timeLeft.seconds, label: 'שניות' },
  ]

  return (
    <section id="countdown" className="countdown">
      <h2 className="section-title">ספירה לאחור לרגע הגדול</h2>
      <div className="countdown-subtitle">
        {timeLeft.passed
          ? '🎉 !המזל טוב! החתונה כבר התקיימה'
          : 'כמה עוד נשאר עד החתונה?'}
      </div>
      <div className="countdown-grid">
        {units.map((unit, i) => (
          <div key={i} className="countdown-card">
            <span className="countdown-number">{String(unit.value).padStart(2, '0')}</span>
            <span className="countdown-label">{unit.label}</span>
          </div>
        ))}
      </div>
      <div className="countdown-date">
        <span>🗓️</span>
        <span>יום ראשון, כ״ט באדר תשפ״ו | 29 במרץ 2026</span>
      </div>
    </section>
  )
}
