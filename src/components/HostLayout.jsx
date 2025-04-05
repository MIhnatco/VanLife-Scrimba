import { NavLink, Outlet } from "react-router-dom";

function HostLayout() {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#92400e",
    textUnderlineOffset: "5px",
  };
  return (
    <>
      <nav className="flex justify-between w-2/5 text-[#4d4d4d] font-semibold py-2 px-6 text-xl">
        <NavLink
          className="hover:text-[#161616] hover:underline hover:underline-offset-6"
          end
          to="."
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Dashboard
        </NavLink>
        <NavLink
          className="hover:text-[#161616] hover:underline hover:underline-offset-6"
          to="income"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Income
        </NavLink>
        <NavLink
          className="hover:text-[#161616] hover:underline hover:underline-offset-6"
          to="vans"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Vans
        </NavLink>
        <NavLink
          className="hover:text-[#161616] hover:underline hover:underline-offset-6"
          to="reviews"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Review
        </NavLink>
      </nav>

      <Outlet />
    </>
  );
}

export default HostLayout;
