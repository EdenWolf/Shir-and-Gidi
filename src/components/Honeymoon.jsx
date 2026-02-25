import './Honeymoon.css'

const trips = [
  {
    title: 'ירח דבש קטן',
    icon: '🇵🇱',
    destination: 'קרקוב, פולין',
    dates: '8 - 17 במאי 2026',
    description: 'טיול רומנטי בעיר ההיסטורית קרקוב - רחובות מרוצפים, אדריכלות מרהיבה, ואוכל מדהים.',
    highlights: ['העיר העתיקה', 'מכרות המלח', 'טירת ואוול', 'אוכל פולני'],
    color: 'blue',
  },
  {
    title: 'ירח דבש גדול',
    icon: '🇯🇵🇰🇷',
    destination: 'יפן ודרום קוריאה',
    dates: 'אמצע אוקטובר - סוף דצמבר 2026',
    description: 'הרפתקה גדולה במזרח אסיה! מקדשים יפניים, אוכל רחוב קוריאני, שלכת בקיוטו, ועוד.',
    highlights: ['טוקיו', 'קיוטו', 'אוסקה', 'סיאול', 'שלכת יפנית'],
    color: 'pink',
  },
]

export default function Honeymoon() {
  return (
    <section id="honeymoon" className="honeymoon">
      <h2 className="section-title">ירח דבש 🌙</h2>
      <p className="honeymoon-subtitle">ההרפתקאות שמחכות לשיר וגדעון אחרי החתונה</p>
      <div className="honeymoon-grid">
        {trips.map((trip, i) => (
          <div key={i} className={`honeymoon-card honeymoon-${trip.color}`}>
            <div className="honeymoon-card-icon">{trip.icon}</div>
            <h3 className="honeymoon-card-title">{trip.title}</h3>
            <p className="honeymoon-card-dest">{trip.destination}</p>
            <p className="honeymoon-card-dates">{trip.dates}</p>
            <div className="honeymoon-card-divider"></div>
            <p className="honeymoon-card-desc">{trip.description}</p>
            <div className="honeymoon-tags">
              {trip.highlights.map((h, j) => (
                <span key={j} className="honeymoon-tag">{h}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
