import React from "react";
import { Link, useSearchParams } from "react-router-dom";
function Vans() {
  const [vans, setVans] = React.useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");

  const bgColors = {
    simple: "bg-[#e17654] hover:bg-[#ff7f50]",
    rugged: "bg-[#115e59] hover:bg-[#0d4d4a]",
    luxury: "bg-[#161616] hover:bg-[#333333]",
  };

  React.useEffect(() => {
    fetch("/api/vans")
      .then((resp) => resp.json())
      .then((data) => setVans(data.vans));
  }, []);

  const displayedVans = typeFilter
    ? vans.filter((van) => van.type === typeFilter)
    : vans;

  const vanElements = displayedVans.map((van) => (
    <div key={van.id} className="text-[#161616] my-8">
      <Link
        to={`/vans/${van.id}`}
        aria-label={`View details for ${van.name}, 
            priced at $${van.price} per day`}
      >
        <img
          src={van.imageUrl}
          className="max-w-full rounded-xl"
          alt={`Image of ${van.name}`}
        />
        <div className="van-info">
          <h3 className="text-3xl font-bold my-8">{van.name}</h3>
          <p className="text-xl font-medium my-4">
            ${van.price}
            <span>/day</span>
          </p>
        </div>
        <i
          className={`h-9 py-1.5 px-7 rounded-md transition duration-200 ease-[cubic-bezier(0.4,0.05,0.2,1)] text-[#ffead0] cursor-pointer ${
            van.type
          } ${bgColors[van.type]} selected`}
        >
          {van.type}
        </i>
      </Link>
    </div>
  ));

  return (
    <article className="px-6 my-5">
      <h1 className="text-4xl font-extrabold my-4">Explore our van options</h1>

      <div>
        <Link
          className={`h-8 py-1.5 px-6 font-medium rounded-md transition-all duration-200 ease-in-out mr-2 ${
            typeFilter === "simple"
              ? "bg-[#E17654] text-[#ffead0]"
              : "bg-[#ffead0] text-[#4d4d4d] hover:bg-[#E17654] hover:text-[#ffead0]"
          }`}
          to="?type=simple"
        >
          Simple
        </Link>
        <Link
          className={`h-8 py-1.5 px-6 font-medium rounded-md transition-all duration-200 ease-in-out mr-2 ${
            typeFilter === "rugged"
              ? "bg-[#115e59] text-[#ffead0]"
              : "bg-[#ffead0] text-[#4d4d4d] hover:bg-[#115e59] hover:text-[#ffead0]"
          }`}
          to="?type=rugged"
        >
          Rugged
        </Link>
        <Link
          className={`h-8 py-1.5 px-6 font-medium rounded-md transition-all duration-200 ease-in-out mr-2 ${
            typeFilter === "luxury"
              ? "bg-[#161616] text-[#ffead0]"
              : "bg-[#ffead0] text-[#4d4d4d] hover:bg-[#161616] hover:text-[#ffead0]"
          }`}
          to="?type=luxury"
        >
          Luxury
        </Link>
        <Link
          className={`h-8 py-1.5 px-6 font-medium rounded-md bg-[#ffead0] text-[#4d4d4d] transition-all duration-200 ease-in-out hover:text-[#ffead0] hover:bg-[#f00] mr-2`}
          to="."
        >
          Clear filter
        </Link>
      </div>

      <section className="grid grid-cols-2 justify-center gap-8 mt-14">
        {vanElements}
      </section>
    </article>
  );
}

export default Vans;
