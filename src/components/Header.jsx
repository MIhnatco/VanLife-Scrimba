import { Link, NavLink, useNavigate } from "react-router-dom";

import avatarUrl from "../assets/images/avatar-icon.png";

/**
 * Header component for the VanLife application
 * Displays navigation links and handles user logout
 *
 * @returns {JSX.Element} The rendered Header component
 */

function Header() {
  const navigate = useNavigate();

  /**
   * Logs out the user by removing the authentication status from localStorage
   * and redirects the user to the login page.
   */
  function fakeLogOut() {
    localStorage.removeItem("loggedin");
    navigate("/login"); //Redirect to /login
  }

  return (
    <header className="h-28 flex items-center py-2.5 px-8 text-xl">
      <Link
        className="text-black mr-auto uppercase font-black text-2xl letter-wider"
        to="/"
        aria-label="VanLife logo"
      >
        #VANLIFE
      </Link>
      <nav className="flex gap-4" aria-label="Main Navigation">
        <NavLink
          to="/host"
          className={({ isActive }) =>
            isActive
              ? "font-semibold underline underline-offset-4 text-amber-800 py-2 px-4.5"
              : "text-[#4d4d4d] hover:text-[#161616] hover:underline hover:underline-offset-4 font-semibold py-2 px-4.5 "
          }
        >
          Host
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "font-semibold underline underline-offset-4 text-amber-800 py-2 px-4.5"
              : "text-[#4d4d4d] hover:text-[#161616] hover:underline hover:underline-offset-4 font-semibold py-2 px-4.5 "
          }
        >
          About
        </NavLink>
        <NavLink
          to="/vans"
          className={({ isActive }) =>
            isActive
              ? "font-semibold underline underline-offset-4 text-amber-800 py-2 px-4.5"
              : "text-[#4d4d4d] hover:text-[#161616] hover:underline hover:underline-offset-4 font-semibold py-2 px-4.5 "
          }
        >
          Vans
        </NavLink>

        <Link to="login">
          <img src={avatarUrl} />
        </Link>

        <button
          className="font-bold text-2xl mx-4 hover:cursor-pointer"
          onClick={fakeLogOut}
        >
          X
        </button>
      </nav>
    </header>
  );
}

export default Header;
