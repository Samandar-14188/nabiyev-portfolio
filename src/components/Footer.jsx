export default function Footer() {
    return (
      <footer style={{
        padding: '2rem',
        background: '#050508',
        borderTop: '1px solid rgba(127,119,221,0.15)',
        textAlign: 'center'
      }}>
        <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '14px' }}>
          Samandar Nabiyev &copy; 2026 — Full-stack Developer
        </p>
        <p style={{ color: 'rgba(255,255,255,0.15)', fontSize: '12px', marginTop: '6px' }}>
          React · Node.js · Socket.io · MongoDB
        </p>
      </footer>
    )
  }