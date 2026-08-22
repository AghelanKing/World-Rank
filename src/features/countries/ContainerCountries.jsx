import { useCountries } from "../../hooks/useCountries";
import CountriesOperation from "./CountriesOperation";
import CountriesTable from "./CountriesTable";
import SearchCountries from "./SearchCountries";
import { useSelector } from "react-redux";

import { HashLoader } from "react-spinners";
import { useSortBy } from "../../hooks/useSortBy";

const EMPTY_ARRAY = [];

function ContainerCountries() {
  const { data, isLoading } = useCountries();

  const sortedCountries = useSelector(
    (state) => state.countries.sortedCountries,
  );

  const countries = data?.data?.objects ?? EMPTY_ARRAY;

  useSortBy(countries);

  return (
    <div className="w-[87%] md:gap-y-0  h-[73%] p-3 bg-[#D2D5DA] dark:bg-[#1B1D1F] dark:text-[#D2D5DA] border border-stone-200 absolute left-1/2 top-[60%] rounded-2xl  -translate-1/2 shadow-lg shadow-[#323131]/60 dark:shadow-[#4c4a4a]/50 overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-between rounded-2xl md:border border-stone-500 p-1.5">
        <p className="text-[#1B1D1F] dark:text-[#D2D5DA] font-medium flex mb-5 md:mb-0 text-lg md:text-base">
          Found{" "}
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
            <span className="font-extrabold text-[#4E80EE] mx-1">
              {countries?.length}
            </span>
          )}{" "}
          Countries
        </p>

        <SearchCountries isLoading={isLoading} />
      </div>
      <div className="flex flex-col lg:flex-row items-center md:justify-between py-2.5 h-[90%] w-full">
        <CountriesOperation />
        <CountriesTable countries={sortedCountries} isLoading={isLoading} />
      </div>
    </div>
  );
}

export default ContainerCountries;
