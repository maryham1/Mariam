import { FaWhatsapp, FaLinkedin } from "react-icons/fa";

// import { MdEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { useInView } from "../hook/useInView";

function SocialHandle() {
  const [ref, isVisible] = useInView({
    threshold: 0.3,
  });
  const links = [
    {
      icon: (
        <FaXTwitter className="text-stone-400 text-2xl laptop:text-4xl tablet:text-4xl" />
      ),

      url: "https://x.com/Codey_sis",
    },
    {
      icon: (
        <FaWhatsapp className="text-stone-400 text-2xl laptop:text-4xl tablet:text-4xl" />
      ),

      url: "https://wa.me/2349045808495",
    },
    {
      icon: (
        <FaLinkedin className="text-stone-400 text-2xl laptop:text-4xl tablet:text-4xl" />
      ),

      url: "https://www.linkedin.com/in/mariam-olayiwola-4bbb1031b/",
    },
    {
      icon: (
        <FiGithub className="text-stone-400 text-2xl laptop:text-4xl tablet:text-4xl" />
      ),

      url: "https://github.com/maryham1",
    },
  ];

  return (
    <ul
      className={`${isVisible ? "animate-slide-in-left" : "opacity-0"} transition-all duration-700 ease-in-out flex gap-10 items-center`}
      ref={ref}
    >
      {links.map((item, index) => (
        <li>
          <a href={item.url}>{item.icon}</a>
        </li>
      ))}
    </ul>
  );
}

export default SocialHandle;
