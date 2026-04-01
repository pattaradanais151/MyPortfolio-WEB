import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="about-section">
<div className="container">
        <h2 className="section-title">About Me</h2>
        <div style={{display: 'flex', gap: '4rem', alignItems: 'center', flexDirection: 'column'}}>
          <img 
            src="/src/assets/profile.jpg" 
            alt="Pattawut" 
            style={{width: '250px', height: '250px', borderRadius: '50%', objectFit: 'cover', border: '4px solid #c084fc'}} 
            loading="lazy"
          />
          <div className="about-content">
            <p className="about-text">
              สวัสดีครับ ผม Pattaradanai Saiwongkham จบการศึกษาระดับประกาศนียบัตรวิชาชีพชั้นสูง ปีย์ 2 สาขาเทคโนโลยีคอมพิวเตอร์ 
              เอกคอมพิวเตอร์ วิทยาศาสตร์ จากวิทยาลัยเทคนิคบ้านโฮ่ง จังหวัดลำพูน 2568 (2025)
            </p>
            <p className="about-text">
              กำลังสมัครเรียนต่อปริญญาตรี สาขาวิศวกรรมซอฟต์แวร์ วิทยาลัยเทคโนโลยีราชมงคลล้านนา เชียงใหม่ วิทยาเขตดอยสะเก็ด
            </p>
            <p className="about-text">
              ที่อยู่: 172 หมู่ 13 ต.ศรีวิชัย อ.ลี้ จ.ลำพูน 51110 | pattaradanais.373@gmail.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
