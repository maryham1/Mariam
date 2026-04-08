import { useComponent } from "../features/Context/ScrollContext";

function NavList({ open, setIsOpen }) {
  const { projectRef } = useComponent();
  const { aboutRef } = useComponent();
  const { contactRef } = useComponent();
  return (
    <ul
      className={`${open ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 "}
       z-50 flex-col flex gap-20 fixed top-0 px-10 py-20 left-0  transition-all duration-800 ease-in-out h-screen  w-full bg-black  items-start  font-geist text-xl 
       laptop:static laptop:translate-y-0 laptop:opacity-100 laptop:w-[400px] laptop:flex laptop:flex-row tablet:flex-row tablet:py-0 tablet:flex laptop:bg-transparent tablet:bg-transparent laptop:py-0 laptop:relative laptop:gap-0 tablet:gap-0 laptop:h-auto laptop:justify-around tablet:justify-around laptop:items-center tablet:items-center laptop:px-0 tablet:px-0
        tablet:w-[400px] tablet:h-auto tablet:static tablet:translate-y-0 tablet:opacity-100`}
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
