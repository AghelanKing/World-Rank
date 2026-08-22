import { useQuery } from "@tanstack/react-query";
import { getCountry } from "../services/apiCountries";

export function useCountry(name) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["country", name],
    queryFn: () => getCountry(name),
  });

  console.log(error);

  return { data, isLoading, error };
}
