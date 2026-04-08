import { useEffect, useState } from "react";
import NavList from "./NavList";
import ShowMenu from "./ShowMenu";
import { useComponent } from "../features/Context/ScrollContext";

function Nav({ triggerRef }) {
  const [open, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting);
      },
      {
        threshold: 0, // trigger as soon as it leaves
      },
    );

    if (triggerRef.current) {
      observer.observe(triggerRef.current);
    }

    return () => observer.disconnect();
  }, [triggerRef]);

  return (
    <nav
      className={`bg-transparent z-50 border border-[1px]  border-gray-500/50 py-[10px] px-[20px] w-[300px] rounded-full 
      tablet:w-[600px] laptop:w-[600px] laptop:py-[15px] laptop:px-[30px] tablet:py-[15px] tablet:px-[30px]
      ${isSticky ? " fixed top-5 left-1/2 -translate-x-1/2 backdrop-blur-md bg-black/30" : "relative"}
      `}
    >
      <div className={` flex justify-between`}>
        <NavList
          open={open}
          setIsOpen={setIsOpen}
          isSticky={isSticky}
          setIsSticky={setIsSticky}
        />
        <ShowMenu open={open} setIsOpen={setIsOpen} isSticky={isSticky} />
        <button className="block bg-[#6741ed] rounded-2xl px-4 py-3 text-center hover:border-b-6 hover:border-purple-300">
          <a href="mailto:mariamolayiwola89@gmail.com" className="pointer">
            Let's work 💻
          </a>
        </button>
      </div>
    </nav>
  );
}

export default Nav;
