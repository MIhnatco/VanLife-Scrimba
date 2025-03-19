import { Routes, Route, Link } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <>
      <header className="h-28 flex items-center py-2.5 px-8">
        <Link to="/">#VANLIFE</Link>
        <nav>
          <Link to="/about">About</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
