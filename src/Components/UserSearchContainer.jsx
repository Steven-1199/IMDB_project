import { useContext, useState } from "react";
import ImdbContext from "../Contexts/ImdbContext";

function UserSearchContainer() {
  const { user, getUser, getMPTV } = useContext(ImdbContext);
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      alert("Please type something");
    } else {
      getUser(text.split(" ").join("%"));

      setText("");
    }
  };
  const searchTV = (e) => {
    e.preventDefault();

    getMPTV("tv-shows");
  };
  const searchMV = (e) => {
    e.preventDefault();

    getMPTV("movies");
  };
  return (
    <>
      <form className="md:form-control md:flex md:flex-row md:justify-evenly md:w-4/5  md:max-w-6xl sm:flex sm:flex-col sm:w-full sm:items-center">
        <div className="relative md:w-5/12 sm:w-4/5 sm:mb-3">
          <input
            onChange={handleChange}
            type="text"
            value={text}
            placeholder="Search"
            className="w-full pr-16  input  input-bordered"
          />
          <button
            onClick={handleSubmit}
            type="submit"
            className="  absolute top-0 right-0 rounded-l-none btn bg-[#E6B91E] "
          >
            go
          </button>
        </div>

        <div className="md:pb-3">
          <div
            onClick={searchTV}
            className="btn bg-zinc-900 font-normal mr-2  sm:text-xs sm:w-fit "
          >
            MOST POPULAR TV SHOWS
          </div>
          <button
            onClick={searchMV}
            className="btn bg-zinc-900 font-normal sm:text-xs sm:w-fit "
          >
            MOST POPULAR MOVIES
          </button>
        </div>
      </form>
    </>
  );
}

export default UserSearchContainer;
