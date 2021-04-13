import { Skill } from './Skill';

interface Props {
  topic: SkillTopic;
  assessment: { [key: string]: SkillAssessment };
}

export const SkillTopic = ({ topic, assessment }: Props) => {
  const getLevel = (skill: Skill) => assessment[skill.id]?.level || 0;

  const getTotalTopicLevel = (skills: Skill[]) =>
    skills.reduce((total, skill) => total + getLevel(skill), 0) / skills.length;

  return (
    <div className="skill" key={topic.topic}>
      <details>
        <summary>{topic.topic}</summary>
        <ul>
          {topic.skills.map((skill) => (
            <li key={skill.id}>
              <Skill skill={skill} level={getLevel(skill)} />
            </li>
          ))}
        </ul>
      </details>
      <progress
        className="skill__progress"
        max="5"
        value={getTotalTopicLevel(topic.skills)}
      >
        level {getTotalTopicLevel(topic.skills)}
      </progress>
    </div>
  );
};
