/* global React */

function StackGrid() {
  const groups = [
    { l: 'Backend', items: ['Java 17', 'Spring Boot 3', 'Kotlin', 'JPA / Hibernate', 'Play', 'gRPC', 'Kafka'] },
    { l: 'Cloud & infra', items: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Jenkins'] },
    { l: 'Data', items: ['PostgreSQL', 'MySQL', 'Redis', 'MongoDB', 'Elasticsearch'] },
    { l: 'Integrations', items: ['Stripe', 'Plaid', 'ACH', 'OpenAI', 'Twilio'] },
  ];
  return (
    <section id="stack" style={{ padding: '64px 32px 96px', maxWidth: 1200, margin: '0 auto', background: '#f7f8fa', borderTop: '1px solid #eef0f3', borderBottom: '1px solid #eef0f3' }}>
      <div style={{ marginBottom: 48 }}>
        <Eyebrow style={{ marginBottom: 16 }}>02 / Stack</Eyebrow>
        <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: 40, fontWeight: 600, letterSpacing: '-0.02em', margin: 0, color: '#11151c' }}>Tools I reach for first</h2>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 32 }}>
        {groups.map(g => (
          <div key={g.l} style={{ background: '#fff', border: '1px solid #dde1e7', borderRadius: 6, padding: 24 }}>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: '#6b7280', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16 }}>{g.l}</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {g.items.map(it => <Tag key={it}>{it}</Tag>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

window.StackGrid = StackGrid;
