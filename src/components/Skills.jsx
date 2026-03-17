export default function Skills() {
    const frontend = [
      { name: 'HTML5', color: '#E34C26' },
      { name: 'CSS3', color: '#1572B6' },
      { name: 'Sass', color: '#CC6699' },
      { name: 'Tailwind CSS', color: '#38BDF8' },
      { name: 'JavaScript', color: '#F7DF1E' },
      { name: 'TypeScript', color: '#3178C6' },
      { name: 'React.js', color: '#61DAFB' },
      { name: 'Next.js', color: '#ffffff' },
      { name: 'Redux', color: '#764ABC' },
      { name: 'Redux Toolkit', color: '#764ABC' },
    ]
  
    const backend = [
      { name: 'Node.js', color: '#339933' },
      { name: 'Express.js', color: '#ffffff' },
      { name: 'MongoDB', color: '#47A248' },
      { name: 'Socket.io', color: '#ffffff' },
      { name: 'REST API', color: '#FF6B6B' },
      { name: 'JWT Auth', color: '#FB015B' },
    ]
  
    const tools = [
      { name: 'Git', color: '#F05032' },
      { name: 'GitHub', color: '#ffffff' },
      { name: 'Vercel', color: '#ffffff' },
      { name: 'Railway', color: '#7F77DD' },
      { name: 'Vite', color: '#646CFF' },
    ]
  
    const SkillPill = ({ name, color, learning }) => (
      <div style={{
        display: 'flex', alignItems: 'center', gap: '8px',
        background: 'rgba(255,255,255,0.05)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '50px', padding: '8px 16px',
        transition: 'transform 0.2s, border-color 0.2s',
        cursor: 'default'
      }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'translateY(-3px)'
          e.currentTarget.style.borderColor = color
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'translateY(0)'
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
        }}
      >
        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: color, flexShrink: 0 }} />
        <span style={{ fontSize: '13px', fontWeight: '500', color: '#fff' }}>{name}</span>
        {learning && (
          <span style={{
            fontSize: '10px', color: '#5DCAA5',
            background: 'rgba(29,158,117,0.15)',
            padding: '2px 8px', borderRadius: '50px',
            border: '1px solid rgba(29,158,117,0.3)'
          }}>o'rganilmoqda</span>
        )}
      </div>
    )
  
    const Group = ({ title, items, learning }) => (
      <div style={{ marginBottom: '2.5rem' }}>
        <p style={{
          fontSize: '12px', fontWeight: '600', color: 'rgba(255,255,255,0.4)',
          textTransform: 'uppercase', letterSpacing: '0.1em',
          marginBottom: '16px', paddingBottom: '8px',
          borderBottom: '1px solid rgba(255,255,255,0.08)'
        }}>
          {title}
          {learning && (
            <span style={{
              marginLeft: '8px', fontSize: '10px', color: '#5DCAA5',
              background: 'rgba(29,158,117,0.15)', padding: '2px 8px',
              borderRadius: '50px', border: '1px solid rgba(29,158,117,0.3)'
            }}>loyihalar orqali</span>
          )}
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          {items.map((item, i) => (
            <SkillPill key={i} name={item.name} color={item.color} />
          ))}
        </div>
      </div>
    )
  
    return (
      <section id="skills" style={{
        padding: '6rem 2rem',
        background: '#0a0a0f'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p style={{ fontSize: '14px', color: '#7F77DD', marginBottom: '0.5rem', textAlign: 'center' }}>
            nima bilaman
          </p>
          <h2 style={{
            fontSize: '40px', fontWeight: '700', textAlign: 'center',
            marginBottom: '0.75rem',
            background: 'linear-gradient(135deg, #ffffff, #AFA9EC)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
          }}>
            Texnologiyalar
          </h2>
          <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.5)', marginBottom: '4rem', fontSize: '16px' }}>
            Ishlatadigan asosiy stack va vositalar
          </p>
  
          <Group title="Frontend" items={frontend} />
          <Group title="Backend" items={backend} learning />
          <Group title="Tools & Deploy" items={tools} />
        </div>
      </section>
    )
  }