import { useEffect, useState } from 'react'

export default function Hero() {
  const [text, setText] = useState('')
  const fullText = 'Full-stack Developer'
  
  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      setText(fullText.slice(0, i))
      i++
      if (i > fullText.length) clearInterval(interval)
    }, 80)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" style={{
      minHeight: '100vh',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      textAlign: 'center', padding: '2rem',
      background: 'radial-gradient(ellipse at top, #1a1a3e 0%, #0a0a0f 70%)',
      position: 'relative', overflow: 'hidden'
    }}>
      {/* Floating circles */}
      {[...Array(5)].map((_, i) => (
        <div key={i} style={{
          position: 'absolute',
          width: `${[400,300,200,150,250][i]}px`,
          height: `${[400,300,200,150,250][i]}px`,
          borderRadius: '50%',
          background: ['#7F77DD','#1D9E75','#D85A30','#7F77DD','#1D9E75'][i],
          opacity: 0.05,
          top: `${[-10,60,30,70,20][i]}%`,
          left: `${[70,-5,40,80,10][i]}%`,
          animation: `float${i} ${[6,8,7,9,5][i]}s ease-in-out infinite`,
          transform: 'translate(-50%, -50%)'
        }} />
      ))}

      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Avatar */}
        <div style={{
          width: '130px', height: '130px', borderRadius: '50%',
          background: 'linear-gradient(135deg, #7F77DD, #1D9E75)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '48px', fontWeight: '600', color: 'white',
          margin: '0 auto 2rem',
          border: '3px solid rgba(127,119,221,0.4)',
          boxShadow: '0 0 40px rgba(127,119,221,0.3)'
        }}>
          SN
        </div>

        <h1 style={{ fontSize: '56px', fontWeight: '700', marginBottom: '0.5rem',
          background: 'linear-gradient(135deg, #ffffff, #AFA9EC)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
        }}>
          Samandar Nabiyev
        </h1>

        <p style={{ fontSize: '24px', color: '#7F77DD', marginBottom: '0.5rem', minHeight: '36px' }}>
          {text}<span style={{ animation: 'blink 1s infinite' }}>|</span>
        </p>

        <p style={{ fontSize: '14px', color: '#5DCAA5', marginBottom: '1.5rem' }}>
          English B2 · 2 yil tajriba · Farg'ona, O'zbekiston
        </p>

        <p style={{
          fontSize: '17px', color: 'rgba(255,255,255,0.6)',
          maxWidth: '540px', margin: '0 auto 2.5rem', lineHeight: '1.8'
        }}>
          Frontend da kuchli tajribaga ega, backend ni real loyihalar orqali o'rganayotgan dasturchi.
        </p>

        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            style={{
              background: '#7F77DD', color: 'white', padding: '14px 32px',
              borderRadius: '50px', fontSize: '16px', border: 'none', cursor: 'pointer',
              transition: 'transform 0.2s, opacity 0.2s'
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
          >
            Loyihalarni ko'rish
          </button>
          <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            style={{
              background: 'transparent', color: 'white', padding: '14px 32px',
              borderRadius: '50px', fontSize: '16px', cursor: 'pointer',
              border: '1.5px solid rgba(255,255,255,0.3)', transition: 'transform 0.2s'
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
          >
            Bog'lanish
          </button>
        </div>
      </div>

      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes float0 { 0%,100%{transform:translate(-50%,-50%) translateY(0)} 50%{transform:translate(-50%,-50%) translateY(-30px)} }
        @keyframes float1 { 0%,100%{transform:translate(-50%,-50%) translateY(0)} 50%{transform:translate(-50%,-50%) translateY(20px)} }
        @keyframes float2 { 0%,100%{transform:translate(-50%,-50%) scale(1)} 50%{transform:translate(-50%,-50%) scale(1.2)} }
        @keyframes float3 { 0%,100%{transform:translate(-50%,-50%) translateY(0)} 50%{transform:translate(-50%,-50%) translateY(-20px)} }
        @keyframes float4 { 0%,100%{transform:translate(-50%,-50%) translateY(0)} 50%{transform:translate(-50%,-50%) translateY(25px)} }
      `}</style>
    </section>
  )
}