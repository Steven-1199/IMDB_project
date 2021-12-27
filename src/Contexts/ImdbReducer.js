const ImdbReducer = (state, action) => {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case "GET_OVERVIEW":
      return {
        ...state,
        overviewData: action.payload,
        loading: false,
      };
    case "GET_CASTS":
      return {
        ...state,
        casts: action.payload,
        loadingCasts: false,
      };
    /*case "GET_ID":
      return {
        ...state,
        id: action.payload,
      };*/

    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "SET_LOADINGCASTS":
      return {
        ...state,
        loadingCasts: true,
      };
    case "CLEAR_USERS":
      return {
        ...state,
        users: [],
      };
    case "CLEAR_CASTS":
      return {
        ...state,
        casts: [],
      };
    default:
      return state;
  }
};

export default ImdbReducer;
