import { Link } from "react-router-dom";
import Footer from "../Components/Footer";

function About() {
  return (
    <div className="hero h-screen   ">
      <div className="hero-overlay bg-opacity-60"></div>
      <div className=" text-center hero-content text-neutral-content">
        <div className="max-w-fit ">
          <h1 className="mb-5 sm:text-4xl md:text-5xl font-bold">
            Hello there!
          </h1>
          <p className="mb-5">
            This project is build using React App and uses for searching
            informations about Tv shows and Movies through IMDB API.
          </p>
          <div className="flex sm:flex-col md:flex-row">
            <div className="shadow stats sm:mb-4 md:mb-0 md:mr-10">
              <div className="stat bg-white/75">
                <div className="stat-title text-left">By</div>
                <div className="stat-value text-3xl">Steven Phou</div>
              </div>
            </div>
            <div className="shadow stats ">
              <div className="stat bg-white/75">
                <div className="stat-title text-left pb-2">Contact</div>
                <div className="stat-value text-base  font-normal">
                  phouphanit@yahoo.com
                </div>
                <div className="stat-value text-base  font-normal">
                  (502)-507-9549
                </div>
              </div>
            </div>
          </div>
          <Link
            to="/:IMDB_project"
            className="btn bg-zinc-900 md:mt-10 sm:mt-5"
          >
            BACK HOME
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
