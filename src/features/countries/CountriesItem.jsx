import { Link } from "react-router";

function CountriesItem({ country, isLoading }) {
  const {
    flag: { url_png: flag },
    names: { common: name },
    population,
    area: { kilometers: area },
    region,
  } = country;

  const formatPopulation = new Intl.NumberFormat().format(population);
  const formatArea = new Intl.NumberFormat().format(area);

  return (
    <Link
      to={`/country/${name}`}
      className="w-full flex items-center justify-around h-20 md:text-center hover:bg-[#a8bce7] dark:hover:bg-[#4E80EE] rounded-2xl cursor-pointer"
    >
      <div className="w-[20%] flex justify-start md:justify-center">
        <img
          src={flag || "noFlag.jpg"}
          className="w-20 rounded-lg h-[53.38px]"
        />
      </div>
      <div
        className={`w-[33%] md:w-[20%] ${isLoading ? "bg-stone-600 animate-pulse p-2 rounded-xl" : ""}`}
      >
        <h5 className="font-medium text-left">{name}</h5>
      </div>
      <div className="w-[20%]">
        <h5 className="text-sm md:text-base">{formatPopulation}</h5>
      </div>
      <div className="w-[20%] hidden md:block">
        <h5>{formatArea}</h5>
      </div>
      <div className="w-[20%] hidden md:block">
        <h5>{region}</h5>
      </div>
    </Link>
  );
}

// url_png

export default CountriesItem;
