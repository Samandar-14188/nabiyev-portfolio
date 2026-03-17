export default function Contact() {
    const contacts = [
      {
        label: 'GitHub',
        value: 'Samandar-14188',
        link: 'https://github.com/Samandar-14188',
        bg: '#1a1a2e',
        color: '#ffffff',
        short: 'GH'
      },
      {
        label: 'Telegram',
        value: '@SamandarNabiyev',
        link: 'https://t.me/SamandarNabiyev',
        bg: '#0088cc20',
        color: '#0088cc',
        short: 'TG'
      },
      {
        label: 'Email',
        value: 'samandarn632@gmail.com',
        link: 'mailto:samandarn632@gmail.com',
        bg: '#EA433520',
        color: '#EA4335',
        short: 'GM'
      }
    ]
  
    return (
      <section id="contact" style={{
        padding: '6rem 2rem',
        background: '#0a0a0f'
      }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '14px', color: '#7F77DD', marginBottom: '0.5rem' }}>
            muloqot
          </p>
          <h2 style={{
            fontSize: '40px', fontWeight: '700', marginBottom: '0.75rem',
            background: 'linear-gradient(135deg, #ffffff, #AFA9EC)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
          }}>
            Bog'lanish
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: '3rem', fontSize: '16px', lineHeight: '1.7' }}>
            Hamkorlik yoki savol bo'lsa — istalgan platforma orqali yozing!
          </p>
  
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
            {contacts.map((c, i) => (
              <a key={i} href={c.link} target="_blank" rel="noreferrer" style={{
                display: 'flex', alignItems: 'center', gap: '14px',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '16px', padding: '1.25rem',
                textDecoration: 'none', transition: 'transform 0.2s, border-color 0.2s'
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.borderColor = c.color + '60'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                }}
              >
                <div style={{
                  width: '44px', height: '44px', borderRadius: '50%',
                  background: c.bg, border: `1px solid ${c.color}40`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '13px', fontWeight: '600', color: c.color, flexShrink: 0
                }}>
                  {c.short}
                </div>
                <div style={{ textAlign: 'left' }}>
                  <p style={{ fontSize: '14px', fontWeight: '600', color: 'white', marginBottom: '2px' }}>{c.label}</p>
                  <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)' }}>{c.value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    )
  }