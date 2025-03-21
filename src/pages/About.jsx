import { Link } from "react-router-dom";
import aboutHeroImage from "../assets/images/about-hero.png";

export default function About() {
  return (
    <article className="my-8">
      <img
        src={aboutHeroImage}
        alt="man sitting on a van in the night"
        className="max-w-full"
      />

      <div className="text-[#161616] mb-3.5 px-6">
        <h1 className="font-extrabold my-12 text-4xl">
          Don{`'`}t squeeze in a sedan when you could relax in a van.
        </h1>
        <p className="text-xl my-8">
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch cost extra 😉)
        </p>
        <p className="text-xl my-8">
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
      </div>

      <div className="bg-[#ffcc8d] text-[#161616] pb-8 rounded-md px-8 mx-6">
        <h2 className="pt-9.25 pb-9.25 text-2xl font-extrabold">
          Your destination is waiting. <br /> Your van is ready.
        </h2>
        <Link
          className="bg-[#161616] font-medium py-3 px-5 text-white rounded-xl"
          to="/vans"
        >
          Explore our vans
        </Link>
      </div>
    </article>
  );
}
