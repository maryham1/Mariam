const tools = [
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
    img: "/Tool/js.svg",
    name: "JavaScript",
  },
];
function Tool() {
  return (
    <div className="bg-stone-900/30 rounded-4xl w-auto h-auto shadow-xl p-10 flex flex-row flex-wrap gap-20 laptop:w-[400px]">
      {tools.map((tool) => (
        <div className="flex gap-2 items-center">
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
