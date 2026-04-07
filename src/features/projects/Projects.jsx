import { useLoaderData } from "react-router-dom";
import { getProject } from "../../service/projectApi";

import { useComponent } from "../Context/ScrollContext";
import ProjectList from "./ProjectList";
function Projects() {
  const projects = useLoaderData();
  console.log(projects);
  const { projectRef } = useComponent();
  return (
    <section
      ref={projectRef}
      className="px-[30px] laptop:px-[70px] tablet:px-[40px]"
      id="projects"
    >
      <div className="grid grid-cols-1 grid-row-5 gap-x-[30px] gap-y-10   items-center tablet:grid-cols-2 tablet:gap-y-20 tablet:gap-x-10 tablet:items-start laptop:grid-cols-2 laptop:gap-y-50 laptop:gap-x-10">
        <div className="flex flex-col items-center laptop:items-start laptop:items-start">
          <p className=" text-3xl font-geist  capitalize tracking-[-1px] tablet:text-4xl tablet:tracking-[-1px] laptop:text-6xl laptop:tracking-[-3px]">
            project showcase
          </p>
          <p className="text-xl font-geist  text-stone-400 ">
            Thoughtfully crafted for quality.
          </p>
        </div>

        <>
          {projects.map((pj, index) => (
            <ProjectList pj={pj} key={pj.id} />
          ))}
        </>
      </div>
    </section>
  );
}
export async function Loader() {
  const project = await getProject();
  return project;
}

export default Projects;
