import React from 'react';

const skillsData = [
  {
    icon: '◈',
    title: 'Frontend',
    tags: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'HTML5', 'CSS3', 'Vite'],
  },
  {
    icon: '◉',
    title: 'Backend',
    tags: ['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'Prisma', 'REST API'],
  },
  {
    icon: '◍',
    title: 'Tools',
    tags: ['Git', 'GitHub', 'Docker', 'Vercel', 'Figma', 'Linux', 'VS Code'],
  },
];

const Skills: React.FC = () => (
  <section id="skills">
    <div className="divider" />
    <div className="container" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
      <div className="section-header animate-up">
        <div className="section-label">03. skills</div>
        <h2 className="section-title">
          Tools &amp; <em>technologies</em>
        </h2>
      </div>

      <div className="skills-layout animate-up delay-2">
        {skillsData.map((group, i) => (
          <div key={i} className="skill-block">
            <div className="skill-block-header">
              <div className="skill-icon" style={{ color: 'var(--accent)', fontFamily: 'var(--mono)' }}>
                {group.icon}
              </div>
              <span className="skill-block-title">{group.title}</span>
            </div>
            <div className="skill-tags">
              {group.tags.map((tag, j) => (
                <span key={j} className="skill-tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;