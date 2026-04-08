import { useComponent } from "../Context/ScrollContext";
import SocialHandle from "../Hero/SocialHandle";
import { useInView } from "../hook/useInView";
import AnimatedEmailText from "./AnimatedEmailText";

function Footer() {
  const { contactRef } = useComponent();
  const [ref, isVisible] = useInView({
    threshold: 0.15,
  });
  return (
    <footer
      ref={contactRef}
      className=" font-geist py-20 px-[30px] laptop:px-[70px] tablet:p-[40px]"
      id="contact"
    >
      <div
        className={`${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"} transition-all duration-700 ease-in-out flex flex-col gap-20`}
        ref={ref}
        style={{
          transitionDelay: "150ms",
        }}
      >
        <div className="flex justify-between">
          <div
            ref={ref}
            className={`${isVisible ? "animate-slide-in-left opacity-100 translate-y-0" : "opacity-0 translate-y-20"} transition-all duration-700 ease-in-out`}
          >
            <h1 className="text-3xl tracking-[-1px] tablet:text-4xl tablet:tracking-[-1px] laptop:tracking-[-6px] laptop:text-7xl">
              Slide in
            </h1>{" "}
            <p className="text-stone-400 text-md laptop:text-3xl tablet:text-2xl">
              Have a project in mind? Let’s build something great together.
            </p>
          </div>
          <div>
            <img
              src="\Avatar\arrow-bottom-left.8b772827.svg"
              className="w-[60px] h-[60px] laptop:w-auto laptop:h-auto hover:-rotate-15 hover:laptop:scale-[1.2] hover:scale-[1] hover:transition-all hover:duration-300 "
            />
          </div>
        </div>
        <div className="flex flex-col justify-normal gap-10 laptop:flex-row laptop:justify-between laptop:gap-0">
          <div>
            <AnimatedEmailText />
          </div>
          <SocialHandle />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
