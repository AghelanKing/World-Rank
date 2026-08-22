import { useSearchParams } from "react-router";

function SortBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const sortBy = searchParams.get("sortBy") || "";

  function handleChange(e) {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  }

  return (
    <div>
      <h6 className="mb-1.5 ml-1 font-semibold text-stone-600 dark:text-[#6C727F] tracking-wide">
        Sort by:
      </h6>
      <select
        value={sortBy}
        onChange={handleChange}
        className="bg-[#a8bce7] dark:bg-[#4E80EE] px-3 py-2.5 w-full rounded-2xl text-sm md:text-md"
      >
        {options?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SortBy;
