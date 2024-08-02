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

  return (
    <GlobalContext.Provider value={{addFavourite, favourites}}>
      {children}
    </GlobalContext.Provider>
  );
}

export {GlobalContext, GlobalProvider};
