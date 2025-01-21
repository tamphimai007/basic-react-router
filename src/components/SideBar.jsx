import { NavLink } from "react-router";
import { LayoutDashboard, Wrench } from "lucide-react";

const SideBar = () => {
  return (
    <nav
      className="bg-green-100 w-48 
          h-screen p-4 flex flex-col gap-2"
    >
      <NavLink className="flex gap-2 hover:bg-green-400  hover:scale-105 p-2 rounded-md hover:duration-300" to="/admin">
        <LayoutDashboard />
        Dashboard
      </NavLink>
      <NavLink className="flex gap-2 hover:bg-green-400  hover:scale-105 p-2 rounded-md hover:duration-300" to="/admin/manage">
        <Wrench />
        Manage
      </NavLink>
    </nav>
  );
};
export default SideBar;
