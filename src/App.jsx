import { Routes, Route, Link } from "react-router-dom";

import "./App.css";

import Layout from "./components/Layout";

import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans";
import VanDetail from "./pages/VanDetail";

import HostLayout from "./components/HostLayout";

import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Review from "./pages/Host/Review";

import "../server";

function App() {
  return (
    <article className="w-260 mx-auto bg-[#fff7ed]">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />

          <Route path="/host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Review />} />
          </Route>
        </Route>
      </Routes>
    </article>
  );
}

export default App;
