import { useContext, useEffect } from "react";
import ImdbContext from "../Contexts/ImdbContext";
import { Link } from "react-router-dom";

function UserSearchResultItem({ image, title, id }) {
  return (
    <Link
      to={`/detial/${id}`}
      className="cursor-pointer hover:scale-105 duration-1000 card flex  items-center justify-center bg-white  md:h-52  sm:min-h-max md:mx-5 sm:my-5 sm:shadow-inner sm:shadow-2xl md:w-44"
    >
      <figure className="">
        <img
          src={image}
          className=" z-0 w-44 md:opacity-90 absolute top-0"
        ></img>
      </figure>
      <div className=" z-10 md:bg-zinc-900/75 sm:bg-zinc-900/40 flex flex-row items-center justify-center text-center">
        <h4 className="sm:h-14 sm:py-5 w-44  shadow-inner shadow-2xl rounded  md:py-5 card-title text-white text-base">
          {title}
        </h4>
      </div>
    </Link>
  );
}

export default UserSearchResultItem;
