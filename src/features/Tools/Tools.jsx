import Tool from "./Tool";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useInView } from "../hook/useInView";

function Tools() {
  const [ref, isVisible] = useInView({
    threshold: 0.3,
  });
  return (
    <section
      className={` ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"} transition-all duration-700 ease-in-out px-[30px] font-geist flex flex-col item-center gap-10 laptop:px-[70px] tablet:px-[40px]`}
      ref={ref}
    >
      <div>
        <h1 className="text-3xl capitalize tablet:text-4xl laptop:text-6xl">
          my tech stack
        </h1>
      </div>
      <div className="flex flex-col gap-10 justify-normal items-center tablet:flex-row tablet:justify-between laptop:flex-row laptop:justify-between">
        <Tool />
        <div className="">
          {/* <img
            src="\dev\laptop.jpeg "
            className="w-[500px] h-[200px] rounded-4xl animate-float2"
          /> */}
          <div
            className={`${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"} transition-all duration-700 ease-in-out`}
            ref={ref}
          >
            <LazyLoadImage
              src="\dev\laptop.jpeg "
              className="w-[500px] h-[200px] rounded-4xl animate-float2"
              effect="blur"
              alt="project"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tools;
