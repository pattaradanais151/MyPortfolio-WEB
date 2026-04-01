import React from 'react';

const About: React.FC = () => (
  <section id="about">
    <div className="divider" />
    <div className="container" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
      <div className="section-header animate-up">
        <div className="section-label">02. about</div>
        <h2 className="section-title">
          A bit about<br /><em>who I am</em>
        </h2>
      </div>

      <div className="about-sidebar animate-up delay-1">
        <div className="about-photo-frame">
          <img src="/1234.png" className="about-photo"/>
            </div>
           </div>

          <div className="about-quick-info">
            <div className="info-row">
              <span className="label">location</span>
              <span className="value">ลำพูน, TH</span>
            </div>
            <div className="info-row">
              <span className="label">education</span>
              <span className="value">ปวส.2</span>
            </div>
            <div className="info-row">
              <span className="label">status</span>
              <span className="value" style={{ color: 'var(--accent)' }}>applying</span>
            </div>
            <div className="info-row">
              <span className="label">email</span>
              <span className="value" style={{ fontSize: '11px' }}>pattaradanais.373<br />@gmail.com</span>
            </div>
          </div>
        </div>

        <div className="about-content">
          <p className="about-text animate-up delay-2">
            สวัสดีครับ ผม <strong>Pattaradanai Saiwongkham</strong> — นักศึกษาสาย
            เทคโนโลยีคอมพิวเตอร์ที่มีความสนใจใน software engineering
            และการสร้าง interfaces ที่ใช้งานได้จริงและสวยงาม.
          </p>

          <div className="about-highlight animate-up delay-3">
            <p>"เชื่อว่า code ที่ดีคือ code ที่คนอื่นอ่านแล้วเข้าใจได้ ไม่ใช่แค่ machine."</p>
          </div>

          <p className="about-text animate-up delay-3">
            ตอนนี้กำลังสมัครเรียนต่อระดับ <strong>ปริญญาตรีสาขาวิศวกรรมซอฟต์แวร์</strong> ที่
            มหาวิทยาลัยเทคโนโลยีราชมงคลล้านนา เชียงใหม่ วิทยาเขตดอยสะเก็ด — มุ่งมั่นที่จะ
            พัฒนาทักษะ full-stack development และ system design.
          </p>

          <p className="about-text animate-up delay-4" style={{ fontSize: '13px', color: 'var(--text)' }}>
            📍 172 หมู่ 13 ต.ศรีวิชัย อ.ลี้ จ.ลำพูน 51110
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default About;