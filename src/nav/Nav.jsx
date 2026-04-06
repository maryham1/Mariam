import { useState } from "react";
import NavList from "./NavList";
import ShowMenu from "./ShowMenu";

function Nav() {
  const [open, setIsOpen] = useState(false);
  return (
    <nav className="bg-transparent relative z-50 border border-[1px]  border-gray-500/50 py-[10px] px-[20px] w-[300px] rounded-full tablet:w-[600px] laptop:w-[600px] laptop:py-[15px] laptop:px-[30px] tablet:py-[15px] tablet:px-[30px]">
      <div className="flex justify-between ">
        <NavList open={open} setIsOpen={setIsOpen} />
        <ShowMenu open={open} setIsOpen={setIsOpen} />
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
