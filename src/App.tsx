import './App.css';
import skillLevels from './data/skill-levels.json';
import skills from './data/skills.json';
import selfAssessment from './data/self-assessment.json';
import { SkillSubject } from './SkillSubject';
import { Legend } from './Legend';

const assessment = selfAssessment.reduce((obj, item) => {
  obj[item.id] = item;
  return obj;
}, {} as { [key: string]: SkillAssessment });

const App = () => {
  return (
    <div className="content content--small-print content--centered print--new-page">
      <h2 id="self-assessment">Self assessment</h2>
      <Legend data={skillLevels} title="Legend: Levels of proficiency" />
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
