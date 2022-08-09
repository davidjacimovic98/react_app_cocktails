import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import About from "./pages/AboutPage/About";
import Error from "./pages/ErrorPage/Error";
import Home from "./pages/HomePage/Home";
import SingleCocktail from "./pages/SingleCocktailPage/SingleCocktail";

import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cocktail/:id" element={<SingleCocktail />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
