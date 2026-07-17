import { useInView } from "../hook/useInView";
import LinkButtons from "./LinkButtons";
import TechStack from "./TechStack";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function ProjectList({ pj, index }) {
  const {
    id = 0,
    projectImage = "",
    projectURL = "",
    projectName = "",
    projectCode = "",
    techStack = [],
    projectDescription = "",
  } = pj || {};
  const codeLink = projectCode;
  console.log(pj);
  const [ref, isVisible] = useInView({
    threshold: 0.3,
  });

  let animationClass = "";
  let imageAnimation = "";

  if (id % 2 === 0) {
    imageAnimation = isVisible
      ? "animate-bounce-in opacity-100 translate-y-0"
      : "opacity-0  translate-y-20";
  } else if (id % 3 === 0) {
    imageAnimation = isVisible
      ? "animate-fold-in opacity-100 translate-y-0"
      : "opacity-0 translate-y-20";
  } else {
    imageAnimation = isVisible
      ? "animate-scale opacity-100 translate-y-0"
      : "opacity-0  translate-y-20";
  }

  if (id % 2 === 0) {
    animationClass = isVisible
      ? "animate-fold-in opacity-100 translate-y-0"
      : "opacity-0  translate-y-20";
  } else if (id % 3 === 0) {
    animationClass = isVisible
      ? "animate-slide-in-left opacity-100 translate-y-0"
      : "opacity-0 pacity-0 translate-y-20";
  } else {
    animationClass = isVisible
      ? "animate-bounce-in opacity-100 translate-y-0"
      : "opacity-0 pacity-0 translate-y-20";
  }

  return (
    <div
      className={`${id / 2 === 0 ? "row-span-0 laptop:row-span-3 tablet:row-span-3" : "row-span-0 laptop:row-span-2 tablet:row-span-2"} ${id === 2 ? "mt-0 laptop:mt-[200px] tablet:mt-[100px] " : ""}  
      p-[30px] bg-stone-900/50 rounded-4xl w-auto h-auto shadow-xl laptop:w-auto ${animationClass}  transition-all duration-700 ease-out`}
      ref={ref}
    >
      {/* <img src={projectImage} className="rounded-2xl" /> */}
      {projectImage && (
        <div ref={ref} className={`${imageAnimation} `}>
          <LazyLoadImage
            src={projectImage}
            className={`rounded-2xl`}
            effect="blur"
            alt="project"
          />
        </div>
      )}

      <div className=" flex flex-col gap-5 laptop:gap-10 mt-10">
        <div className="space-y-2">
          {projectName && (
            <h1 className="text-3xl font-geist capitalize">{projectName}</h1>
          )}
          {projectDescription && (
            <p className="font-geist text-sm text-stone-400">
              {projectDescription}
            </p>
          )}
        </div>
        <ul className="flex gap-5">
          {techStack?.map((tools) => (
            <TechStack tools={tools} />
          ))}
        </ul>
        {(projectURL || projectCode) && (
          <LinkButtons
            codeLink={codeLink}
            projectURL={projectURL}
            projectCode={projectCode}
          />
        )}
      </div>
    </div>
  );
}

export default ProjectList;
