import React from "react";
import { useParams, Link, useLocation } from "react-router-dom";

function VanDetail() {
  const [van, setVan] = React.useState(null);
  const params = useParams();

  const location = useLocation();

  const bgColors = {
    simple: "bg-[#e17654] hover:bg-[#ff7f50]",
    rugged: "bg-[#115e59] hover:bg-[#0d4d4a]",
    luxury: "bg-[#161616] hover:bg-[#333333]",
  };

  React.useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((resp) => resp.json())
      .then((info) => setVan(info.vans));
  }, [params.id]);

  const type = location.state?.type || "all";

  return (
    <section className="px-8">
      <Link
        to={location.state ? `..?${location.state.search}` : ".."}
        relative="path"
        className="block text-black text-xl mt-8 ml-7 hover:underline hover:underline-offset-2 hover:font-bold"
      >
        &larr; {`Back to ${type} vans`}
      </Link>

      {van ? (
        <div className="flex flex-col text-[#161616] mb-8">
          <img
            src={van.imageUrl}
            alt={`Image of ${van.name}`}
            className="rounded-2xl m-12"
          />

          <i
            className={`${
              bgColors[van.type]
            } h-9 py-1.5 px-7 rounded-md transition duration-200 ease-[cubic-bezier(0.4,0.05,0.2,1)] text-[#ffead0] cursor-pointer w-32 text-center selected`}
          >
            {van.type}
          </i>
          <h2 className="text-3xl font-extrabold my-4">{van.name}</h2>

          <p className="mb-4">
            <span className="font-bold text-2xl">${van.price}</span>/day
          </p>
          <p className="text-xl">{van.description}</p>
          <button className="bg-[#ff8c38] w-2/3 mx-auto my-4 rounded-md py-3 text-white font-xl hover:cursor-pointer">
            Rent this van.
          </button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </section>
  );
}

export default VanDetail;
