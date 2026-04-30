import { useEffect, useState } from 'react'
import styles from '../styles/Hero.module.css'
import { useTypewriter } from './useTypewriter'
import PHOTO from '../assets/photo.jpg'

const ROLES = [
  'GenAI Engineer',
  'LLM Evaluator',
  'Prompt Engineer',
  'AI / ML Engineer',
  'AI Solutions Engineer',
]

function DoodleSVG() {
  const [step, setStep] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setStep(s => s + 1), 90)
    return () => clearInterval(t)
  }, [])

  const path = (idx, d, stroke, delay = 0) => ({
    d,
    stroke,
    style: {
      strokeDasharray: 280,
      strokeDashoffset: step > idx ? 0 : 280,
      transition: `stroke-dashoffset 0.7s ease ${delay}s`,
      fill: 'none',
      strokeWidth: 1.5,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
    }
  })

  return (
    <svg
      className={styles.doodle}
      viewBox="0 0 310 310"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Bracket frames */}
      <path {...path(0, 'M60 28 Q44 28 44 46 L44 264 Q44 282 60 282', 'rgba(99,102,241,0.5)')} />
      <path {...path(1, 'M250 28 Q266 28 266 46 L266 264 Q266 282 250 282', 'rgba(99,102,241,0.5)')} />

      {/* Corner ticks TL */}
      <path {...path(2, 'M56 38 L64 30 L74 42', 'rgba(99,102,241,0.7)')} />
      {/* Corner ticks TR */}
      <path {...path(3, 'M254 38 L246 30 L236 42', 'rgba(6,182,212,0.7)')} />
      {/* Corner ticks BL */}
      <path {...path(4, 'M56 272 L64 280 L74 268', 'rgba(99,102,241,0.7)')} />
      {/* Corner ticks BR */}
      <path {...path(5, 'M254 272 L246 280 L236 268', 'rgba(6,182,212,0.7)')} />

      {/* Stars TL */}
      <line x1="26" y1="52" x2="36" y2="42" stroke="rgba(99,102,241,0.75)" strokeWidth="1.5"
        style={{ opacity: step > 6 ? 1 : 0, transition: 'opacity 0.4s ease 0.54s' }}/>
      <line x1="36" y1="52" x2="26" y2="42" stroke="rgba(99,102,241,0.75)" strokeWidth="1.5"
        style={{ opacity: step > 6 ? 1 : 0, transition: 'opacity 0.4s ease 0.54s' }}/>

      {/* Star TR */}
      <line x1="274" y1="58" x2="284" y2="48" stroke="rgba(6,182,212,0.65)" strokeWidth="1.5"
        style={{ opacity: step > 7 ? 1 : 0, transition: 'opacity 0.4s ease 0.63s' }}/>
      <line x1="284" y1="58" x2="274" y2="48" stroke="rgba(6,182,212,0.65)" strokeWidth="1.5"
        style={{ opacity: step > 7 ? 1 : 0, transition: 'opacity 0.4s ease 0.63s' }}/>

      {/* Dot accents */}
      {[
        { cx: 22, cy: 130, r: 2.5, c: 'rgba(99,102,241,0.7)',  s: 8 },
        { cx: 288, cy: 140, r: 2,   c: 'rgba(6,182,212,0.6)',   s: 9 },
        { cx: 18,  cy: 185, r: 2,   c: 'rgba(139,92,246,0.65)', s: 10 },
        { cx: 292, cy: 200, r: 3,   c: 'rgba(245,158,11,0.55)', s: 11 },
      ].map(({ cx, cy, r, c, s }) => (
        <circle key={cx + cy} cx={cx} cy={cy} r={r} fill={c}
          style={{ opacity: step > s ? 1 : 0, transition: `opacity 0.35s ease ${s * 0.09}s` }}/>
      ))}

      {/* Side circles */}
      <circle cx="30" cy="100" r="7" stroke="rgba(99,102,241,0.3)" strokeWidth="1.2" fill="none"
        style={{ strokeDasharray: 45, strokeDashoffset: step > 12 ? 0 : 45, transition: 'stroke-dashoffset 0.6s ease 1.1s' }}/>
      <circle cx="280" cy="110" r="5" stroke="rgba(6,182,212,0.3)" strokeWidth="1.2" fill="none"
        style={{ strokeDasharray: 32, strokeDashoffset: step > 13 ? 0 : 32, transition: 'stroke-dashoffset 0.6s ease 1.2s' }}/>

      {/* Shoulder lines */}
      <path {...path(14, 'M74 285 Q105 279 140 289 Q165 296 200 285 Q220 278 244 285', 'rgba(99,102,241,0.28)')} />
      <path {...path(15, 'M80 295 Q115 287 155 297 Q185 305 225 293', 'rgba(99,102,241,0.15)')} />
    </svg>
  )
}

export default function Hero() {
  const typed = useTypewriter(ROLES, 58)

  return (
    <section id="about" className={styles.hero}>
      <div className={styles.inner}>

        {/* Portrait */}
        <div className={styles.portraitWrap}>
          <div className={styles.ring1} />
          <div className={styles.ring2} />
          <div className={styles.conicRing} />
          <div className={styles.conicInner} />
          <div className={styles.photo}>
            <img src={PHOTO} alt="Pratik Sarode" />
          </div>
          <DoodleSVG />
        </div>

        {/* Available badge */}
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          <span className="body-xs mono" style={{ color: 'var(--c-text2)', letterSpacing: '0.05em' }}>
            Open to opportunities · Pune, India
          </span>
        </div>

        {/* Name */}
        <h1 className={`display-xl ${styles.headline}`}>
          Pratik{' '}
          <span className="grad-text">Sarode</span>
        </h1>

        {/* Typewriter */}
        <div className={styles.typeRow}>
          <span className={styles.typePrefix}>I build</span>
          <span style={{ color: 'var(--c-cyan)', fontWeight: 400 }}>{typed}</span>
          <span className={styles.typeCursor}>|</span>
        </div>

        {/* Bio */}
        <p className={styles.bio}>
          <strong>MSc Applied AI &amp; Data Analytics (First Class)</strong>, University of Bradford ·
          BE Electronics &amp; Telecom (Distinction, GPA 7.76). Specialising in RAG pipelines,
          LLM evaluation, and agentic systems — from DeFi oracles to fake-news detectors.
        </p>

        {/* CTAs */}
        <div className={styles.ctas}>
          <a href="#contact" className="btn-primary">
            Get in touch
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </a>
          <a href="https://github.com/Pratik9850" target="_blank" rel="noreferrer" className="btn-ghost">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
            GitHub
          </a>
          <a
            href="https://raw.githubusercontent.com/Pratik9850/Portfolio/main/Resume/Pratik_Sarode_CV.pdf"
            target="_blank" rel="noreferrer"
            className="btn-ghost"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Download CV
          </a>
        </div>

        {/* Role pills */}
        <div className={styles.rolePills}>
          {['GenAI Engineer', 'LLM Evaluator', 'Prompt Engineer', 'AI/ML Engineer', 'AI Solutions Engineer'].map(r => (
            <span key={r} className="pill">{r}</span>
          ))}
        </div>

        {/* Stats */}
        <div className={styles.stats}>
          {[
            { n: '6',   l: 'Projects' },
            { n: '1st', l: 'Class MSc' },
            { n: '8+',  l: 'Certifications' },
            { n: '4',   l: 'Languages' },
          ].map(({ n, l }) => (
            <div key={l} className={styles.statCard}>
              <div className={styles.statNum}>{n}</div>
              <div className={styles.statLabel}>{l}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
