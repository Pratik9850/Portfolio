import styles from '../styles/Certs.module.css'
import { useReveal } from './useReveal'

const BASE = 'https://raw.githubusercontent.com/Pratik9850/Portfolio/main/Certifications/'

const CERTS = [
  { icon: '☁️', title: 'Oracle Cloud Infrastructure GenAI Professional', issuer: 'Oracle · 2024',     file: 'Oracle Cloud Infrastructure.pdf' },
  { icon: '🏃', title: 'AI & Agility Professional',                       issuer: 'Scrum Alliance · 2024', file: 'Ai and Agility Certificate.pdf' },
  { icon: '🔷', title: 'Master Ethereum & Solidity',                      issuer: 'Udemy · 2024',          file: 'master ethereum and solidity.pdf' },
  { icon: '📊', title: 'Data Manipulation with Python',                   issuer: 'DataCamp · 2024',       file: 'data manipulation.pdf' },
  { icon: '🌐', title: 'Web Development Bootcamp',                        issuer: 'Udemy · 2023',          file: 'web development.pdf' },
  { icon: '🐍', title: 'Kaggle Python Coder Badge',                       issuer: 'Kaggle / Oracle · 2024',file: 'Python Coder (1).png' },
  { icon: '🤝', title: 'AI Ethics & Agile Leadership',                    issuer: 'Excellidia · 2024',     file: 'Pratik.pdf' },
  { icon: '🎓', title: 'Oracle Learning Path Badge',                      issuer: 'Oracle · 2024',         file: 'Learning-Path_badge_default.png' },
]

function CertCard({ icon, title, issuer, file, delay }) {
  const [ref, vis] = useReveal(0.1, delay)

  return (
    <a
      ref={ref}
      href={BASE + encodeURIComponent(file)}
      target="_blank"
      rel="noreferrer"
      className={styles.card}
      style={{
        opacity: vis ? 1 : 0,
        transform: vis ? 'translateY(0)' : 'translateY(24px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease',
      }}
    >
      <div className={styles.glow} />
      <span className={styles.icon}>{icon}</span>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.issuer}>{issuer}</p>
      <span className={styles.link}>
        View
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
          <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
        </svg>
      </span>
    </a>
  )
}

export default function Certs() {
  const [hRef, hVis] = useReveal()

  return (
    <section id="certs" className="section">
      <div
        ref={hRef}
        className="section-header"
        style={{
          opacity: hVis ? 1 : 0,
          transform: hVis ? 'translateY(0)' : 'translateY(24px)',
          transition: 'opacity 0.7s ease, transform 0.7s ease',
        }}
      >
        <p className="eyebrow">Credentials</p>
        <h2 className="display-lg" style={{ marginTop: '0.4rem' }}>Certifications</h2>
        <div className="section-rule" />
      </div>

      <div className={styles.grid}>
        {CERTS.map((c, i) => (
          <CertCard key={c.title} {...c} delay={i * 55} />
        ))}
      </div>
    </section>
  )
}
