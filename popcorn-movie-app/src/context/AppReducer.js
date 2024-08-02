function AppReducer(state, action) {
  console.log("app reducer...");

  switch (action.type) {
    case "ADD_FAVOURITE":
      const newFavourites = [...state];
      newFavourites.push(action.payload);
      return newFavourites;
      break;

    default:
      break;
  }
}

export default AppReducer;
