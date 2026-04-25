/* global React */
const { useState: useWorkState } = React;

function WorkRow({ idx, year, title, desc, stack, scale, expanded, onToggle }) {
  return (
    <div onClick={onToggle} style={{
      borderTop: '1px solid #eef0f3', cursor: 'pointer',
      padding: '24px 0', transition: 'background 120ms cubic-bezier(.2,.7,.2,1)'
    }}>
      <div style={{ display: 'grid', gridTemplateColumns: '60px 1fr 200px 80px 24px', gap: 24, alignItems: 'baseline' }}>
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: '#9aa1ad', letterSpacing: '0.06em' }}>{idx}</div>
        <div>
          <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: 24, fontWeight: 600, letterSpacing: '-0.01em', margin: 0, color: '#11151c' }}>{title}</h3>
          {expanded && (
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, lineHeight: 1.6, color: '#4b5563', marginTop: 12, marginBottom: 0, maxWidth: 600 }}>{desc}</p>
          )}
        </div>
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, color: '#4b5563' }}>{stack}</div>
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, color: '#11151c', textAlign: 'right' }}>{scale}</div>
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 14, color: '#6b7280', textAlign: 'right' }}>
          {expanded ? '−' : '+'}
        </div>
      </div>
      {expanded && (
        <div style={{ display: 'flex', gap: 8, marginTop: 16, marginLeft: 84 }}>
          <Tag>{year}</Tag>
          <Tag tone="signal"><StatusDot tone="go"/>&nbsp;Active</Tag>
        </div>
      )}
    </div>
  );
}

function WorkList() {
  const [open, setOpen] = useWorkState(0);
  const work = [
    { year: '2024', title: 'Payments platform', desc: 'Architected ACH, Plaid, and Stripe rails for a US-based lender. Designed the ledger model, idempotency keys, and reconciliation jobs. 10K active users, $1M+ monthly transaction volume, 99.94% uptime.', stack: 'Spring · Postgres · Stripe', scale: '$1M+ / mo' },
    { year: '2023', title: 'Logistics & fleet engine', desc: 'Real-time tracking and automated invoicing for a regional carrier. Decomposed a 4-year-old monolith into 14 services around shipments, billing, and notifications. 1M+ events/day across the bus.', stack: 'Kotlin · Kafka · K8s', scale: '1M+ events/day' },
    { year: '2023', title: 'AI analytics platform', desc: 'OpenAI-backed analytics surface that turns raw event streams into plain-English summaries and anomaly alerts. Built the prompt-cache layer and the cost governor.', stack: 'Java · OpenAI · Redis', scale: '40% cost cut' },
    { year: '2022', title: 'API gateway · high-traffic', desc: 'Bespoke gateway in front of 22 backend services. Token-bucket rate limiting, circuit breakers, and OpenTelemetry across the board.', stack: 'Spring Cloud Gateway', scale: '1M+ req/day' },
    { year: '2021', title: 'Microservices migration', desc: 'Led the breakup of a Django monolith into Spring services on AWS. Strangler-fig pattern over 9 months, zero downtime cutover.', stack: 'Spring · AWS ECS', scale: '9-mo migration' },
  ];
  return (
    <section id="work" style={{ padding: '96px 32px', maxWidth: 1200, margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 48 }}>
        <div>
          <Eyebrow style={{ marginBottom: 16 }}>01 / Work</Eyebrow>
          <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: 40, fontWeight: 600, letterSpacing: '-0.02em', margin: 0, color: '#11151c' }}>Selected projects, 2021–2025</h2>
        </div>
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, color: '#6b7280' }}>5 of 15 shown</div>
      </div>
      <div style={{ borderBottom: '1px solid #eef0f3' }}>
        {work.map((w, i) => (
          <WorkRow key={i} idx={String(i + 1).padStart(2, '0')} {...w}
            expanded={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
        ))}
      </div>
    </section>
  );
}

Object.assign(window, { WorkRow, WorkList });
