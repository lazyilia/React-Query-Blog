import { NavLink } from "react-router-dom";
import Logo from "../images/image.png";

function Navbar() {
  const baseClass = "px-4 py-2 rounded-md transition-colors duration-200";
  const activeClass = "bg-gray-700 text-white";
  const inactiveClass = "text-gray-300 hover:bg-gray-800 hover:text-white";

  return (
    <nav className="bg-zinc-900 p-4 flex items-center ">
      <div className="flex items-center">
        <img src={Logo} alt="Logo" className="h-10 w-10 object-contain mr-4" />
      </div>
      <div className="flex gap-4">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `${baseClass} ${isActive ? activeClass : inactiveClass}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/posts"
          className={({ isActive }) =>
            `${baseClass} ${isActive ? activeClass : inactiveClass}`
          }
        >
          Posts
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${baseClass} ${isActive ? activeClass : inactiveClass}`
          }
        >
          About
        </NavLink>
      </div>
      <div></div>
    </nav>
  );
}

export default Navbar;
