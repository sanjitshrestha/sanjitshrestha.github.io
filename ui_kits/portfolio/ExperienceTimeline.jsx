/* global React */

function ExperienceTimeline() {
  const roles = [
    { from: 'Sep 2022', to: 'Present', title: 'Software Architect', org: 'SyanSoft Technologies', loc: 'Bhaktapur', body: 'Architecture ownership for Big4 engagements. Lead cross-functional delivery, define engineering standards, drive AI integration roadmap.' },
    { from: 'Jul 2020', to: 'Sep 2022', title: 'Tech Lead / Senior Engineer', org: 'Treeleaf Technologies', loc: 'Lalitpur', body: 'Led the engineering team. Designed microservices handling millions of requests. Established CI/CD and observability practices.' },
    { from: 'Nov 2019', to: 'Jul 2020', title: 'Backend Engineer', org: 'Three Monks Pvt. Ltd.', loc: 'Kathmandu', body: 'Built backend services and APIs serving thousands of daily users. Spring Boot, Postgres, REST.' },
  ];
  return (
    <section id="experience" style={{ padding: '96px 32px', maxWidth: 1200, margin: '0 auto' }}>
      <div style={{ marginBottom: 48 }}>
        <Eyebrow style={{ marginBottom: 16 }}>03 / Experience</Eyebrow>
        <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: 40, fontWeight: 600, letterSpacing: '-0.02em', margin: 0, color: '#11151c' }}>Where I've shipped</h2>
      </div>
      <div>
        {roles.map((r, i) => (
          <div key={i} style={{
            display: 'grid', gridTemplateColumns: '180px 1fr', gap: 48,
            padding: '32px 0', borderTop: '1px solid #eef0f3'
          }}>
            <div>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, color: '#11151c', letterSpacing: '0.04em' }}>{r.from}</div>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: '#9aa1ad', letterSpacing: '0.04em' }}>↓ {r.to}</div>
            </div>
            <div>
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: 22, fontWeight: 600, letterSpacing: '-0.01em', margin: 0, color: '#11151c' }}>{r.title}</h3>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, color: '#4b5563', marginTop: 4 }}>{r.org} <span style={{ color: '#9aa1ad' }}>· {r.loc}</span></div>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, lineHeight: 1.6, color: '#4b5563', marginTop: 12, marginBottom: 0, maxWidth: 640 }}>{r.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

window.ExperienceTimeline = ExperienceTimeline;
