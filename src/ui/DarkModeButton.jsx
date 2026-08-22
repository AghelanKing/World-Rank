import { useLocalStorage } from "@uidotdev/usehooks";
import { IoMoon, IoSunny } from "react-icons/io5";
import useDarkMode from "../hooks/useDarkMode";

function DarkModeButton() {
  const [isDark, setIsDark] = useLocalStorage(false, "isDark");

  function handleClick() {
    setIsDark((dark) => !dark);
  }

  useDarkMode(isDark);

  return (
    <button
      onClick={handleClick}
      className="rounded-full bg-[#282B30]/80  mb-45 mt-1.75 text-stone-300 p-2"
    >
      {isDark ? <IoSunny /> : <IoMoon />}
    </button>
  );
}

export default DarkModeButton;
