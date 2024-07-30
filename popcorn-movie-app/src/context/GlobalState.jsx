import {createContext, useReducer} from "react";
import AppReducer from "./AppReducer";

const initialState = {
  favourite: false,
};

const GlobalContext = createContext(initialState);

function GlobalProvider({children}) {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const addFavourite = (favourite) => {
    dispatch({
      type: "ADD_FAVOURITE",
      payload: favourite,
    });
  };

  return <GlobalContext.Provider>{children}</GlobalContext.Provider>;
}

export {GlobalContext, GlobalProvider};
