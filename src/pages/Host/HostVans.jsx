import React from "react";
import { Link } from "react-router-dom";

import Spinner from "../../utils/Spinner";

import { getHostVans } from "../../api";

function HostVans() {
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

  const hostVansElements = vans.map((van) => (
    <Link to={van.id} key={van.id} className="flex my-4 p-4 bg-white">
      <img
        src={van.imageUrl}
        className="w-32 rounded-xl"
        alt={`Image of ${van.name}`}
      />
      <div className="ml-8">
        <h3 className="text-3xl font-bold my-8">{van.name}</h3>
        <p className="text-xl font-medium my-4">${van.price}/day</p>
      </div>
    </Link>
  ));

  return (
    <section className="p-4">
      <h1 className="text-4xl font-bold my-6">Your listed vans</h1>

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
        <section>{hostVansElements}</section>
      )}
    </section>
  );
}

export default HostVans;
