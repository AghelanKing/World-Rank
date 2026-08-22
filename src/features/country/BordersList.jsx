import CountryLoader from "../../ui/CountryLoader";
import BordersItem from "./BordersItem";

function BordersList({ borders, isLoadingBorder }) {
  return (
    <ul className="flex mt-2 flex-wrap w-full">
      <h5 className="text-[#383c41] dark:text-[#6C727F] mx-3 font-semibold pt-3">
        Neighbouring Countries
      </h5>
      {isLoadingBorder ? (
        <CountryLoader isLoading={isLoadingBorder} size={40} />
      ) : (
        <>
          {!borders?.length && (
            <p className="text-[#7a8088] font-semibold">No Neighbour!</p>
          )}
          {borders?.map((border) => (
            <BordersItem border={border} key={border.uuid} />
          ))}
        </>
      )}
    </ul>
  );
}

export default BordersList;
