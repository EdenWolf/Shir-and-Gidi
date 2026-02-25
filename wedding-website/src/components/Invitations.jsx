import { useState } from 'react'
import './Invitations.css'

const invites = [
  {
    src: './images/save-the-date.jpeg',
    title: 'Save the Date',
    subtitle: 'שמרו את התאריך!',
  },
  {
    src: './images/henna.jpeg',
    title: 'הזמנה לחינה',
    subtitle: '12.03.2026 | ״הבית של פרח״, באר שבע',
  },
  {
    src: './images/wedding-invite.jpeg',
    title: 'הזמנה לחתונה',
    subtitle: '29.03.2026 | אולם דוריה, שדה יואב',
  },
]

export default function Invitations() {
  const [lightbox, setLightbox] = useState(null)

  return (
    <section id="invitations" className="invitations">
      <h2 className="section-title">ההזמנות</h2>
      <p className="invitations-subtitle">לחצו על ההזמנה כדי להגדיל</p>
      <div className="invitations-grid">
        {invites.map((invite, i) => (
          <div key={i} className="invitation-card" onClick={() => setLightbox(i)}>
            <div className="invitation-img-wrapper">
              <img src={invite.src} alt={invite.title} loading="lazy" />
            </div>
            <h3>{invite.title}</h3>
            <p>{invite.subtitle}</p>
          </div>
        ))}
      </div>

      {lightbox !== null && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button className="lightbox-close" onClick={() => setLightbox(null)}>✕</button>
          <img
            src={invites[lightbox].src}
            alt={invites[lightbox].title}
            onClick={(e) => e.stopPropagation()}
          />
          <div className="lightbox-nav">
            <button
              onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + invites.length) % invites.length) }}
            >
              →
            </button>
            <span className="lightbox-title">{invites[lightbox].title}</span>
            <button
              onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % invites.length) }}
            >
              ←
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
