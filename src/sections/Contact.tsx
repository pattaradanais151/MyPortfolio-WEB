import React from 'react';

const socials = [
  { icon: '✉', name: 'email',     handle: 'pattaradanais.373@gmail.com', url: 'mailto:pattaradanais.373@gmail.com' },
  { icon: 'f', name: 'facebook',  handle: 'FaemkunG.19',                 url: 'https://www.facebook.com/FaemkunG.19' },
  { icon: '◎', name: 'instagram', handle: 'fxemkxng_.19',                url: 'https://www.instagram.com/fxemkxng_.19/' },
  { icon: '⊡', name: 'line id',   handle: 'dvc.faem02',                  url: 'https://line.me/R/ti/p/~dvc.faem02' },
];

const Contact: React.FC = () => (
  <section id="contact">
    <div className="divider" />
    <div className="container" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
      <div className="section-header animate-up">
        <div className="section-label">05. contact</div>
      </div>

      <div className="contact-layout">
        <div className="animate-up delay-1">
          <h2 className="contact-text">
            Let's <em>connect</em><br />
            and build something<br />
            together.
          </h2>
          <p className="contact-sub">
            ไม่ว่าจะเป็นเรื่องการสมัครเรียน, โปรเจกต์ร่วม,<br />
            หรือแค่อยากคุย — ทักมาได้เลยครับ.
          </p>
          <a className="contact-email" href="mailto:pattaradanais.373@gmail.com">
            pattaradanais.373@gmail.com
          </a>
        </div>

        <div className="animate-up delay-2">
          <div style={{ marginBottom: '12px', fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--text)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            — find me on
          </div>
          <div className="social-grid">
            {socials.map((s, i) => (
              <a
                key={i}
                className="social-row"
                href={s.url}
                target={s.url.startsWith('mailto') ? undefined : '_blank'}
                rel="noreferrer noopener"
              >
                <div className="social-name">
                  <span className="social-icon" style={{ fontFamily: 'var(--mono)', color: 'var(--accent)' }}>
                    {s.icon}
                  </span>
                  {s.name}
                </div>
                <span className="social-handle">{s.handle}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;