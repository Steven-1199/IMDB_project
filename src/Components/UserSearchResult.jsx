import ImdbContext from "../Contexts/ImdbContext";
import { useContext, useEffect } from "react";
import UserSearchResultItem from "./UserSearchResultItem";
import nologo from "../image/NoImageFound.png";
import { useState } from "react/cjs/react.development";
import spinner from "../image/hug.gif";

function UserSearchResult() {
  const { user, getUser, loading, clearUser } = useContext(ImdbContext);

  let n = 1999;

  if (!loading) {
    return (
      <>
        <div className=" md:w-11/12 md:h-full  md:float-right sm:flex sm:flex-col md:overflow-x-hidden  sm:overflow-auto scroll-smooth md:border-t md:border-l md:border-b md:border-[#A098AE] sm:mt-5 md:mt-0 ">
          {user.length !== 0 ? (
            <div
              onClick={clearUser}
              className="btn text-white  w-fit flex item-center sm:mt-6 sm:fixed  sm:ml-2 md:m-5 "
            >
              CLEAR
            </div>
          ) : (
            ""
          )}
          <div
            className={`${
              user ? "" : "md:w-full"
            } md:flex md:justify-center md:items-center  md:flex-row md:w-11/12 md:flex-wrap  sm:h-[30rem] sm:mx-auto md:my-12 md:ml-10 `}
          >
            {user
              ? user
                  .filter(
                    (en) =>
                      en.titleType === "tvSeries" ||
                      en.titleType === "movie" ||
                      en.titleType === "short"
                  )
                  .map((e) =>
                    e.image ? (
                      <UserSearchResultItem
                        key={e.id}
                        id={e.id.split("/")[2]}
                        image={e.image.url}
                        title={e.title}
                      />
                    ) : (
                      <UserSearchResultItem
                        key={n++}
                        image={nologo}
                        title={e.title}
                      />
                    )
                  )
              : ""}
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <img className="w-16" src={spinner}></img>
      </div>
    );
  }
}

export default UserSearchResult;
