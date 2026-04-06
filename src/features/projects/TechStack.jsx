import { SiTailwindcss, SiRedux, SiJavascript, SiHtml5 } from "react-icons/si";
import { FaReact, FaRoute, FaCss3Alt } from "react-icons/fa";

function TechStack({ tools }) {
  const { icon } = tools;
  console.log(icon);
  if (icon === "react")
    return <FaReact className="text-blue-400 text-2xl laptop:text-4xl" />;
  if (icon === "redux")
    return <SiRedux className="text-purple-800 text-2xl laptop:text-4xl" />;
  if (icon === "router")
    return <FaRoute className="text-red-800 text-2xl laptop:text-4xl" />;
  if (icon === "tailwind")
    return <SiTailwindcss className="text-blue-400 text-2xl laptop:text-4xl" />;
  if (icon === "html")
    return <SiHtml5 className="text-red-600 text-2xl laptop:text-4xl" />;
  if (icon === "css")
    return <FaCss3Alt className="text-blue-800 text-2xl laptop:text-4xl" />;
  if (icon === "js")
    return (
      <SiJavascript className="text-yellow-600 text-2xl laptop:text-4xl" />
    );
  return <li className="flex gap-10 flex-row w-[400px] ">{icon}</li>;
}

export default TechStack;
