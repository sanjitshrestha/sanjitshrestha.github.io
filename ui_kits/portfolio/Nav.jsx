/* global React */
const { useState: useNavState } = React;

function Nav() {
  const [active, setActive] = useNavState('work');
  const items = [
    { id: 'work', n: '01', label: 'Work' },
    { id: 'stack', n: '02', label: 'Stack' },
    { id: 'experience', n: '03', label: 'Experience' },
    { id: 'about', n: '04', label: 'About' },
  ];
  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 10,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '14px 32px', background: 'rgba(255,255,255,0.92)',
      backdropFilter: 'blur(12px)', borderBottom: '1px solid #dde1e7'
    }}>
      <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
        <img src="../../assets/logo-mark-light.svg" width="28" height="28" />
        <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 13, fontWeight: 600, color: '#11151c', letterSpacing: '-0.01em' }}>sanjit.dev</span>
      </a>
      <div style={{ display: 'flex', gap: 22, fontFamily: 'JetBrains Mono, monospace', fontSize: 12, letterSpacing: '0.04em' }}>
        {items.map(it => (
          <a key={it.id} href={`#${it.id}`} onClick={() => setActive(it.id)}
            style={{
              color: active === it.id ? '#11151c' : '#4b5563',
              textDecoration: 'none', display: 'inline-flex', gap: 6, alignItems: 'center'
            }}>
            <span style={{ color: '#9aa1ad' }}>{it.n}</span>{it.label}
          </a>
        ))}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: '#4b5563', letterSpacing: '0.06em', display: 'flex', alignItems: 'center', gap: 6 }}>
          <StatusDot tone="go" />OPEN&nbsp;TO&nbsp;WORK
        </div>
        <Button size="sm">Résumé →</Button>
      </div>
    </nav>
  );
}

window.Nav = Nav;
