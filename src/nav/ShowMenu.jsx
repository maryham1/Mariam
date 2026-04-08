import { HiBars3, HiMiniXMark } from "react-icons/hi2";
function ShowMenu({ open, setIsOpen }) {
  return (
    <button
      className="block laptop:hidden tablet:hidden z-[100] transition-all duration-300 ease-in-out"
      onClick={() => setIsOpen(!open)}
    >
      <span>
        {open ? (
          <HiMiniXMark className="text-4xl font-bold absolute right-0 top-[-10px] " />
        ) : (
          <HiBars3 className="text-2xl font-bold " />
        )}
      </span>
    </button>
  );
}

export default ShowMenu;
