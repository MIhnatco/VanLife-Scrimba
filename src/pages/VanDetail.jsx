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
    <section
      className="px-8"
      aria-labelledby={van ? "van-detail-title" : "loading-indicator"}
    >
      <nav aria-label="Navigation">
        <Link
          to={location.state ? `..?${location.state.search}` : ".."}
          relative="path"
          className="block text-black text-xl mt-8 ml-7 hover:underline hover:underline-offset-2 hover:font-bold"
        >
          <span aria-hidden="true">&larr;</span> {`Back to ${type} vans`}
        </Link>
      </nav>

      {van ? (
        <article className="flex flex-col text-[#161616] mb-8">
          <img
            src={van.imageUrl}
            alt={`Image of ${van.name}`}
            className="rounded-2xl m-12"
            loading="lazy"
          />

          <i
            className={`${
              bgColors[van.type]
            } h-9 py-1.5 px-7 rounded-md transition duration-200 ease-[cubic-bezier(0.4,0.05,0.2,1)] text-[#ffead0] cursor-pointer w-32 text-center selected`}
            role="status"
            aria-label={`Van type: ${van.type}`}
          >
            {van.type}
          </i>
          <h2 id="van-detail-title" className="text-3xl font-extrabold my-4">
            {van.name}
          </h2>

          <p
            className="mb-4"
            aria-label={`Price: ${van.price} dollars per day`}
          >
            <span className="font-bold text-2xl">${van.price}</span>/day
          </p>
          <p className="text-xl">{van.description}</p>
          <button
            className="bg-[#ff8c38] w-2/3 mx-auto my-4 rounded-md py-3 text-white font-xl hover:cursor-pointer"
            aria-label={`Rent this ${van.name} van for ${van.price} dollars per day`}
          >
            Rent this van.
          </button>
        </article>
      ) : (
        <div
          role="status"
          aria-live="polite"
          id="loading-indicator"
          className="text-center py-8"
        >
          <p>Loading...</p>
          <span className="sr-only">
            Please wait while we fetch van details
          </span>
        </div>
      )}
    </section>
  );
}

export default VanDetail;
