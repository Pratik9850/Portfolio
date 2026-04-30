import { useEffect, useRef } from 'react'

export default function ParticleCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let W, H, rafId
    const mouse = { x: -9999, y: -9999 }
    const N = 100

    class Particle {
      constructor() { this.reset() }
      reset() {
        this.x  = Math.random() * W
        this.y  = Math.random() * H
        this.vx = (Math.random() - 0.5) * 0.38
        this.vy = (Math.random() - 0.5) * 0.38
        this.r  = Math.random() * 1.6 + 0.3
        this.alpha = Math.random() * 0.4 + 0.1
        const hues = [225, 250, 195, 270]
        this.hue = hues[Math.floor(Math.random() * hues.length)]
      }
    }

    function resize() {
      W = canvas.width  = window.innerWidth
      H = canvas.height = window.innerHeight
    }

    const particles = Array.from({ length: N }, () => new Particle())
    resize()

    function frame() {
      ctx.clearRect(0, 0, W, H)

      /* Connections between nearby particles */
      for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
          const a = particles[i], b = particles[j]
          const dx = a.x - b.x, dy = a.y - b.y
          const d  = Math.sqrt(dx * dx + dy * dy)
          if (d < 125) {
            const alpha = (1 - d / 125) * 0.13
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `hsla(225, 65%, 65%, ${alpha})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      /* Mouse interaction lines */
      for (let i = 0; i < N; i++) {
        const p = particles[i]
        const dx = p.x - mouse.x, dy = p.y - mouse.y
        const d  = Math.sqrt(dx * dx + dy * dy)
        if (d < 120) {
          const f = 1 - d / 120
          ctx.beginPath()
          ctx.moveTo(p.x, p.y)
          ctx.lineTo(mouse.x, mouse.y)
          ctx.strokeStyle = `hsla(190, 75%, 65%, ${f * 0.4})`
          ctx.lineWidth = 0.6
          ctx.stroke()
          p.vx += (dx / d) * f * 0.055
          p.vy += (dy / d) * f * 0.055
        }
      }

      /* Draw + update each particle */
      for (let i = 0; i < N; i++) {
        const p = particles[i]

        /* Subtle glow dot */
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 3)
        grad.addColorStop(0, `hsla(${p.hue}, 70%, 72%, ${p.alpha})`)
        grad.addColorStop(1, `hsla(${p.hue}, 70%, 72%, 0)`)
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r * 3, 0, Math.PI * 2)
        ctx.fillStyle = grad
        ctx.fill()

        /* Hard dot */
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${p.hue}, 75%, 78%, ${p.alpha + 0.1})`
        ctx.fill()

        p.x  += p.vx
        p.y  += p.vy
        p.vx *= 0.997
        p.vy *= 0.997
        if (p.x < 0 || p.x > W) p.vx *= -1
        if (p.y < 0 || p.y > H) p.vy *= -1
      }

      rafId = requestAnimationFrame(frame)
    }

    frame()

    const onResize  = () => resize()
    const onMove    = e  => { mouse.x = e.clientX; mouse.y = e.clientY }
    const onLeave   = () => { mouse.x = -9999; mouse.y = -9999 }
    const onTouch   = e  => { mouse.x = e.touches[0].clientX; mouse.y = e.touches[0].clientY }

    window.addEventListener('resize',    onResize)
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseleave', onLeave)
    window.addEventListener('touchmove', onTouch, { passive: true })

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize',    onResize)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseleave', onLeave)
      window.removeEventListener('touchmove', onTouch)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        opacity: 0.85,
      }}
    />
  )
}
