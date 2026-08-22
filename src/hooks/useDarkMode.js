import { useEffect } from "react";

export function useDarkMode(isDark) {
  useEffect(
    function () {
      if (isDark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    },
    [isDark],
  );
}

export default useDarkMode;
