import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p>ติดต่อเพื่อสมัครเรียน / โปรเจกต์ / ปรึกษาได้เลยครับ</p>
        <div className="contact-links">
          <a href="mailto:pattaradanais.373@gmail.com" className="btn btn-primary contact-btn">Email</a>
          <a href="https://www.facebook.com/FaemkunG.19" target="_blank" className="btn btn-outline contact-btn" rel="noreferrer noopener">Facebook</a>
          <a href="https://www.instagram.com/fxemkxng_.19/" target="_blank" className="btn btn-outline contact-btn" rel="noreferrer noopener">Instagram</a>
          <a href="https://line.me/R/ti/p/~dvc.faem02" target="_blank" className="btn btn-outline contact-btn" rel="noreferrer noopener">Line ID</a>
        </div>
        </div>
        <div style={{marginTop: '3rem', fontSize: '0.9rem', color: '#9ca3af'}}>
          <p>📍 172 หมู่ 13 ต.ศรีวิชัย อ.ลี้ จ.ลำพูน 51110</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
