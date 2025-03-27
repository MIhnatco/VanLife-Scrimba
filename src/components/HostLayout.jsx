import { Link, Outlet } from "react-router-dom";

function HostLayout() {
  return (
    <>
      <nav className="flex justify-between w-2/5 text-[#4d4d4d] font-semibold py-2 px-6 text-xl">
        <Link
          className="hover:text-[#161616] hover:underline hover:underline-offset-6"
          to="/host"
        >
          Dashboard
        </Link>
        <Link
          className="hover:text-[#161616] hover:underline hover:underline-offset-6"
          to="/host/income"
        >
          Income
        </Link>
        <Link
          className="hover:text-[#161616] hover:underline hover:underline-offset-6"
          to="/host/review"
        >
          Review
        </Link>
      </nav>

      <Outlet />
    </>
  );
}

export default HostLayout;
