import './Timeline.css'

const events = [
  {
    date: '20.02.2026',
    title: 'מסיבת רווקים',
    subtitle: 'של גדעון 🎉',
    icon: '🍻',
    description: 'הלילה של הבנים!',
    passed: new Date('2026-02-20') < new Date(),
  },
  {
    date: '26.02.2026',
    title: 'מסיבת רווקות',
    subtitle: 'של שיר 💃',
    icon: '🥂',
    description: 'הלילה של הבנות!',
    passed: new Date('2026-02-26') < new Date(),
  },
  {
    date: '12.03.2026',
    title: 'חינה',
    subtitle: 'שיר & גדעון',
    icon: '🪬',
    description: '״הבית של פרח״ | שומרון 68, באר שבע | 19:30',
    passed: new Date('2026-03-12') < new Date(),
  },
  {
    date: '29.03.2026',
    title: 'החתונה!',
    subtitle: 'היום הגדול 💍',
    icon: '👰🤵',
    description: 'אולם אירועים דוריה | כביש 35, שדה יואב | קבלת פנים 19:30 | חופה וקידושין 20:30',
    passed: new Date('2026-03-29') < new Date(),
    highlight: true,
  },
]

export default function Timeline() {
  return (
    <section id="timeline" className="timeline">
      <h2 className="section-title">ציר הזמן שלנו</h2>
      <p className="timeline-subtitle">כל האירועים בדרך ליום הגדול</p>
      <div className="timeline-container">
        <div className="timeline-line"></div>
        {events.map((event, i) => (
          <div
            key={i}
            className={`timeline-item ${i % 2 === 0 ? 'right' : 'left'} ${event.passed ? 'passed' : ''} ${event.highlight ? 'highlight' : ''}`}
          >
            <div className="timeline-dot">
              <span>{event.icon}</span>
            </div>
            <div className="timeline-card">
              <div className="timeline-card-date">{event.date}</div>
              <h3 className="timeline-card-title">{event.title}</h3>
              <p className="timeline-card-subtitle">{event.subtitle}</p>
              <p className="timeline-card-desc">{event.description}</p>
              {event.passed && <span className="timeline-badge">✓ עבר</span>}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
