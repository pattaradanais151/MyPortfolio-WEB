import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <h2 className="greeting">Hi, I'm</h2>
        <h1 className="name">Pattaradanai Saiwongkham</h1>
        <h3 className="role">Software Engineering Applicant</h3>
        <p className="summary">
          Second year Higher Vocational Certificate graduate in Computer Hardware from Ban Hong Vocational College (2025). 
          Passionate about Software Engineering, building web apps with React & modern tools. 
          Applying to Bachelor's in Software Engineering at RMUTL Chiang Mai.
        </p>
        <div className="cta-buttons">
          <a href="#projects" className="btn btn-primary">ดูผลงาน</a>
          <a href="/public/resume.pdf" target="_blank" className="btn btn-outline" rel="noreferrer">ดาวน์โหลด Resume</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
