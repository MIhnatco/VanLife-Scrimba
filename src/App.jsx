import { Routes, Route, Link } from "react-router-dom";

import "./App.css";

import Header from "./components/Header";

import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <article className="w-260 mx-auto bg-[#fff7ed]">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </article>
  );
}

export default App;
