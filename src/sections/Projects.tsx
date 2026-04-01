import React from 'react';

interface ProjectProps {
  title: string;
  description: string;
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
  image?: string;
}

const projectsData: ProjectProps[] = [
  {
    title: 'E-Commerce Dashboard',
    description: 'แดชบอร์ดจัดการร้านค้าออนไลน์ครบครัน ระบบผู้ใช้, สินค้า, สั่งซื้อ, รายงานยอดขาย',
    techStack: ['React', 'TypeScript', 'Tailwind', 'Node.js', 'MongoDB'],
    liveUrl: 'https://ecommerce-pattawut.vercel.app',
    githubUrl: 'https://github.com/pattawut/ecommerce-dashboard',
  },
  {
    title: 'Task Management App',
    description: 'แอปจัดการงานแบบเรียลไทม์ รองรับทีม รองรับ drag & drop และการแจ้งเตือน',
    techStack: ['Next.js', 'Socket.io', 'Prisma', 'PostgreSQL'],
    liveUrl: 'https://taskmanager-pattawut.vercel.app',
    githubUrl: 'https://github.com/pattawut/task-manager',
  },
  {
    title: 'Weather Forecast App',
    description: 'แอปพยากรณ์อากาศ 7 วัน พร้อมแผนที่และข้อมูลละเอียดจาก OpenWeather API',
    techStack: ['React', 'Chart.js', 'Leaflet Maps'],
    liveUrl: 'https://weather-pattawut.vercel.app',
    githubUrl: 'https://github.com/pattawut/weather-app',
  },
  {
    title: 'Portfolio Website',
    description: 'เว็บไซต์ Portfolio ส่วนตัวที่คุณกำลังดูอยู่ สร้างด้วย React + Vite + TypeScript',
    techStack: ['React', 'TypeScript', 'Vite', 'CSS Modules'],
    liveUrl: 'https://pattawut-portfolio.vercel.app',
    githubUrl: 'https://github.com/pattawut/portfolio',
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div key={index} className="project-card">
              <img 
                src={`/src/assets/project${index + 1}.jpg`} 
                alt={project.title} 
                className="project-image"
                style={{width: '100%', height: '200px', objectFit: 'cover'}}
              />
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} className="tech-badge">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn">Live Demo</a>
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn btn-outline">GitHub</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
