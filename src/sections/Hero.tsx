import React from 'react';

const Hero: React.FC = () => (
  <section id="hero" className="hero-section">
    <div className="container">
      <div className="hero-inner">
        <div className="hero-left">
          <div className="hero-tag animate-up delay-1">
            Available for Study / Work
          </div>
          <h1 className="hero-name animate-up delay-2">
            Pattaradanai<br />
            <em>Saiwongkham</em>
          </h1>
          <div className="hero-role animate-up delay-3">
            software engineering applicant<span className="cursor" />
          </div>
          <p className="hero-desc animate-up delay-4">
            จบ ปวส.2 เทคโนโลยีคอมพิวเตอร์จากวิทยาลัยการอาชีพบ้านโฮ่ง — 
            กำลังสมัครปริญญาตรีวิศวกรรมซอฟต์แวร์ RMUTL เชียงใหม่. 
            สนใจ web development, UI systems, และการเขียน clean code.
          </p>
          <div className="hero-actions animate-up delay-5">
            <a href="#projects" className="btn btn-primary">ดูผลงาน →</a>
            <a href="#contact" className="btn btn-ghost">ติดต่อ</a>
          </div>
        </div>

        <div className="hero-right">
          <div className="profile-frame" style={{ animationDelay: '0.4s' }}>
            <div className="profile-placeholder">P</div>
            <div className="profile-badge">
              <strong>2025</strong>
              Ban Hong Vocational
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="hero-scroll">scroll</div>
  </section>
);

export default Hero;