import { HashLoader } from "react-spinners";

function CountryLoader({ isLoading, size }) {
  return (
    <div>
      <HashLoader
        color="#4E80EE"
        loading={isLoading}
        size={size}
        aria-label="Loading Spinner"
        data-testid="loader"
        className="mx-1"
      />
    </div>
  );
}

export default CountryLoader;
