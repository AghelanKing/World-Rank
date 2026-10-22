import DarkModeButton from "./DarkModeButton";

function HeroBg() {
  return (
    <div className="w-full h-[40%] bg-center bg-[url('/hero-image.jpg')] items-center flex justify-center">
      <div className="flex gap-x-3">
        <img
          src="Logo.svg"
          className="w-55 h-12 px-4 rounded-full bg-[#282B30]/80"
        />
        <DarkModeButton />
      </div>
    </div>
  );
}

export default HeroBg;
