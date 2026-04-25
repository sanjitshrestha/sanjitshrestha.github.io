/* global React */

function ContactCard() {
  return (
    <section id="about" style={{ padding: '96px 32px', maxWidth: 1200, margin: '0 auto', background: '#11151c', color: '#fff', borderRadius: 0 }}>
      <div style={{ maxWidth: 1136, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 64, alignItems: 'start' }}>
        <div>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: '#9aa1ad', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16 }}>04 / Contact</div>
          <h2 style={{ fontFamily: 'Newsreader, serif', fontWeight: 500, fontSize: 64, lineHeight: 1.05, letterSpacing: '-0.02em', margin: 0 }}>
            Let's design the<br/><span style={{ fontStyle: 'italic', color: '#9aa1ad' }}>failure mode</span> first.
          </h2>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 18, lineHeight: 1.6, color: '#c4cad3', marginTop: 24, maxWidth: 520 }}>
            If you're building something that needs to stay up — payments, logistics, AI on top of real data — I'd like to hear about it.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 32 }}>
            <Button variant="signal">Schedule a call</Button>
            <Button variant="secondary" style={{ background: 'transparent', color: '#fff', borderColor: '#2f3742' }}>forofficialsanjit@gmail.com</Button>
          </div>
        </div>
        <div style={{ border: '1px solid #2f3742', borderRadius: 6, overflow: 'hidden' }}>
          {[
            ['EMAIL', 'forofficialsanjit@gmail.com'],
            ['PHONE', '+977 980-302-2719'],
            ['LOCATION', 'Bhaktapur, Nepal · UTC+05:45'],
            ['GITHUB', 'github.com/sanjitshrestha'],
            ['LINKEDIN', 'linkedin.com/in/sanjitshrestha'],
            ['UPWORK', 'upwork.com/freelancers/sanjitshrestha'],
          ].map(([k, v], i, arr) => (
            <div key={k} style={{
              display: 'grid', gridTemplateColumns: '110px 1fr',
              fontFamily: 'JetBrains Mono, monospace', fontSize: 13,
              borderBottom: i === arr.length - 1 ? 'none' : '1px solid #2f3742'
            }}>
              <div style={{ padding: '10px 14px', color: '#6b7280', letterSpacing: '0.06em', background: '#0a0d12', borderRight: '1px solid #2f3742' }}>{k}</div>
              <div style={{ padding: '10px 14px', color: '#fff' }}>{v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.ContactCard = ContactCard;
