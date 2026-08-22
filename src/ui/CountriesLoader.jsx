const divClassName =
  "w-[33%] md:w-[20%] flex justify-center items-center  rounded-full";

const animateStyle = "bg-stone-600 animate-pulse p-1";

const spanClassName = `${animateStyle} w-32 h-5 rounded-full`;

function CountriesLoader() {
  const fakeLoader = Array.from({ length: 6 }, (_, index) => index);

  return (
    <ul className="w-full py-3 flex flex-col gap-y-6">
      {fakeLoader.map((index) => (
        <li key={index} className="flex">
          <div className={divClassName}>
            <span
              className={`w-20 h-[53.38px] rounded-lg ${animateStyle}`}
            ></span>
          </div>
          <div className={divClassName}>
            <span className={spanClassName}></span>
          </div>
          <div className={divClassName}>
            <span className={spanClassName}></span>
          </div>
          <div className={`${divClassName} hidden md:block`}>
            <span className={spanClassName}></span>
          </div>
          <div className={`${divClassName} hidden md:block`}>
            <span className={spanClassName}></span>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default CountriesLoader;
