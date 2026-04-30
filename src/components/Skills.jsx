import { useState } from 'react'
import styles from '../styles/Skills.module.css'
import { useReveal } from './useReveal'

const BARS = [
  { label: 'LangChain / LangGraph / RAG',   pct: 90, color: '#6366f1', delay: 0 },
  { label: 'Python / FastAPI / Flask',       pct: 88, color: '#8b5cf6', delay: 60 },
  { label: 'LLM Evaluation & Prompting',     pct: 85, color: '#06b6d4', delay: 120 },
  { label: 'Docker / GCP / Cloud',           pct: 80, color: '#10b981', delay: 180 },
  { label: 'PyTorch / TF / HuggingFace',     pct: 78, color: '#f59e0b', delay: 240 },
  { label: 'Agentic Systems / ElizaOS',      pct: 82, color: '#ec4899', delay: 300 },
  { label: 'Solidity / Web3 / DeFi',         pct: 72, color: '#14b8a6', delay: 360 },
  { label: 'FAISS / ChromaDB / Vector DBs',  pct: 84, color: '#6366f1', delay: 420 },
]

const CATS = [
  {
    icon: '🤖', title: 'LLM & GenAI',
    pills: ['LangChain','LangGraph','Groq API','Ollama','ElizaOS','RAG Pipelines','Prompt Eng.'],
  },
  {
    icon: '🧠', title: 'ML & Data Science',
    pills: ['PyTorch','TensorFlow','HuggingFace','Scikit-learn','FAISS','ChromaDB','MLflow'],
  },
  {
    icon: '⚙️', title: 'Backend & APIs',
    pills: ['Python','FastAPI','Flask','SQLite','REST APIs','WebSockets','Playwright'],
  },
  {
    icon: '☁️', title: 'Cloud & DevOps',
    pills: ['GCP','AWS','Oracle Cloud','Docker','GitHub Actions','Vercel','CI/CD'],
  },
  {
    icon: '🔷', title: 'Web3 & DeFi',
    pills: ['Solidity','Ethereum','CoinGecko','Pionex','RSI/MACD','Grid Trading'],
  },
  {
    icon: '🛠️', title: 'Languages & Tools',
    pills: ['Python','TypeScript','JavaScript','C++','SQL','R','Git','JIRA'],
  },
]

const TECH_PILLS = [
  'Python','TypeScript','LangChain','LangGraph','FastAPI','Flask','PyTorch',
  'TensorFlow','HuggingFace','FAISS','ChromaDB','Docker','GCP','AWS',
  'Playwright','CI/CD','Groq','Ollama','ElizaOS','Solidity','React','Vite',
]

function SkillBar({ label, pct, color, delay }) {
  const [ref, visible] = useReveal(0.3, delay)

  return (
    <div ref={ref} className={styles.bar}>
      <div className={styles.barHeader}>
        <span className={styles.barLabel}>{label}</span>
        <span className={styles.barPct} style={{ color }}>{pct}%</span>
      </div>
      <div className={styles.barTrack}>
        <div
          className={styles.barFill}
          style={{
            width: visible ? `${pct}%` : '0%',
            background: `linear-gradient(90deg, ${color}, ${color}88)`,
            boxShadow: visible ? `0 0 8px ${color}55` : 'none',
          }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const [headerRef, headerVis] = useReveal()
  const [catRef,    catVis]    = useReveal(0.08, 100)

  return (
    <section id="skills" className="section">
      {/* Header */}
      <div
        ref={headerRef}
        className="section-header"
        style={{
          opacity: headerVis ? 1 : 0,
          transform: headerVis ? 'translateY(0)' : 'translateY(24px)',
          transition: 'opacity 0.7s ease, transform 0.7s ease',
        }}
      >
        <p className="eyebrow">Capabilities</p>
        <h2 className="display-lg" style={{ marginTop: '0.4rem' }}>Technical Stack</h2>
        <div className="section-rule" />
      </div>

      {/* Skill bars */}
      <div className={styles.grid}>
        <div className={styles.barGroup}>
          {BARS.slice(0, 4).map(b => <SkillBar key={b.label} {...b} />)}
        </div>
        <div className={styles.barGroup}>
          {BARS.slice(4).map(b => <SkillBar key={b.label} {...b} />)}
        </div>
      </div>

      {/* Tech pill cloud */}
      <div className={styles.pillCloud}>
        {TECH_PILLS.map(t => (
          <span key={t} className="pill">{t}</span>
        ))}
      </div>

      {/* Category cards */}
      <div
        ref={catRef}
        className={styles.catGrid}
        style={{
          opacity: catVis ? 1 : 0,
          transform: catVis ? 'translateY(0)' : 'translateY(28px)',
          transition: 'opacity 0.7s ease, transform 0.7s ease',
        }}
      >
        {CATS.map(({ icon, title, pills }) => (
          <div key={title} className={styles.catCard}>
            <span className={styles.catIcon}>{icon}</span>
            <p className={styles.catTitle}>{title}</p>
            <div className={styles.catPills}>
              {pills.map(p => (
                <span key={p} className={styles.catPill}>{p}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
