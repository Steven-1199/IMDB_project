import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import imdblogo from "../image/imdb.png";
import lklogo from "../image/linkedin.png";

function NavBar() {
  return (
    <div className="flex justify-between navbar bg-zinc-900 w-full  shadow-inner shadow-2xl">
      <div className="w-14">
        <img src={imdblogo}></img>
      </div>
      <div className="w-35 font-bold text-lg text-white">
        <Link to="/:IMDB_project">
          <button className="btn btn-ghost">Home</button>
        </Link>
        <Link to="/about">
          <button className="btn btn-ghost">About</button>{" "}
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
