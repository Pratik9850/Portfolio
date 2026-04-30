import { useState } from 'react'
import styles from '../styles/Projects.module.css'
import { useReveal } from './useReveal'

const PROJECTS = [
  {
    tag: 'DeFi · ElizaOS',
    tagColor: '#06b6d4',
    title: 'DeFi Oracle ElizaOS Agent',
    desc: '6 custom agent actions — RSI, MACD, Fear & Greed, live prices, signal scoring, top movers — via CoinGecko & Alternative.me at sub-200ms latency. Multi-factor BUY/SELL/HOLD engine across 100+ crypto pairs.',
    stack: ['ElizaOS','TypeScript','Docker','CoinGecko API','Nosana'],
    featured: true,
    metrics: [
      { icon: '⚡', val: '<200ms', label: 'Signal latency' },
      { icon: '📊', val: '100+',   label: 'Crypto pairs' },
      { icon: '🎯', val: '6',      label: 'Agent actions' },
    ],
  },
  {
    tag: 'NLP · Dissertation',
    tagColor: '#8b5cf6',
    title: 'AI-Powered Fake News Detection',
    desc: 'CNN-based NLP system achieving 98% accuracy (Precision 97%, F1 97.5%). Data pipeline over 50,000+ images with inference latency cut from 250ms → 150ms via quantization.',
    stack: ['TensorFlow','BERT','HuggingFace','Python','CNN'],
  },
  {
    tag: 'RAG · LangChain',
    tagColor: '#10b981',
    title: 'Chat with PDF Notes System',
    desc: 'End-to-end RAG pipeline: PDF ingestion, chunking, FAISS indexing, sub-500ms semantic search over 1000+ docs. Flask REST API + Docker + GCP App Engine auto-scaling.',
    stack: ['LangChain','FAISS','Docker','GCP','Flask','FastAPI'],
  },
  {
    tag: 'Agentic · Trading Bot',
    tagColor: '#f59e0b',
    title: 'Autonomous Crypto Trading Bot',
    desc: 'HMAC-SHA256 Pionex integration, RSI/MACD/EMA/volume signals, Groq AI validation (llama-3.3-70b), SQLite logging, Telegram alerts, and a paper-to-live promotion system.',
    stack: ['Python','Groq','Pionex API','Flask','SQLite','Telegram'],
  },
  {
    tag: 'Agentic · LangGraph',
    tagColor: '#ec4899',
    title: 'Bounty Hunter Agent',
    desc: 'LangGraph-powered autonomous bounty submission agent targeting Superteam Earn. Groq LLaMA for content generation, Telegram alerts, 3 full submissions drafted autonomously.',
    stack: ['LangGraph','Groq','Python','Telegram Bot'],
  },
  {
    tag: 'Computer Vision',
    tagColor: '#6366f1',
    title: 'Forest Fire Detection',
    desc: 'Real-time wildfire detection using CNN-based classification on aerial imagery. High-precision smoke and flame detection with multi-class severity alerts deployed on GCP.',
    stack: ['PyTorch','OpenCV','GCP','Python'],
  },
]

function ProjectCard({ project, delay }) {
  const [ref, vis] = useReveal(0.1, delay)
  const [hov, setHov] = useState(false)
  const { tag, tagColor, title, desc, stack, featured, metrics } = project

  if (featured) {
    return (
      <div
        ref={ref}
        className={`${styles.card} ${styles.featured}`}
        style={{
          opacity: vis ? 1 : 0,
          transform: vis ? 'translateY(0)' : 'translateY(28px)',
          transition: 'opacity 0.7s ease, transform 0.7s ease',
        }}
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
      >
        <div className={styles.featLeft}>
          <span
            className={styles.tag}
            style={{ color: tagColor, background: `${tagColor}14`, borderColor: `${tagColor}30` }}
          >{tag}</span>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.desc}>{desc}</p>
          <div className={styles.stack}>
            {stack.map(s => <span key={s} className={styles.stackPill}>{s}</span>)}
          </div>
        </div>
        <div className={styles.featRight}>
          {metrics.map(({ icon, val, label }) => (
            <div key={label} className={styles.metric}>
              <div className={styles.metricIcon} style={{ background: `${tagColor}14` }}>{icon}</div>
              <div>
                <div className={styles.metricVal}>{val}</div>
                <div className={styles.metricLabel}>{label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div
      ref={ref}
      className={styles.card}
      style={{
        opacity: vis ? 1 : 0,
        transform: vis ? 'translateY(0)' : 'translateY(28px)',
        transition: 'opacity 0.7s ease, transform 0.7s ease',
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <span
        className={styles.tag}
        style={{ color: tagColor, background: `${tagColor}12`, borderColor: `${tagColor}28` }}
      >{tag}</span>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.desc}>{desc}</p>
      <div className={styles.stack}>
        {stack.map(s => <span key={s} className={styles.stackPill}>{s}</span>)}
      </div>
    </div>
  )
}

export default function Projects() {
  const [hRef, hVis] = useReveal()

  return (
    <section id="projects" className="section">
      <div
        ref={hRef}
        className="section-header"
        style={{
          opacity: hVis ? 1 : 0,
          transform: hVis ? 'translateY(0)' : 'translateY(24px)',
          transition: 'opacity 0.7s ease, transform 0.7s ease',
        }}
      >
        <p className="eyebrow">Work</p>
        <h2 className="display-lg" style={{ marginTop: '0.4rem' }}>Shipped Projects</h2>
        <div className="section-rule" />
      </div>

      <div className={styles.grid}>
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.title} project={p} delay={i * 70} />
        ))}
      </div>
    </section>
  )
}
