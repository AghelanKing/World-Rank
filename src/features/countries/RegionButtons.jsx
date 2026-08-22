import { useDispatch, useSelector } from "react-redux";
import { changeRegion } from "../../context/countriesSlice";

function RegionButtons({ options }) {
  const dispatch = useDispatch();
  const region = useSelector((state) => state.countries.selectedRegion);

  return (
    <div className="mt-1 md:mt-6">
      <h6 className="mb-1.5 ml-1 font-semibold text-stone-600 tracking-wide capitalize">
        region:
      </h6>

      <div className="w-full flex flex-wrap border border-stone-500 rounded-3xl gap-x-3">
        {options.map((option) => (
          <button
            onClick={() => dispatch(changeRegion(option))}
            key={option}
            className={`mx-2 my-2 p-2 rounded-full hover:bg-[#a8bce7] text-sm md:text-base dark:hover:bg-[#4E80EE] w-[22%] md:w-[28%] ${region === option ? "bg-[#a8bce7] dark:bg-[#4E80EE]" : ""}`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default RegionButtons;
