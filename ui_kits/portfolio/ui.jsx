/* global React */
const { useState } = React;

const Eyebrow = ({ children, style }) => (
  <div style={{
    fontFamily: 'JetBrains Mono, monospace', fontSize: 11, letterSpacing: '0.12em',
    textTransform: 'uppercase', color: '#6b7280', ...style
  }}>{children}</div>
);

const StatusDot = ({ tone = 'go' }) => {
  const colors = { go: '#00a352', amber: '#d97706', off: '#9aa1ad', stop: '#c1272d' };
  return <span style={{
    width: 6, height: 6, borderRadius: '50%', display: 'inline-block',
    background: colors[tone], boxShadow: tone === 'go' ? '0 0 0 3px rgba(0,163,82,.18)' : 'none'
  }} />;
};

const Tag = ({ children, tone, ...rest }) => {
  const palette = {
    default: { bg: '#fff', fg: '#4b5563', bd: '#dde1e7' },
    solid:   { bg: '#11151c', fg: '#fff', bd: '#11151c' },
    signal:  { bg: '#fff', fg: '#00a352', bd: '#00a352' },
  };
  const p = palette[tone || 'default'];
  return <span {...rest} style={{
    fontFamily: 'JetBrains Mono, monospace', fontSize: 12, fontWeight: 500,
    padding: '5px 10px', border: `1px solid ${p.bd}`, borderRadius: 999,
    color: p.fg, background: p.bg, display: 'inline-flex', alignItems: 'center',
    gap: 6, letterSpacing: '0.04em', whiteSpace: 'nowrap'
  }}>{children}</span>;
};

const Button = ({ variant = 'primary', size = 'md', children, ...rest }) => {
  const base = {
    fontFamily: 'Inter, sans-serif', fontWeight: 500,
    borderRadius: 4, border: '1px solid transparent', cursor: 'pointer',
    display: 'inline-flex', alignItems: 'center', gap: 8, lineHeight: 1,
    transition: 'all 120ms cubic-bezier(.2,.7,.2,1)', textDecoration: 'none'
  };
  const sizes = {
    sm: { padding: '6px 12px', fontSize: 13 },
    md: { padding: '10px 18px', fontSize: 14 },
    lg: { padding: '14px 22px', fontSize: 15 },
  };
  const variants = {
    primary:   { background: '#11151c', color: '#fff' },
    secondary: { background: '#fff', color: '#11151c', borderColor: '#dde1e7' },
    ghost:     { background: 'transparent', color: '#11151c' },
    signal:    { background: '#00a352', color: '#fff' },
  };
  return <button {...rest} style={{ ...base, ...sizes[size], ...variants[variant] }}>{children}</button>;
};

const KV = ({ rows }) => (
  <div style={{ border: '1px solid #dde1e7', borderRadius: 6, overflow: 'hidden' }}>
    {rows.map((r, i) => (
      <div key={i} style={{
        display: 'grid', gridTemplateColumns: '140px 1fr',
        fontFamily: 'JetBrains Mono, monospace', fontSize: 13,
        borderBottom: i === rows.length - 1 ? 'none' : '1px solid #eef0f3'
      }}>
        <div style={{
          padding: '10px 14px', color: '#6b7280', letterSpacing: '0.06em',
          textTransform: 'uppercase', background: '#f7f8fa', borderRight: '1px solid #eef0f3'
        }}>{r.k}</div>
        <div style={{ padding: '10px 14px', color: '#11151c' }}>{r.v}</div>
      </div>
    ))}
  </div>
);

Object.assign(window, { Eyebrow, StatusDot, Tag, Button, KV });
