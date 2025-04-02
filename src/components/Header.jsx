import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="h-28 flex items-center py-2.5 px-8 text-xl">
      <Link
        className="text-black mr-auto uppercase font-black text-2xl letter-wider"
        to="/"
      >
        #VANLIFE
      </Link>
      <nav className="flex gap-4">
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
      </nav>
    </header>
  );
}

export default Header;
