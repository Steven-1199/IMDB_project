import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import ImdbContext from "../Contexts/ImdbContext";
import { useParams, useNavigate } from "react-router-dom";
import spinner from "../image/hug.gif";
import usericon from "../image/user.png";
import staricon from "../image/star.png";
import nologo from "../image/NoImageFound.png";
import Casts from "../Components/Casts";

function Detial() {
  const {
    overviewDatas,
    getOverview,
    loading,
    getCasts,
    casts,
    loadingCasts,
    clearCasts,
  } = useContext(ImdbContext);
  const navigate = useNavigate();

  const params = useParams();
  useEffect(() => {
    try {
      getOverview(params.id);
    } catch (err) {
      navigate("/");
    }
  }, []);
  const handleclick = (e) => {
    e.preventDefault();
    getCasts(params.id);
  };

  if (!loading && overviewDatas && Object.keys(overviewDatas).length !== 0) {
    const {
      title: {
        image: { url },
        seriesEndYear,
        seriesStartYear,
        title,
        titleType,
        year,
      },
      ratings: { rating, ratingCount },
      genres,
    } = overviewDatas;

    return (
      <div className="text-white top-0 min-h-[80vh] flex justify-center md:flex-row sm:flex-col sm:items-center">
        <div className="card text-center shadow-2xl sm:w-[18rem] md:w-96  h-auto  md:border-t md:border-l md:border-b md:border-[#A098AE] ">
          <figure className="px-10 pt-10">
            <img src={url ? url : nologo} className="rounded-xl w-auto " />
          </figure>
          <div className="card-body">
            <h2 className="card-title sm:text-xl md:text-3xl">
              {title ? title : ""}
            </h2>
            <p className="sm:text-base md:text-lg font-light opacity-90">{}</p>
            <p className="sm:text-base md:text-lg font-light opacity-90 tracking-wide">
              {seriesStartYear
                ? `${seriesStartYear}-${
                    seriesEndYear ? seriesEndYear : "ongoing"
                  }`
                : year}
            </p>
            <p className="break-words sm:text-base md:text-lg font-light opacity-90 tracking-widest">
              {genres ? genres.map((e) => e + "/") : ""}
            </p>

            <div className="justify-center card-actions">
              <Link
                to="/"
                onClick={(e) => {
                  clearCasts();
                }}
                className="btn btn-outline btn-accent"
              >
                GO BACK
              </Link>
            </div>
          </div>
        </div>

        <div className="md:my-10 md:ml-10 sm:mx-0 w-fit  sm:mt-5 md:block sm:flex sm:flex-col sm:items-center">
          <div className="  w-90  shadow stats h-fit ">
            <div className="stat bg-white/10 text-white ">
              <div className="stat-figure text-secondary">
                <img src={staricon} />
              </div>
              <div className="stat-title sm:text-sm">Rating</div>
              <div className="stat-value sm:text-2xl">
                {rating ? rating : "No rating"}
              </div>
            </div>
            <div className="stat bg-white/10 text-white">
              <div className="stat-figure text-secondary ">
                <img src={usericon} className="w-10" />
              </div>
              <div className="stat-title sm:text-sm">Rating Count</div>
              <div className="stat-value sm:text-2xl">
                {ratingCount ? ratingCount : "No Rating"}
              </div>
            </div>
          </div>
          <div className="card shadow-lg max-w-[40rem]">
            <div className="card-body">
              <h2 className="card-title">Summary</h2>
              <p className="opacity-80">
                {overviewDatas.plotSummary
                  ? overviewDatas.plotSummary.text
                  : ""}
              </p>
            </div>
          </div>
          <div className="card shadow-lg  max-w-[40rem]">
            <div className="card-body">
              <h2 className="card-title">Plot Outline</h2>
              <p className="opacity-80">
                {overviewDatas.plotOutline
                  ? overviewDatas.plotOutline.text
                  : ""}
              </p>
            </div>
          </div>
          <div className="card shadow-lg  min-w-[22rem] max-w-[40rem]">
            <div className="card-body">
              <button
                onClick={handleclick}
                disabled={`${casts.length !== 0 ? "disabled" : ""}`}
                className={`card-title btn btn-outline text-white `}
              >
                See Casts
              </button>
              <Casts />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <img className="w-28" src={spinner}></img>
      </div>
    );
  }
}
export default Detial;
