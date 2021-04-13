interface SkillSubject {
  subject: string;
  topics: SkillTopic[];
}
interface SkillTopic {
  topic: string;
  skills: Skill[];
}
interface Skill {
  id: string;
  summary: string;
  details: string;
}
