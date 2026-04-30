import ParticleCanvas from './components/ParticleCanvas'
import Navbar        from './components/Navbar'
import Hero          from './components/Hero'
import Skills        from './components/Skills'
import Projects      from './components/Projects'
import Certs         from './components/Certs'
import Contact       from './components/Contact'

export default function App() {
  return (
    <>
      {/* Fixed background particle layer */}
      <ParticleCanvas />

      {/* Fixed navigation */}
      <Navbar />

      {/* Page sections */}
      <main>
        <Hero />
        <div className="divider" />
        <Skills />
        <div className="divider" />
        <Projects />
        <div className="divider" />
        <Certs />
        <div className="divider" />
        <Contact />
      </main>

      <footer style={{
        position: 'relative',
        zIndex: 1,
        textAlign: 'center',
        padding: '2.5rem 2rem',
        borderTop: '1px solid var(--c-border)',
        color: 'var(--c-text3)',
        fontSize: '0.82rem',
        lineHeight: 2,
      }}>
        <p style={{ color: 'var(--c-text2)' }}>Pratik Sarode · Pune, India · pratik.sarode9850@gmail.com</p>
        <p>MSc Applied AI &amp; Data Analytics (First Class) · Oracle GenAI Certified · AI Ethics Certified</p>
        <p style={{ marginTop: '0.5rem', opacity: 0.4, fontSize: '0.72rem', fontFamily: 'var(--f-mono)' }}>
          Built with React · Vite · CSS Modules
        </p>
      </footer>
    </>
  )
}
