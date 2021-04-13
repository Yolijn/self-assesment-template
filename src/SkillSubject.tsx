import { SkillTopic } from './SkillTopic';

interface Props {
  subject: string;
  topics: SkillTopic[];
  assessment: { [key: string]: SkillAssessment };
}

export const SkillSubject = ({ subject, topics, assessment }: Props) => (
  <div className="skills__subject" id={subject}>
    <h3>{subject}</h3>
    {topics.map((topic) => (
      <SkillTopic assessment={assessment} topic={topic} key={topic.topic} />
    ))}
  </div>
);
