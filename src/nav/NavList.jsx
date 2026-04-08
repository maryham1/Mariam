import { useComponent } from "../features/Context/ScrollContext";

function NavList({ open, setIsOpen, isSticky, setIsSticky }) {
  const { projectRef } = useComponent();
  const { aboutRef } = useComponent();
  const { contactRef } = useComponent();
  return (
    <ul
      className={`
    fixed top-0 left-0 w-screen h-screen z-40
    flex flex-col gap-20 px-10 py-20
    bg-black text-xl font-geist
    transition-all duration-500 ease-in-out
${isSticky ? "ml-[-60px] mt-[-20px]" : ""}
    ${open ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 "}

    laptop:static laptop:flex-row laptop:h-auto laptop:opacity-100 laptop:translate-y-0 laptop:bg-transparent
    tablet:flex-row tablet:h-auto tablet:opacity-100 tablet:translate-y-0 tablet:bg-transparent
  `}
    >
      <li
        onClick={(e) => {
          e.preventDefault();
          projectRef.current.scrollIntoView({ behavior: "smooth" });
          setIsOpen(false);
        }}
      >
        <a href="#projects" className="group relative">
          Projects
          <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
        </a>
      </li>
      <li className="hidden bg-white w-[2px] h-2  text-sm laptop:inline-block tablet:inline-block"></li>
      <li onClick={() => setIsOpen(false)}>
        <a href="/File/Olayiwola Mariam Resume.pdf" className="group relative">
          Resume
          <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
        </a>
      </li>
      <li className="hidden bg-white w-[2px] h-2  text-sm laptop:inline-block tablet:inline-block"></li>
      <li
        onClick={(e) => {
          e.preventDefault();
          aboutRef.current.scrollIntoView({ behavior: "smooth" });
          setIsOpen(false);
        }}
      >
        <a href="#about" className="group relative">
          About
          <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
        </a>
      </li>
      <li className="hidden bg-white w-[2px] h-2  text-sm laptop:inline-block tablet:inline-block"></li>
      <li
        onClick={(e) => {
          e.preventDefault();
          contactRef.current.scrollIntoView({ behavior: "smooth" });
          setIsOpen(false);
        }}
      >
        <a href="#contact" className="group relative">
          Contact
          <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
        </a>
      </li>
      <li className="hidden bg-white w-[2px] h-2  text-sm laptop:inline-block tablet:inline-block"></li>
    </ul>
  );
}

export default NavList;
