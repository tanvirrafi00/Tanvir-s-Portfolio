import SectionTitle from "./SectionTitle";
import { skills } from "../assets/data";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <section className="py-20 allign_element" id="skills">
      <SectionTitle text="tech stack" />

      <div className="py-16 grid md: grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill) => {
          return <SkillCard key={skill.id} {...skill    } />;
        })}
      </div>
    </section>
  );
};

export default Skills;
