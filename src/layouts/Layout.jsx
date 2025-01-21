import { Outlet } from "react-router";
import MainNav from "../components/MainNav";

const Layout = () => {
  return (
    <div>
      <MainNav />
      <hr />
      <Outlet />
    </div>
  );
};
export default Layout;
