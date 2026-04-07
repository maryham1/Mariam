import LinkButtons from "./LinkButtons";
import TechStack from "./TechStack";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function ProjectList({ pj, index }) {
  const {
    id,
    projectImage,
    projectURL,
    projectName,
    projectCode,
    techStack,
    projectDescription,
  } = pj;
  const codeLink = pj?.projectCode;
  console.log(pj);

  return (
    <div
      className={`${id / 2 === 0 ? "row-span-0 laptop:row-span-3 tablet:row-span-3" : "row-span-0 laptop:row-span-2 tablet:row-span-2"} ${id === 2 ? "mt-0 laptop:mt-[200px] tablet:mt-[100px] " : ""}  p-[30px] bg-stone-900/50 rounded-4xl w-auto h-auto shadow-xl laptop:w-auto`}
    >
      {/* <img src={projectImage} className="rounded-2xl" /> */}
      <LazyLoadImage
        src={projectImage}
        className="rounded-2xl"
        effect="blur"
        alt="project"
      />

      <div className=" flex flex-col gap-5 laptop:gap-10 mt-10">
        <div className="space-y-2">
          <h1 className="text-3xl font-geist capitalize">{projectName}</h1>
          <p className="font-geist text-lg text-stone-400">
            {projectDescription}
          </p>
        </div>
        <ul className="flex gap-5">
          {techStack.map((tools) => (
            <TechStack tools={tools} />
          ))}
        </ul>
        <LinkButtons
          codeLink={codeLink}
          projectURL={projectURL}
          projectCode={projectCode}
        />
      </div>
    </div>
  );
}

export default ProjectList;
