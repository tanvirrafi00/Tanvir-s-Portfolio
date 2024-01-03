import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";
import { projects } from "../assets/data";

const Projects = () => {
  return (
    <section className="py-20 allign_element" id="projects">
      <SectionTitle text="Web Creation" />
      <div className="py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project) => {
          return <ProjectCard key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
