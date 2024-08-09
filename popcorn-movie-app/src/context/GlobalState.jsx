import {createContext, useReducer} from "react";
import AppReducer from "./AppReducer";

//check local storage and get local favourites, if none then add array
const initialState = [];

const GlobalContext = createContext();

function GlobalProvider({children}) {
  const [favourites, dispatch] = useReducer(AppReducer, initialState);
  //add useEffect that will take the current version of the favourites array and save it in local storage parse() to pull it out, stringify() to format
  const addFavourite = (favourite) => {
    dispatch({
      type: "ADD_FAVOURITE",
      payload: favourite,
    });
  };

  const removeFavourite = (favourite) => {
    dispatch({
      type: "REMOVE_FAVOURITE",
      payload: favourite,
    });
  };
  return (
    <GlobalContext.Provider value={{addFavourite, removeFavourite, favourites}}>
      {children}
    </GlobalContext.Provider>
  );
}

export {GlobalContext, GlobalProvider};
