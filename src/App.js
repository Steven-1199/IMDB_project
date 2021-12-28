import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import { ImdbProvider } from "./Contexts/ImdbContext";
import Detial from "./Pages/Detial";
import About from "./Pages/About";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <ImdbProvider>
      <div className="flex flex-col justify-between bg-[#343A40] min-h-screen relative">
        <Router>
          <NavBar />
          <Routes>
            <Route path="/IMDB_project" element={<Home />} />

            <Route path="/detial/:id" element={<Detial />} />
            <Route path="/IMDB_project/about" element={<About />} />
            <Route path="/detial/undefined" element={<NotFound />} />
          </Routes>

          <Footer />
        </Router>
      </div>
    </ImdbProvider>
  );
}

export default App;
