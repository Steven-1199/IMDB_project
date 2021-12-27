import { createContext, useReducer } from "react";
import ImdbReducer from "./ImdbReducer";

const ImdbContext = createContext();

export const ImdbProvider = ({ children }) => {
  const initialState = {
    users: [],
    loading: false,
    overviewData: {},
    casts: [],
    loadingCasts: false,
  };
  const [state, dispatch] = useReducer(ImdbReducer, initialState);
  const getUser = async (text) => {
    clearUser();
    setLoading();
    const respone = await fetch(
      `https://imdb8.p.rapidapi.com/title/find?q=${text}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "imdb8.p.rapidapi.com",
          "x-rapidapi-key": `25d6ada833msh84fd862b72ce345p159b89jsnf3cd9d793ab3`,
        },
      }
    );
    const data = await respone.json();

    dispatch({ type: "GET_USERS", payload: data.results });
  };

  const getOverview = async (id) => {
    setLoading();
    const respone = await fetch(
      `https://imdb8.p.rapidapi.com/title/get-overview-details?tconst=${id}&currentCountry=US`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "imdb8.p.rapidapi.com",
          "x-rapidapi-key":
            "25d6ada833msh84fd862b72ce345p159b89jsnf3cd9d793ab3",
        },
      }
    );
    const data = await respone.json();
    dispatch({ type: "GET_OVERVIEW", payload: data });
  };
  const clearUser = () => {
    dispatch({ type: "CLEAR_USERS" });
  };
  const clearCasts = () => {
    dispatch({ type: "CLEAR_CASTS" });
  };
  const setLoading = () => {
    dispatch({ type: "SET_LOADING" });
  };
  const setLoadingCasts = () => {
    dispatch({ type: "SET_LOADINGCASTS" });
  };
  const getMPTV = async (t) => {
    clearUser();
    setLoading();
    const respone = await fetch(
      `https://imdb8.p.rapidapi.com/title/get-most-popular-${t}?homeCountry=US&purchaseCountry=US&currentCountry=US`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "imdb8.p.rapidapi.com",
          "x-rapidapi-key":
            "25d6ada833msh84fd862b72ce345p159b89jsnf3cd9d793ab3",
        },
      }
    );
    let data = await respone.json();
    let arrs = [];

    data = data.slice(0, 14);
    for (let [i, curr] of data.entries()) {
      const respones = await fetch(
        `https://imdb8.p.rapidapi.com/title/get-details?tconst=${
          curr.split("/")[2]
        }`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "imdb8.p.rapidapi.com",
            "x-rapidapi-key":
              "25d6ada833msh84fd862b72ce345p159b89jsnf3cd9d793ab3",
          },
        }
      );
      const datas = await respones.json();

      arrs[i] = datas;
    }

    dispatch({ type: "GET_USERS", payload: arrs });
    //console.log(users);
  };

  const getCasts = async (id) => {
    setLoadingCasts();
    const respones = await fetch(
      `https://imdb8.p.rapidapi.com/title/get-top-cast?tconst=${id}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "imdb8.p.rapidapi.com",
          "x-rapidapi-key":
            "25d6ada833msh84fd862b72ce345p159b89jsnf3cd9d793ab3",
        },
      }
    );
    let datas = await respones.json();
    let arr = [];
    datas = datas.slice(0, 5);

    for (let [i, curr] of datas.entries()) {
      const respone = await fetch(
        `https://imdb8.p.rapidapi.com/actors/get-bio?nconst=${
          curr.split("/")[2]
        }`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "imdb8.p.rapidapi.com",
            "x-rapidapi-key":
              "25d6ada833msh84fd862b72ce345p159b89jsnf3cd9d793ab3",
          },
        }
      );
      const data = await respone.json();
      const { name } = data;
      arr[i] = name;
    }
    //console.log(arr);
    dispatch({ type: "GET_CASTS", payload: arr });
    //console.log(arr);
  };

  return (
    <ImdbContext.Provider
      value={{
        user: state.users,
        loading: state.loading,
        // id: state.id,
        overviewDatas: state.overviewData,
        casts: state.casts,
        loadingCasts: state.loadingCasts,
        getUser,
        clearUser,
        //getId,
        getOverview,
        setLoading,
        getCasts,
        clearCasts,
        getMPTV,
      }}
    >
      {children}
    </ImdbContext.Provider>
  );
};
export default ImdbContext;
