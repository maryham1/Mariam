import { useComponent } from "../Context/ScrollContext";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useInView } from "../hook/useInView";
import { BiReflectHorizontal } from "react-icons/bi";

function About() {
  const { aboutRef } = useComponent();
  const [ref, isVisible] = useInView({
    threshold: 0.15,
  });
  return (
    <section
      className={`${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"} transition-all duration-700 ease-in-out px-[30px] laptop:px-[70px] tablet:40px scroll-mt-[-20px]`}
      id="about"
    >
      <div ref={aboutRef} className="flex flex-col gap-10 ">
        <div>
          <h1 className="font-geist text-3xl capitalize laptop:text-5xl tablet:text-4xl">
            coding,Break, debug, ship, repeat 😎.
          </h1>
        </div>
        <div
          className={` ${isVisible ? "animate-slide-in-left opacity-100 translate-y-0" : "translate-y-20 opacity-0"} transition-all duration-700 ease-in-out flex flex-col justify-normal gap-10 tablet:flex-row tablet:justify-between tablet:items-center tablet:gap-0 laptop:flex-row laptop:justify-between laptop:items-center laptop:gap-0`}
          ref={ref}
        >
          <div
            className="bg-stone-900/50 rounded-4xl w-auto h-auto shadow-xl p-7 font-geist text-lg text-stone-400 space-y-5 laptop:space-y-10 tablet:w-[400px] tablet:text-xl laptop:w-[700px] laptop:text-2xl"
            ref={ref}
          >
            <p className="">
              I build modern, responsive web applications using React, React
              Router, Redux, Tailwind CSS, and Supabase—focusing on performance,
              usability, and clean design. My goal is not just to make things
              work, but to make them feel smooth and intuitive.
            </p>
            <p>
              I’ve worked on a variety of projects, from interactive quiz apps
              and dictionary tools to full UI experiences like a space tourism
              website and a task management platform. I’ve also built functional
              applications like a dessert ordering app and a car wash service
              site, combining practical features with user-friendly interfaces.
            </p>
            <p>
              {" "}
              I enjoy adding subtle animations and thoughtful UI details to make
              applications more engaging without sacrificing performance. Every
              project is an opportunity to improve how users interact with the
              web—making things faster, clearer, and less boring. When I’m not
              coding, I’m usually playing console games—either trying to beat a
              tough boss or just enjoying the experience.
            </p>
          </div>
          <div>
            {/* <img
            src="\dev\mariam.jpeg"
            className="rounded-4xl w-[400px] h-[500px] laptop:w-[400px] laptop:h-[700px] tablet:w-[300px] tablet:h-[400px]"
          /> */}
            <div ref={ref}>
              <LazyLoadImage
                src="\dev\mariam.jpeg"
                className={`${isVisible ? "animate-scale opacity-100 translate-y-0" : " translate-y-20 opacity-0"} transition-all duration-700 ease-in-out rounded-4xl w-[400px] h-[500px] laptop:w-[400px] laptop:h-[700px] tablet:w-[300px] tablet:h-[400px]`}
                effect="blur"
                alt="project"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
