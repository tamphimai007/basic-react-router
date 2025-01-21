import { Link, NavLink, Outlet } from "react-router";
import MainNav from "../components/MainNav";
import SideBar from "../components/SideBar";

const LayoutAdmin = () => {
  return (
    <div>
      <MainNav />
      <div className="flex">
        <SideBar />
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default LayoutAdmin;
