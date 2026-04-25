/* global React */

function StatBlock() {
  const stats = [
    { l: 'Years', v: '06', s: '+', u: 'since 2019' },
    { l: 'Projects', v: '15', s: '+', u: 'production-shipped' },
    { l: 'Team led', v: '30', s: '+', u: 'peak headcount' },
    { l: 'Uptime', v: '99.9', s: '%', u: 'P1 services' },
  ];
  return (
    <section style={{ padding: '0 32px', maxWidth: 1200, margin: '0 auto' }}>
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(4,1fr)',
        border: '1px solid #dde1e7', borderRadius: 6, overflow: 'hidden', background: '#fff'
      }}>
        {stats.map((st, i) => (
          <div key={i} style={{ padding: 28, borderRight: i === stats.length - 1 ? 'none' : '1px solid #eef0f3' }}>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: '#6b7280', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 12 }}>{st.l}</div>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 44, fontWeight: 600, letterSpacing: '-0.01em', fontVariantNumeric: 'tabular-nums', lineHeight: 1, color: '#11151c' }}>
              {st.v}<small style={{ fontSize: 18, color: '#9aa1ad', fontWeight: 500 }}>{st.s}</small>
            </div>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: '#6b7280', marginTop: 10 }}>{st.u}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

window.StatBlock = StatBlock;
