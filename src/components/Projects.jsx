export default function Projects() {
    const projects = [
      {
        icon: '💬',
        name: 'Chat App',
        desc: 'Real-time xabar almashish platformasi — online status, typing animatsiyasi, o\'qilmagan xabarlar va browser bildirishnomalari',
        tags: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Tailwind'],
        github: 'https://github.com/Samandar-14188/nabiyev-chat-client',
        live: 'https://nabiyev-chat.vercel.app',
        color: '#7F77DD'
      }
    ]
  
    return (
      <section id="projects" style={{
        padding: '6rem 2rem',
        background: 'radial-gradient(ellipse at bottom, #1a1a3e 0%, #0a0a0f 70%)'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p style={{ fontSize: '14px', color: '#7F77DD', marginBottom: '0.5rem', textAlign: 'center' }}>
            nima qildim
          </p>
          <h2 style={{
            fontSize: '40px', fontWeight: '700', textAlign: 'center',
            marginBottom: '0.75rem',
            background: 'linear-gradient(135deg, #ffffff, #AFA9EC)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
          }}>
            Loyihalar
          </h2>
          <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.5)', marginBottom: '4rem', fontSize: '16px' }}>
            Yaratgan ishlarim
          </p>
  
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {projects.map((p, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '20px', overflow: 'hidden',
                transition: 'transform 0.3s, border-color 0.3s',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-8px)'
                  e.currentTarget.style.borderColor = p.color + '60'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                }}
              >
                {/* Header */}
                <div style={{
                  padding: '2rem 2rem 1.5rem',
                  background: `linear-gradient(135deg, #1a1a3e, #16213e)`,
                  borderBottom: `1px solid ${p.color}30`
                }}>
                  <div style={{ fontSize: '40px', marginBottom: '12px' }}>{p.icon}</div>
                  <h3 style={{ fontSize: '22px', fontWeight: '600', color: 'white', marginBottom: '8px' }}>{p.name}</h3>
                  <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', lineHeight: '1.6' }}>{p.desc}</p>
                </div>
  
                {/* Body */}
                <div style={{ padding: '1.5rem 2rem 2rem' }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '1.5rem' }}>
                    {p.tags.map((tag, j) => (
                      <span key={j} style={{
                        background: 'rgba(127,119,221,0.1)',
                        color: '#AFA9EC', fontSize: '12px',
                        padding: '4px 12px', borderRadius: '50px',
                        border: '1px solid rgba(127,119,221,0.2)'
                      }}>{tag}</span>
                    ))}
                  </div>
  
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <a href={p.github} target="_blank" rel="noreferrer" style={{
                      flex: 1, padding: '10px', borderRadius: '12px',
                      fontSize: '14px', textAlign: 'center', textDecoration: 'none',
                      color: 'white', border: '1px solid rgba(255,255,255,0.15)',
                      background: 'transparent', transition: 'background 0.2s'
                    }}
                      onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
                      onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                    >
                      GitHub
                    </a>
                    <a href={p.live} target="_blank" rel="noreferrer" style={{
                      flex: 1, padding: '10px', borderRadius: '12px',
                      fontSize: '14px', textAlign: 'center', textDecoration: 'none',
                      color: 'white', background: p.color,
                      transition: 'opacity 0.2s'
                    }}
                      onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                      onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                    >
                      Ko'rish
                    </a>
                  </div>
                </div>
              </div>
            ))}
  
            {/* Keyingi loyiha */}
            <div style={{
              background: 'rgba(255,255,255,0.02)',
              border: '1px dashed rgba(255,255,255,0.1)',
              borderRadius: '20px', padding: '3rem 2rem',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              textAlign: 'center', gap: '12px'
            }}>
              <div style={{ fontSize: '40px', opacity: 0.4 }}>🚀</div>
              <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '16px' }}>Keyingi loyiha</p>
              <p style={{ color: 'rgba(255,255,255,0.2)', fontSize: '13px' }}>Tez orada...</p>
            </div>
          </div>
        </div>
      </section>
    )
  }