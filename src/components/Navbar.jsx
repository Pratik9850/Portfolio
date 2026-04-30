import { useState, useEffect } from 'react'
import styles from '../styles/Navbar.module.css'

const LINKS = ['about', 'skills', 'projects', 'certs', 'contact']

export default function Navbar() {
  const [active,    setActive]    = useState('about')
  const [scrolled,  setScrolled]  = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      for (const id of [...LINKS].reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 160) {
          setActive(id)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = id => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <span className={styles.logo} onClick={() => scrollTo('about')}>PS/</span>

      <div className={styles.links}>
        {LINKS.map(id => (
          <span
            key={id}
            className={`${styles.link} ${active === id ? styles.active : ''}`}
            onClick={() => scrollTo(id)}
          >
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </span>
        ))}
      </div>

      <a
        href="https://raw.githubusercontent.com/Pratik9850/Portfolio/main/Resume/Pratik_Sarode_CV.pdf"
        target="_blank"
        rel="noreferrer"
        className={styles.cta}
      >
        Resume ↓
      </a>
    </nav>
  )
}
