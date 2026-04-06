import { HiBars3, HiMiniXMark } from "react-icons/hi2";
function ShowMenu({ open, setIsOpen }) {
  return (
    <button
      className="block laptop:hidden tablet:hidden z-999"
      onClick={() => setIsOpen(!open)}
    >
      <span>
        {open ? (
          <HiMiniXMark className="text-2xl font-bold" />
        ) : (
          <HiBars3 className="text-2xl font-bold" />
        )}
      </span>
    </button>
  );
}

export default ShowMenu;
