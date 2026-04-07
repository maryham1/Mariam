import { useComponent } from "../Context/ScrollContext";
import SocialHandle from "../Hero/SocialHandle";

function Footer() {
  const { contactRef } = useComponent();
  return (
    <footer
      ref={contactRef}
      className="flex flex-col gap-20 font-geist px-[30px] laptop:px-[70px] tablet:p-[40px]"
      id="contact"
    >
      <div className="flex justify-between">
        <div>
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
          <a
            href="mailto:mariamolayiwola89@gmail.com"
            className="pointer text-xl text-stone-400 laptop:text-5xl tablet:text-4xl "
          >
            mariamolayiwola89@gmail.com
          </a>
        </div>
        <SocialHandle />
      </div>
    </footer>
  );
}

export default Footer;
