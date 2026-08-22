import { useEffect, useMemo } from "react";
import { useSearchParams } from "react-router";
import { changeCountries } from "../context/countriesSlice";
import { useDispatch } from "react-redux";

export function useSortBy(countries) {
  const [searchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy") || "names-common-asc";
  const dispatch = useDispatch();

  const [specify, field, direction] = sortBy.split("-");

  const modifier = direction === "asc" ? 1 : -1;

  const isSpecify = specify !== "false";

  const sorteCountries = useMemo(() => {
    return [...countries].sort((a, b) => {
      const valueA = isSpecify ? a[specify]?.[field] : a[field];
      const valueB = isSpecify ? b[specify]?.[field] : b[field];

      if (typeof valueA === "string" && typeof valueB === "string") {
        return valueA.localeCompare(valueB) * modifier;
      }

      return (valueA - valueB) * modifier;
    });
  }, [countries, specify, field, modifier, isSpecify]);

  useEffect(
    function () {
      dispatch(changeCountries(sorteCountries));
    },
    [sortBy, dispatch, sorteCountries],
  );
}
