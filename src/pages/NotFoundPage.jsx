import { BiError } from "react-icons/bi";
import { HiArrowLeft } from "react-icons/hi2";
import { Link } from "react-router";

function NotFoundPage() {
  return (
    <div className="w-[65%] lg:gap-y-0  h-[40%] p-3 bg-[#D2D5DA] flex flex-col items-center dark:bg-[#1B1D1F] dark:text-[#D2D5DA] border border-stone-200 absolute left-1/2 top-[50%] rounded-2xl  -translate-1/2 shadow-lg shadow-[#323131]/60 dark:shadow-[#4c4a4a]/50 overflow-hidden">
      <BiError className="text-yellow-600 text-[55px] mt-15" />
      <h1 className="text-[35px] font-semibold my-5">
        The page you are looking for was not found.
      </h1>
      <Link
        to={-1}
        className="flex items-center bg-[#a8bce7] dark:bg-[#4E80EE] p-2 rounded-full font-medium gap-x-2"
      >
        <HiArrowLeft /> Go back
      </Link>
    </div>
  );
}

export default NotFoundPage;
