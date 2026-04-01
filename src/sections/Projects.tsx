import React from 'react';

const projects = [
  {
    num: '01',
    title: 'E-Commerce Dashboard',
    badge: 'live' as const,
    desc: 'แดชบอร์ดจัดการร้านค้าครบระบบ — user management, inventory, order tracking, sales analytics',
    stack: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Tailwind'],
    url: 'https://github.com/pattawut/ecommerce-dashboard',
  },
  {
    num: '02',
    title: 'Task Management App',
    badge: 'live' as const,
    desc: 'แอปจัดการงานทีม realtime — drag & drop, notifications, multi-workspace support',
    stack: ['Next.js', 'Socket.io', 'Prisma', 'PostgreSQL'],
    url: 'https://github.com/pattawut/task-manager',
  },
  {
    num: '03',
    title: 'Weather Forecast App',
    badge: 'wip' as const,
    desc: 'พยากรณ์อากาศ 7 วัน พร้อม interactive map และ detailed hourly breakdown',
    stack: ['React', 'Chart.js', 'Leaflet', 'OpenWeather API'],
    url: 'https://github.com/pattawut/weather-app',
  },
  {
    num: '04',
    title: 'Portfolio Website',
    badge: 'live' as const,
    desc: 'เว็บไซต์ที่คุณกำลังดูอยู่นี้ — dark terminal aesthetic, responsive, CSS-only animations',
    stack: ['React', 'TypeScript', 'Vite', 'CSS'],
    url: 'https://github.com/pattawut/portfolio',
  },
];

const Projects: React.FC = () => (
  <section id="projects">
    <div className="divider" />
    <div className="container" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
      <div className="section-header animate-up">
        <div className="section-label">04. projects</div>
        <h2 className="section-title">
          Things I've<br /><em>built</em>
        </h2>
      </div>

      <div className="projects-list animate-up delay-2">
        {projects.map((p, i) => (
          <a
            key={i}
            className="project-item"
            href={p.url}
            target="_blank"
            rel="noreferrer noopener"
          >
            <span className="project-num">{p.num}</span>
            <div className="project-main">
              <div className="project-title-row">
                <span className="project-name">{p.title}</span>
                <span className={`project-badge badge-${p.badge}`}>
                  {p.badge === 'live' ? '● live' : '○ wip'}
                </span>
              </div>
              <p className="project-desc">{p.desc}</p>
              <div className="project-stack">
                {p.stack.map((s, j) => (
                  <span key={j} className="stack-tag">{s}</span>
                ))}
              </div>
            </div>
            <span className="project-arrow">↗</span>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;