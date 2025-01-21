# CC19 React Router

## Step 1 Create Project

```bash
npm create vite .
npm install
npm run dev
```

## Step 2 Install tailwind

https://tailwindcss.com/docs/guides/vite

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Edit tailwind.config.js

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### Add this code to index.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Test

```jsx
<h1 className="text-3xl font-bold underline">Hello world!</h1>
```

### Run Project **Enjoy kub**

```bash
npm run dev
```

## Step 3 Install React-router

https://reactrouter.com/start/library/installation

```bash
npm install react-router
```

### basic router

```plaintext
render a <BrowserRouter> around your application:
```

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./app";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

```jsx
import { Route, Routes } from "react-router";

// rfce
function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Navbar</h1>
      <Routes>
        <Route path="/" element={<h1>Home page</h1>} />
        <Route path="about" element={<h1>About page</h1>} />
        <Route path="contact" element={<h1>Contact page</h1>} />

        <Route path="login" element={<h1>Login page</h1>} />
        <Route path="register" element={<h1>Register page</h1>} />

        <Route path="admin/dashboard" element={<h1>Dashboard</h1>} />
        <Route path="admin/manage" element={<h1>Manage</h1>} />
      </Routes>
    </div>
  );
}
export default App;
```

### Nested Routes && Layout

Routes can be nested inside parent routes.

```jsx
<Route path="admin">
  <Route path="dashboard" element={<h1>Dashboard</h1>} />
  <Route path="manage" element={<h1>Manage</h1>} />
</Route>
```

### Navbar create folder components/MainNav.jsx

```jsx
<nav
  className="flex justify-between
       h-8 bg-green-300 items-center px-4"
>
  <div className="flex gap-4">
    <a href="/">Logo</a>
    <p>Home</p>
    <p>About</p>
  </div>
  <div className="flex gap-4">
    <p>Login</p>
    <p>Register</p>
  </div>
</nav>
```

### Linking

Link to routes from your UI with Link and NavLink

```jsx
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
```

## Step 4 Separate Component

Create routes folder

/routes/AppRoutes.jsx

```jsx
import { Link, Route, Routes } from "react-router";

const AppRoutes = () => {
  return (
    <div>
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
      <Routes>
        <Route path="/" element={<h1>Home page</h1>} />
        <Route path="about" element={<h1>About page</h1>} />
        <Route path="contact" element={<h1>Contact page</h1>} />

        <Route path="login" element={<h1>Login page</h1>} />
        <Route path="register" element={<h1>Register page</h1>} />

        {/* Nested Route */}
        <Route path="admin">
          <Route path="dashboard" element={<h1>Dashboard</h1>} />
          <Route path="manage" element={<h1>Manage</h1>} />
        </Route>
      </Routes>
    </div>
  );
};
export default AppRoutes;
```

App.jsx

```jsx
import AppRoutes from "./routes/AppRoutes";

// rfce
function App() {
  return (
    <>
      <AppRoutes />
    </>
  );
}
export default App;
```

Separate MainNav
Create folder components
/components/MainNav.jsx

```jsx
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
```

Update code

```plaintext
routes/AppRoutes.jsx
prop index ทำหน้าที่เป็น default route สำหรับ parent route
```

```jsx
import { Link, Route, Routes } from "react-router";
import MainNav from "../components/MainNav";

const AppRoutes = () => {
  return (
    <div>
      <MainNav />
      <Routes>
        <Route path="/">
          <Route index element={<h1>Home page</h1>} />
          <Route path="about" element={<h1>About page</h1>} />
          <Route path="contact" element={<h1>Contact page</h1>} />

          <Route path="login" element={<h1>Login page</h1>} />
          <Route path="register" element={<h1>Register page</h1>} />
        </Route>

        {/* Nested Route */}
        <Route path="admin">
          <Route index element={<h1>Dashboard</h1>} />
          <Route path="manage" element={<h1>Manage</h1>} />
        </Route>
      </Routes>
    </div>
  );
};
export default AppRoutes;
```

## 404 Notfound

```jsx
<Route path="*" element={<h1>404 Notfound</h1>} />
```

## Step 5 Layout

## Outlet

Child routes are rendered through the <Outlet/> in the parent route.

/layouts/Layout.jsx

```jsx
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
```

layouts/LayoutAdmin.jsx

```jsx
import { Link, NavLink, Outlet } from "react-router";
import MainNav from "../components/MainNav";

const LayoutAdmin = () => {
  return (
    <div>
      <MainNav />
      <div className="flex">
        {/* Sidebar */}
        <nav
          className="bg-green-100 w-48 
        h-screen p-4 flex flex-col gap-2"
        >
          <NavLink to="/admin">Dashboard</NavLink>
          <NavLink to="/admin/manage">Manage</NavLink>
        </nav>
        {/* /Sidebar */}

        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default LayoutAdmin;
```

Separate Sidebar
/components/Sidebar.jsx

```jsx
import { NavLink } from "react-router";

const SideBar = () => {
  return (
    <nav
      className="bg-green-100 w-48 
          h-screen p-4 flex flex-col gap-2"
    >
      <NavLink to="/admin">Dashboard</NavLink>
      <NavLink to="/admin/manage">Manage</NavLink>
    </nav>
  );
};
export default SideBar;
```

update
layouts/LayoutAdmin.jsx

```jsx
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
```

## use Lucide Icon

https://lucide.dev/guide/installation

```bash
npm install lucide-react
```

update
/components/Sidebar.jsx

```jsx
import { NavLink } from "react-router";
import { LayoutDashboard, Wrench } from "lucide-react";

const SideBar = () => {
  return (
    <nav
      className="bg-green-100 w-48 
          h-screen p-4 flex flex-col gap-2"
    >
      <NavLink className="flex gap-2" to="/admin">
        <LayoutDashboard />
        Dashboard
      </NavLink>
      <NavLink className="flex gap-2" to="/admin/manage">
        <Wrench />
        Manage
      </NavLink>
    </nav>
  );
};
export default SideBar;
```
