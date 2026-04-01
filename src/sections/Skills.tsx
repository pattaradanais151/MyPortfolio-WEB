import React from 'react';

type SkillCategory = {
  category: string;
  items: string[];
  level?: number; // Optional proficiency level
};

const skillsData: SkillCategory[] = [
  { 
    category: 'Frontend', 
    items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'HTML5', 'CSS3', 'Vite'] 
  },
  { 
    category: 'Backend', 
    items: ['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'Prisma'] 
  },
  { 
    category: 'Tools & Others', 
    items: ['Git & GitHub', 'Docker', 'Vercel', 'Figma', 'Jest', 'AWS Basics'] 
  },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-grid">
          {skillsData.map((skillGroup, index) => (
            <div key={index} className="skill-category">
              <h3>{skillGroup.category}</h3>
              <ul className="skill-list">
                {skillGroup.items.map((item, idx) => (
                  <li key={idx} className="skill-item">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
