import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import Spinner from "../../utils/Spinner";
import { getHostVans } from "../../api";

function Dashboard() {
  const [vans, setVans] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    async function loadVans() {
      setLoading(true);

      try {
        const data = await getHostVans();
        setVans(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    loadVans();
  }, []);

  function renderVanElements(vans) {
    const hostVansEls = vans.map((van) => (
      <div className="flex items-center mb-4 bg-white p-4" key={van.id}>
        <img
          src={van.imageUrl}
          alt={`Photo of ${van.name}`}
          className="w-32 rounded-xl"
        />

        <div className="ml-8 mr-auto">
          <h3 className="text-2xl font-bold my-8">{van.name}</h3>
          <p className="text-2xl font-semibold my-4">${van.price}/day</p>
        </div>

        <Link
          to={`vans/${van.id}`}
          className="mr-8 font-bold hover:cursor-pointer"
        >
          View
        </Link>
      </div>
    ));

    return (
      <div className="p-4">
        <section>{hostVansEls}</section>
      </div>
    );
  }

  return (
    <article className="mt-8">
      <section className="bg-[#ffead0] p-[37px_26px] flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-black my-4 text-[#161616]">Welcome!</h1>
          <p className="text-[#4d4d4d]">
            Income last <span className="underline">30 days</span>
          </p>
          <h2 className="text-3xl my-4 text-[#161616] font-black">$2,260</h2>
        </div>
        <Link to="income" className="mr-8 font-bold hover:cursor-pointer">
          Details
        </Link>
      </section>

      <section className="bg-[#ffddb2] p-[25px_26px] flex items-center">
        <h2 className="text-xl font-bold my-4 text-[#161616]">Review score</h2>

        <FaStar className="ml-4 text-2xl text-[#ff8c38]" />

        <p className="ml-2 text-xl text-[#4d4d4d] mr-auto">
          <span className="font-bold">5.0</span>/5
        </p>

        <Link to="reviews" className="mr-8 font-bold hover:cursor-pointer">
          Details
        </Link>
      </section>

      <section className="p-[38px_26px]">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold my-4 text-[#161616]">
            Your listed vans
          </h2>

          <Link to="vans" className="mr-8 font-bold hover:cursor-pointer">
            View all
          </Link>
        </div>

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
          <>{renderVanElements(vans)}</>
        )}
      </section>
    </article>
  );
}

export default Dashboard;
