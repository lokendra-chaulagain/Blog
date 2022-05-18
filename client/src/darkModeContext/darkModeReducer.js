const DarkModeReducer = (state, action) => {
  switch (action.type) {
    case "LIGHT_MODE":
      return {
        darkMode: false,
      };

    case "DARK_MODE":
      return {
        darkMode: true,
      };

    case "TOGGLE":
      return {
        darkMode: !state.darkMode, //by looking initial state it will decide
      };

    default:
      return state;
  }
};

export default DarkModeReducer;
