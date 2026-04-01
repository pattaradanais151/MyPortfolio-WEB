import React, { useState, useEffect } from 'react';

const navItems = [
  { num: '01', label: 'home',     href: '#hero' },
  { num: '02', label: 'about',    href: '#about' },
  { num: '03', label: 'skills',   href: '#skills' },
  { num: '04', label: 'projects', href: '#projects' },
  { num: '05', label: 'contact',  href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav className="navbar" style={{ borderColor: scrolled ? 'var(--border)' : 'transparent' }}>
        <div className="container nav-content">
          <a href="#hero" className="logo" style={{ textDecoration: 'none' }}>
            <span className="logo-dot" />
            Pattaradanai<em style={{ fontStyle: 'italic', color: 'var(--text)', fontSize: '0.9em' }}>.dev</em>
          </a>
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.num}>
                <a href={item.href} data-num={item.num + '.'}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            className={`hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        {navItems.map((item) => (
          <a
            key={item.num}
            href={item.href}
            onClick={() => setMenuOpen(false)}
          >
            <span>{item.num}.</span>
            {item.label}
          </a>
        ))}
      </div>
    </>
  );
};

export const Footer: React.FC = () => (
  <footer className="footer">
    <div className="container footer-inner">
      <span className="footer-copy">
        © {new Date().getFullYear()} Pattaradanai Saiwongkham
      </span>
      <span className="footer-tech">
        built with <span>React</span> + <span>TypeScript</span> + <span>Vite</span>
      </span>
    </div>
  </footer>
);