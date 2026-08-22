import { Outlet } from "react-router";
import HeroBg from "../ui/HeroBg";

function AppLayout() {
  return (
    <main className="w-full h-full bg-[#D2D5DA] dark:bg-[#1B1D1F] relative overflow-hidden">
      <HeroBg />

      <Outlet />
    </main>
  );
}

export default AppLayout;
