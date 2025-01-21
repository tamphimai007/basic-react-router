import { Link } from "react-router";
const MainNav = () => {
  return (
    <nav
      className="flex justify-between
   h-12 bg-slate-200 items-center px-4"
    >
      <div className="flex gap-4">
        <Link to="/">Logo</Link>
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
      </div>
      <div className="flex gap-4">
        <Link to="login">Login</Link>
        <Link to="register">Register</Link>
      </div>
    </nav>
  );
};
export default MainNav;
