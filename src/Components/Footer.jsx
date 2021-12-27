import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import fblogo from "../image/facebook.png";
import lklogo from "../image/linkedin.png";

import iglogo from "../image/instagram.png";

function Footer() {
  return (
    <div className=" flex justify-center abosute bottom-0 inset-x-1/2 ">
      <a
        href="https://www.facebook.com/phanit.phou.12"
        target="_blank"
        className="btn btn-ghost w-16"
      >
        <img src={fblogo}></img>
      </a>
      <a
        href="https://www.instagram.com/phanit.phou/"
        target="_blank"
        className="btn btn-ghost w-16"
      >
        <img src={iglogo}></img>
      </a>
      <a
        href="https://www.linkedin.com/in/phanit-phou-970b951b8/"
        target="_blank"
        className="btn btn-ghost w-16"
      >
        <img src={lklogo}></img>
      </a>
    </div>
  );
}

export default Footer;
