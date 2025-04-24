import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="py-20">
      <h1 className="text-xl md:2xl lg:3xl text-red-500 font-bold text-center">
        Sorry, the page you were looking for was not found!
      </h1>
      <Link
        to="/"
        className="w-2/3 mx-auto bg-[#161616] block my-8 py-4 rounded-md text-center text-white"
      >
        Return to Home
      </Link>
    </div>
  );
}

export default NotFound;
