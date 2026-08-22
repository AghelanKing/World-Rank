import CountryItem from "./CountryItem";

function CountryList({ SpecificationsArray }) {
  return (
    <ul className="w-full mt-12 divide-stone-500 divide-y border-b border-t border-stone-500">
      {SpecificationsArray.map((Specific) => (
        <CountryItem Specific={Specific} key={Specific.label} />
      ))}
    </ul>
  );
}

export default CountryList;
