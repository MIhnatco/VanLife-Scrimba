import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="min-h-[450px] text-white py-12 px-8 bg-[url('assets/images/home-hero.png')] bg-no-repeat bg-cover ">
      <h1 className="font-bold text-4xl my-8">
        You got the travel plans, we got the travel vans.
      </h1>
      <p className="text-xl my-16 font-medium">
        Add adventure to your life by joining the #vanlife movement. Rent the
        perfect van to make your perfect road trip.
      </p>

      <Link
        to="/vans"
        className="bg-[#ff8c38] font-bold rounded hover:cursor-pointer transition-transform duration-100 ease-in-out py-[1rem] inline-block text-center w-full text-xl "
      >
        Find your van
      </Link>
    </main>
  );
}
