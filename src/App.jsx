import { Routes, Route, Link } from "react-router-dom";

import "./App.css";

import Layout from "./components/Layout";

import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans";
import VanDetail from "./pages/VanDetail";

import Login from "./pages/Login";

import HostLayout from "./components/HostLayout";

import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Review from "./pages/Host/Review";
import HostVans from "./pages/Host/HostVans";
import HostVansDetail from "./pages/Host/HostVansDetail";
import HostVanInfo from "./pages/Host/HostVanInfo";
import HostVanPhotos from "./pages/Host/HostVanPhotos";
import HostVanPricing from "./pages/Host/HostVanPricing";

import NotFound from "./pages/NotFound";

import AuthRequired from "./components/AuthRequired";

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

          <Route path="login" element={<Login />} />

          <Route element={<AuthRequired />}>
            <Route path="/host" element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="vans" element={<HostVans />} />
              <Route path="vans/:id" element={<HostVansDetail />}>
                <Route index element={<HostVanInfo />} />
                <Route path="pricing" element={<HostVanPricing />} />
                <Route path="photos" element={<HostVanPhotos />} />
              </Route>
              <Route path="reviews" element={<Review />} />
            </Route>
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </article>
  );
}

export default App;
