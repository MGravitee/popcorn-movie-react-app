import {createContext, useReducer} from "react";
import AppReducer from "./AppReducer";

const initialState = [];

const GlobalContext = createContext();

function GlobalProvider({children}) {
  const [favourites, dispatch] = useReducer(AppReducer, initialState);

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
