import { FiSearch } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { setQuery } from "../../context/countriesSlice";
import { HashLoader } from "react-spinners";

function SearchCountries({ isLoading }) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center div relative">
      <span className="text-2xl text-[#4E80EE] absolute left-2">
        {isLoading ? (
          <HashLoader
            color="#4E80EE"
            loading={isLoading}
            size={20}
            aria-label="Loading Spinner"
            data-testid="loader"
            className="mx-1"
          />
        ) : (
          <FiSearch />
        )}
      </span>
      <input
        type="text"
        id="search"
        placeholder="Search Countries"
        className="bg-[#eaedf1] dark:dark:bg-[#282B30] rounded-2xl pl-10 pr-24 py-3 text-[#1B1D1F] dark:text-[#D2D5DA]"
        onChange={(e) => dispatch(setQuery(e.target.value))}
      />
    </div>
  );
}

export default SearchCountries;
