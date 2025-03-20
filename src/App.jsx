import { Routes, Route, Link } from "react-router-dom";

import "./App.css";

import Header from "./components/Header";

import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans";

function App() {
  return (
    <article className="w-260 mx-auto bg-[#fff7ed]">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
      </Routes>
    </article>
  );
}

export default App;
