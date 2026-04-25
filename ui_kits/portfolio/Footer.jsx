/* global React */

function Footer() {
  return (
    <footer style={{
      padding: '32px 32px', maxWidth: 1200, margin: '0 auto',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: '#6b7280', letterSpacing: '0.04em',
      borderTop: '1px solid #eef0f3'
    }}>
      <div>© 2026 Sanjit Shrestha · Built in Bhaktapur, Nepal</div>
      <div style={{ display: 'flex', gap: 18 }}>
        <a href="#" style={{ color: '#6b7280', textDecoration: 'none' }}>GITHUB</a>
        <a href="#" style={{ color: '#6b7280', textDecoration: 'none' }}>LINKEDIN</a>
        <a href="#" style={{ color: '#6b7280', textDecoration: 'none' }}>STACK&nbsp;OVERFLOW</a>
        <a href="#" style={{ color: '#11151c', textDecoration: 'none' }}>↑&nbsp;TOP</a>
      </div>
    </footer>
  );
}

window.Footer = Footer;
