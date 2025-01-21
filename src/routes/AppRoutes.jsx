import { Link, Outlet, Route, Routes } from "react-router";
import MainNav from "../components/MainNav";
import Layout from "../layouts/Layout";
import LayoutAdmin from "../layouts/LayoutAdmin";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        {/* Public */}
        <Route path="/" element={<Layout />}>
          <Route index element={<h1>Home page</h1>} />
          <Route path="about" element={<h1>About page</h1>} />
          <Route path="contact" element={<h1>Contact page</h1>} />
          <Route path="login" element={<h1>Login page</h1>} />
          <Route path="register" element={<h1>Register page</h1>} />
        </Route>

        {/* Private */}
        <Route path="admin" element={<LayoutAdmin />}>
          <Route index element={<h1>Dashboard</h1>} />
          <Route path="manage" element={<h1>Manage</h1>} />
        </Route>

        <Route path="*" element={<h1>404 Notfound</h1>} />
      </Routes>
    </div>
  );
};
export default AppRoutes;
