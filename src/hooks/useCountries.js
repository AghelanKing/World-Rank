import { useQuery } from "@tanstack/react-query";
import { getCountries } from "../services/apiCountries";
import { useSelector } from "react-redux";
import { useDebounce } from "@uidotdev/usehooks";

export function useCountries() {
  const query = useSelector((state) => state.countries.query);
  const debouncedQuery = useDebounce(query, 500);

  const region = useSelector((state) => state.countries.selectedRegion);

  const { data, isLoading, error } = useQuery({
    queryKey: ["countries", debouncedQuery, region],
    queryFn: () => getCountries(debouncedQuery, region),
  });

  return { data, isLoading, error };
}
