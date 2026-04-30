import { useState } from 'react'
import styles from '../styles/Contact.module.css'
import { useReveal } from './useReveal'

const LINKS = [
  {
    icon: '✉️',
    title: 'Email',
    sub: 'pratik.sarode9850@gmail.com',
    href: 'mailto:pratik.sarode9850@gmail.com',
  },
  {
    icon: '💼',
    title: 'LinkedIn',
    sub: 'Connect with me',
    href: 'https://linkedin.com/in/pratiksarode',
  },
  {
    icon: '🐙',
    title: 'GitHub',
    sub: 'github.com/Pratik9850',
    href: 'https://github.com/Pratik9850',
  },
  {
    icon: '📄',
    title: 'Resume / CV',
    sub: 'Download PDF',
    href: 'https://raw.githubusercontent.com/Pratik9850/Portfolio/main/Resume/Pratik_Sarode_CV.pdf',
  },
]

export default function Contact() {
  const [lRef, lVis] = useReveal(0.1)
  const [rRef, rVis] = useReveal(0.1, 150)

  function handleSubmit(e) {
    e.preventDefault()
    alert('Thanks for reaching out! Please email directly: pratik.sarode9850@gmail.com')
  }

  return (
    <section id="contact" className="section">
      <div className={styles.grid}>
        {/* Left */}
        <div
          ref={lRef}
          style={{
            opacity: lVis ? 1 : 0,
            transform: lVis ? 'translateX(0)' : 'translateX(-24px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >
          <p className="eyebrow">Contact</p>
          <h2 className="display-lg" style={{ marginTop: '0.4rem', marginBottom: '0.5rem' }}>
            Let's build{' '}
            <span className="grad-text">something great</span>
          </h2>
          <div className="section-rule" style={{ marginBottom: '1.75rem' }} />
          <p className={styles.leftBio}>
            Actively seeking roles as a GenAI Engineer, AI/ML Engineer, Prompt Engineer,
            LLM Evaluator, or AI Solutions Engineer — Pune preferred (4 LPA+), open to remote.
            Whether you have a role, a project, or just want to talk AI — reach out.
          </p>

          <div className={styles.links}>
            {LINKS.map(({ icon, title, sub, href }) => (
              <a key={title} href={href} target="_blank" rel="noreferrer" className={styles.linkItem}>
                <div className={styles.linkIcon}>{icon}</div>
                <div>
                  <div className={styles.linkTitle}>{title}</div>
                  <div className={styles.linkSub}>{sub}</div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Right — form */}
        <div
          ref={rRef}
          style={{
            opacity: rVis ? 1 : 0,
            transform: rVis ? 'translateX(0)' : 'translateX(24px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >
          <div className={styles.formCard}>
            <h3 className={styles.formTitle}>Send a message</h3>
            <form onSubmit={handleSubmit}>
              {[
                { id: 'name',  label: 'Your name',        type: 'text',  placeholder: 'Jane Smith' },
                { id: 'email', label: 'Email address',    type: 'email', placeholder: 'jane@company.com' },
                { id: 'role',  label: 'Role / Opportunity', type: 'text', placeholder: 'GenAI Engineer at Acme' },
              ].map(f => (
                <div key={f.id} className={styles.formGroup}>
                  <label htmlFor={f.id} className={styles.label}>{f.label}</label>
                  <input
                    id={f.id}
                    type={f.type}
                    placeholder={f.placeholder}
                    className={styles.input}
                    autoComplete="off"
                  />
                </div>
              ))}

              <div className={styles.formGroup}>
                <label htmlFor="msg" className={styles.label}>Message</label>
                <textarea
                  id="msg"
                  rows={5}
                  placeholder="Tell me about the role or project…"
                  className={styles.textarea}
                />
              </div>

              <button type="submit" className={styles.submitBtn}>
                Send Message
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="22" y1="2" x2="11" y2="13"/>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
