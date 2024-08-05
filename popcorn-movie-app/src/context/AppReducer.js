function AppReducer(state, action) {
  console.log("app reducer...");

  switch (action.type) {
    case "ADD_FAVOURITE":
      const newFavourites = [...state];
      newFavourites.push(action.payload);
      return newFavourites;
      break;
    case "REMOVE_FAVOURITE":
      return state.filter((favourite) => favourite.id !== action.payload.id);

    default:
      return state;
  }
}

export default AppReducer;
