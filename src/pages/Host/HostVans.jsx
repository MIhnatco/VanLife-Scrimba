import React from "react";
import { Link } from "react-router-dom";
function HostVans() {
  const [vans, setVans] = React.useState([]);

  React.useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const hostVansElements = vans.map((van) => (
    <Link
      to={`/host/vans/${van.id}`}
      key={van.id}
      className="flex my-4 p-4 bg-white"
    >
      <div key={van.id}>
        <img
          src={van.imageUrl}
          className="w-32 rounded-xl"
          alt={`Image of ${van.name}`}
        />
        <div className="ml-8">
          <h3 className="text-3xl font-bold my-8">{van.name}</h3>
          <p className="text-xl font-medium my-4">${van.price}/day</p>
        </div>
      </div>
    </Link>
  ));

  return (
    <section className="p-4">
      <h1 className="text-4xl font-bold my-6">Your listed vans</h1>
      {vans.length > 0 ? (
        <section>{hostVansElements}</section>
      ) : (
        <h2>Loading...</h2>
      )}
    </section>
  );
}

export default HostVans;
