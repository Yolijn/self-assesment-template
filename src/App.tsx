import './App.css';
import skillLevels from './data/skill-levels.json';
import skills from './data/skills.json';
import selfAssessment from './data/self-assessment.json';
import { SkillSubject } from './SkillSubject';
import { Legend } from './Legend';
import { useState } from 'react';

const assessment = selfAssessment.reduce((obj, item) => {
  obj[item.id] = item;
  return obj;
}, {} as { [key: string]: SkillAssessment });

const App = () => {
  const [legendOpen, setLegendState] = useState(false);
  const toggleLegend = () => setLegendState(!legendOpen);
  const closeLegend = () => setLegendState(false);

  return (
    <div className="content content--small-print content--centered print--new-page">
      <header className="app-header">
        <h2>Self assessment</h2>
        <button
          onClick={toggleLegend}
          title="Open Legend"
          className="button button--icon"
        >
          ⓘ
        </button>
      </header>
      {legendOpen && (
        <Legend
          data={skillLevels}
          title="Legend: Levels of proficiency"
          closeLegend={closeLegend}
        />
      )}
      <div className="skills">
        <h2 className="hide-from-view">Skills</h2>
        {skills.map((skill) => (
          <SkillSubject
            subject={skill.subject}
            topics={skill.topics}
            assessment={assessment}
            key={skill.subject}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
