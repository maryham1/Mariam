import { useInView } from "../hook/useInView";

const tools = [
  {
    img: "/Tool/nextjs.svg",
    name: "Nextjs",
  },
  {
    img: "/Tool/react.svg",
    name: "React",
  },
  {
    img: "/Tool/redux.svg",
    name: "Redux",
  },
  {
    img: "/Tool/supabase.svg",
    name: "Supabase",
  },
  {
    img: "/Tool/tailwindcss.svg",
    name: "TailwindCss",
  },
  {
    img: "/Tool/styledcomponet.svg",
    name: "Styled Component",
  },
  {
    img: "/Tool/typescript.svg",
    name: "Typescript",
  },
  {
    img: "/Tool/js.svg",
    name: "JavaScript",
  },
];
function Tool() {
  const [ref, isVisible] = useInView({
    threshold: 0.3,
  });
  return (
    <div
      ref={ref}
      className={` bg-stone-900/50 rounded-4xl w-auto h-auto shadow-xl p-10 flex flex-row flex-wrap gap-20 laptop:w-[400px] `}
    >
      {tools.map((tool, index) => (
        <div
          ref={ref}
          className={`transition-all duration-700 ease-out
      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"} flex gap-2 items-center`}
          style={{
            transitionDelay: `${index * 150}ms`,
          }}
        >
          <img
            src={tool.img}
            className="w-[30px] h-[30px] laptop:w-[50px] laptop:h-[50px]"
          />
          <p className="w-[30px] laptop:w-[50px] text-sm laptop:text-[15px]">
            {tool.name}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Tool;
