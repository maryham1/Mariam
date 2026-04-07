import NameIntro from "./NameIntro";
import Patterns from "./Patterns";
import SocialHandle from "./SocialHandle";

function Hero() {
  return (
    <section className="flex flex-col items-center gap-5 px-[30px]">
      <Patterns />
      <div className="bg-gray-300 rounded-md p-[4px] animate-rotateZoom ">
        <img src="\Avatar\girl.svg" className="h-10 w-10 " />
      </div>
      <h1 className="font-geist text-4xl text-stone-500/50 font-bold tracking-[-2px] laptop:tracking-[-6px] laptop:text-8xl tablet:tracking-[-6px] tablet:text-6xl">
        Hello there,
      </h1>
      <NameIntro />
      <div className="absolute bottom-0 tablet:top-170 tablet:h-[15px] laptop:bottom-10  h-[10px] text-center w-[300px] laptop:h-[15px] bg-[#6741ed] blur-3xl rounded-full translate-y-1/2"></div>
      <p className="font-geist text-lg w-auto text-center text-stone-200 tablet:text-2xl tablet:w-[700px] laptop:text-xl laptop:w-[700px]">
        I’m a Frontend Developer focused on crafting clean, functional, dynamic
        and responsive web experiences using React, Supabase, Redux and Tailwind
        CSS.
      </p>
    </section>
  );
}

export default Hero;
