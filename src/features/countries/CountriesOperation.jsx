import SortBy from "./SortBy";
import RegionButtons from "./RegionButtons";

function CountriesOperation() {
  return (
    <div className="w-full md:w-[27%] rounded-2xl h-1/2 mb-2 md:h-full border border-stone-500 p-4">
      <SortBy
        options={[
          { value: "names-common-asc", label: "Sort by name (A-Z)" },
          { value: "names-common-desc", label: "Sort by name (Z-A)" },
          {
            value: "false-population-asc",
            label: "Sort by population (low first)",
          },
          {
            value: "false-population-desc",
            label: "Sort by population (high first)",
          },
          {
            value: "area-kilometers-asc",
            label: "Sort by area (low first)",
          },
          {
            value: "area-kilometers-desc",
            label: "Sort by area (high first)",
          },
        ]}
      />

      <RegionButtons
        options={[
          "Asia",
          "Africa",
          "Europe",
          "Americas",
          "Oceania",
          "Antarctic",
        ]}
      />
    </div>
  );
}

export default CountriesOperation;
