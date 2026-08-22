import { BiErrorAlt } from "react-icons/bi";

function Message({ children }) {
  return (
    <p className="text-lg font-semibold italic text-red-700 dark:text-red-300 flex gap-x-2 items-center">
      <BiErrorAlt className="text-2xl" />
      {children}
    </p>
  );
}

export default Message;
