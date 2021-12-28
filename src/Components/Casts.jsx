import { useContext, useEffect } from "react";
import ImdbContext from "../Contexts/ImdbContext";
import { v4 as uuidv4 } from "uuid";
import spinner from "../image/hug.gif";

function Casts() {
  const { loadingCasts, casts } = useContext(ImdbContext);

  if (!loadingCasts && casts) {
    return (
      <>
        {casts.map((cast) => (
          <span key={uuidv4(cast)} className="opacity-80">
            {cast}
          </span>
        ))}
      </>
    );
  } else {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <img className="w-28" src={spinner}></img>
      </div>
    );
  }
}

export default Casts;
