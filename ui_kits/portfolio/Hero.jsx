/* global React */

function Hero() {
  return (
    <section id="home" style={{ padding: '96px 32px 64px', maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
      {/* dot grid background */}
      <div aria-hidden style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(#dde1e7 1px, transparent 1px)',
        backgroundSize: '24px 24px',
        maskImage: 'radial-gradient(ellipse at 70% 30%, black 0%, transparent 60%)',
        WebkitMaskImage: 'radial-gradient(ellipse at 70% 30%, black 0%, transparent 60%)',
        opacity: 0.5, pointerEvents: 'none'
      }} />
      <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 64, alignItems: 'end' }}>
        <div>
          <Eyebrow style={{ marginBottom: 24 }}>00 / Index · v2026.04</Eyebrow>
          <h1 style={{
            fontFamily: 'Newsreader, serif', fontWeight: 500, fontSize: 88, lineHeight: 1.02,
            letterSpacing: '-0.025em', margin: 0, color: '#11151c'
          }}>
            Software<br/>architect,<br/><span style={{ fontStyle: 'italic', color: '#4b5563' }}>six years in.</span>
          </h1>
          <p style={{
            fontFamily: 'Inter, sans-serif', fontSize: 19, lineHeight: 1.6,
            color: '#4b5563', maxWidth: 560, marginTop: 32
          }}>
            I design backend systems that pay people, move freight, and stay up. Currently leading delivery for Big4 engagements at <span style={{ color: '#11151c', fontWeight: 500 }}>SyanSoft Technologies</span> in Bhaktapur, Nepal.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 32 }}>
            <Button variant="primary">Selected work →</Button>
            <Button variant="secondary">Download résumé</Button>
          </div>
        </div>
        <div>
          <KV rows={[
            { k: 'STATUS', v: <><StatusDot tone="go"/>&nbsp;&nbsp;Active · Open to senior architect roles</> },
            { k: 'BASED', v: 'Bhaktapur, NP · UTC+05:45' },
            { k: 'CURRENT', v: 'SyanSoft Technologies' },
            { k: 'STACK', v: 'Java · Spring · Postgres · AWS' },
            { k: 'CONTACT', v: 'forofficialsanjit@gmail.com' },
          ]} />
        </div>
      </div>
    </section>
  );
}

window.Hero = Hero;
