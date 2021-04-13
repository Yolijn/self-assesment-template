export const Skill = ({ skill, level }: { skill: Skill; level: number }) => {
  return (
    <>
      <span title={skill.summary}>{skill.details}</span>

      <progress className="skill__progress" max="5" value={level}>
        level {level}
      </progress>
    </>
  );
};
