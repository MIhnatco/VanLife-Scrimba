import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="h-28 flex items-center py-2.5 px-8 text-xl">
      <Link
        className="text-black mr-auto uppercase font-black text-2xl letter-wider"
        to="/"
      >
        #VANLIFE
      </Link>
      <nav>
        <Link
          className="text-[#4d4d4d] font-semibold hover:text-[#161616] hover:underline hover:underline-offset-6"
          to="/about"
        >
          About
        </Link>
      </nav>
    </header>
  );
}

export default Header;
