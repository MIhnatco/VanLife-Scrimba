import React from "react";
import { useParams, Link, Outlet, NavLink } from "react-router-dom";

import { getHostVans } from "../../api";
import Spinner from "../../utils/Spinner";

function HostVansDetail() {
  const [currentVan, setCurrentVan] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const { id } = useParams();

  const bgColors = {
    simple: "bg-[#e17654] hover:bg-[#ff7f50]",
    rugged: "bg-[#115e59] hover:bg-[#0d4d4a]",
    luxury: "bg-[#161616] hover:bg-[#333333]",
  };

  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
    textUnderlineOffset: "4px",
  };

  const passiveStyle = {
    color: "#4D4D4D",
    fontWeight: "bold",
  };

  React.useEffect(() => {
    async function loadVans() {
      setLoading(true);

      try {
        const data = await getHostVans(id);

        setCurrentVan(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    loadVans();
  }, [id]);

  return (
    <section className="px-8">
      <Link
        to=".."
        relative="path"
        className="block text-black text-xl mt-8 ml-7 hover:underline hover:underline-offset-2 hover:font-bold"
      >
        &larr; Back to all vans
      </Link>
      {loading ? (
        <div aria-live="polite" role="status">
          <Spinner />
          <span className="sr-only">
            Please wait while we fetch your listed vans.
          </span>
        </div>
      ) : error ? (
        <h1 className="text-2xl text-red-600" aria-live="assertive">
          There was an error: {error.message}
        </h1>
      ) : (
        currentVan && (
          <article className="bg-white p-4 my-8">
            <div className="flex gap-4 my-8">
              <img
                src={currentVan.imageUrl}
                width={250}
                className="rounded-md"
              />

              <div>
                <p
                  className={`h-9 my-2 py-1.5 px-7 rounded-md transition duration-200 ease-[cubic-bezier(0.4,0.05,0.2,1)] text-[#ffead0] cursor-pointer ${
                    bgColors[currentVan.type]
                  } w-32 text-center selected `}
                >
                  {currentVan.type}
                </p>
                <h2 className="text-2xl font-bold my-2">{currentVan.name}</h2>
                <p className="text-xl">
                  <span className="font-bold">${currentVan.price}</span>/day
                </p>
              </div>
            </div>

            <nav className="max-w-2/3 flex gap-8 text-xl">
              <NavLink
                style={({ isActive }) =>
                  isActive ? activeStyle : passiveStyle
                }
                to="."
                end
              >
                Info
              </NavLink>
              <NavLink
                style={({ isActive }) =>
                  isActive ? activeStyle : passiveStyle
                }
                to="pricing"
              >
                Price
              </NavLink>
              <NavLink
                style={({ isActive }) =>
                  isActive ? activeStyle : passiveStyle
                }
                to="photos"
              >
                Photos
              </NavLink>
            </nav>

            <Outlet context={{ currentVan }} />
          </article>
        )
      )}
    </section>
  );
}

export default HostVansDetail;
