import CountriesLoader from "../../ui/CountriesLoader";
import Message from "../../ui/message";
import CountriesItem from "./CountriesItem";

function CountriesTable({ countries, isLoading }) {
  return (
    <div className="w-full lg:w-[72.3%] rounded-2xl h-[40%] md:h-full flex flex-col items-center border border-stone-500 py-6 px-4 overflow-auto">
      <div className="w-full flex items-center justify-around border-b border-stone-500 pb-2 md:text-center">
        <div className="w-[20%]">Flag</div>
        <div className="w-[20%]">Name</div>
        <div className="w-[20%]">Population</div>
        <div className="w-[20%] hidden md:block">Area (km²)</div>
        <div className="w-[20%] hidden md:block">Region</div>
      </div>

      <div className="w-full h-full flex justify-center items-center">
        {!countries?.length && !isLoading && <Message>No more item!</Message>}
      </div>

      {isLoading ? (
        <CountriesLoader />
      ) : (
        <ul className="w-full py-3 flex flex-col gap-y-4">
          {countries?.map((country) => (
            <CountriesItem country={country} key={country.uuid} />
          ))}
        </ul>
      )}
    </div>
  );
}

{
  /*  */
}
export default CountriesTable;
