import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="container nav-content">
        <h1 className="logo">Pattaradanai.</h1>
        <ul className="nav-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>© {new Date().getFullYear()} Pattaradanai Saiwongkham. Built with React & TypeScript.</p>
      </div>
    </footer>
  );
};
