import { useParams } from "react-router";
import { useCountry } from "../../hooks/useCountry";
import CountryList from "./CountryList";
import { useBorders } from "../../hooks/useBorders";
import BordersList from "./BordersList";
import CountryLoader from "../../ui/CountryLoader";
import Message from "../../ui/Message";

const paragraphStyle =
  "bg-[#a8bce7] dark:bg-[#4E80EE] dark:text-[#dee2eb] p-2 rounded-2xl text-sm md:text-base";

function ContainerCountry() {
  const { name } = useParams();
  const { data: country, isLoading } = useCountry(name);

  const {
    flag: { url_png: flag } = {},
    names: { common: nameCountry } = {},
    population,
    area: { kilometers: area } = {},
    capitals,
    subregion,
    languages,
    currencies,
    continents,
    codes: { alpha_3: code } = {},
  } = country?.data?.objects?.at(0) ?? {};

  const { data: border, isLoading: isLoadingBorder } = useBorders(code);

  console.log(code);

  const borders = border?.data?.objects;

  const capitalName = capitals?.at(0)?.name;

  const language = languages?.at(0)?.name;

  const currency = currencies?.at(0)?.name;

  const continent = continents?.at(0);

  const SpecificationsArray = [
    { label: "Capital", value: capitalName },
    { label: "Language", value: language },
    { label: "Subregion", value: subregion },
    { label: "Currency", value: currency },
    { label: "Continent", value: continent },
  ];

  return (
    <>
      {!isLoading && country?.data?.objects?.at(0) && (
        <img
          src={flag || "noFlag.jpg"}
          alt={`flag of ${nameCountry}`}
          className="w-43 md:w-58 absolute left-1/2 -translate-1/2 top-53 z-50 rounded-2xl"
        />
      )}
      <div
        className={`w-[97%] md:w-[85%] lg:w-[74%] xl:w-[65%] h-[73%] bg-[#D2D5DA] border border-stone-200 absolute flex items-center flex-col ${isLoading || !country?.data?.objects?.at(0) ? "justify-center" : ""} left-1/2 top-[60%] rounded-2xl  -translate-1/2 shadow-lg shadow-[#323131]/60 dark:shadow-[#4c4a4a]/50 text-[#1B1D1F] overflow-auto dark:bg-[#1B1D1F] dark:text-[#D2D5DA]`}
      >
        {isLoading ? (
          <CountryLoader isLoading={isLoading} size={70} />
        ) : country?.data?.objects?.at(0) ? (
          <>
            <h3 className="mt-20 md:mt-23 text-4xl font-bold">{nameCountry}</h3>

            <div className="flex gap-y-4 flex-col md:flex-row gap-x-8 justify-center items-center mt-6 text-xl font-semibold">
              <p className={paragraphStyle}>
                Population |{" "}
                <span>{new Intl.NumberFormat().format(population)}</span>
              </p>
              <p className={paragraphStyle}>
                Area (km²) | <span>{new Intl.NumberFormat().format(area)}</span>
              </p>
            </div>

            <CountryList SpecificationsArray={SpecificationsArray} />

            <BordersList borders={borders} isLoadingBorder={isLoadingBorder} />
          </>
        ) : (
          <Message>No more item!</Message>
        )}
      </div>
    </>
  );
}

export default ContainerCountry;
