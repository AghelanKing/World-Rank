import { useQuery } from "@tanstack/react-query";
import { getBorders } from "../services/apiCountries";

export function useBorders(code) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["borders", code],
    queryFn: () => getBorders(code),
  });

  return { data, isLoading, error };
}
