const initialState = {
  size: 5
}

export const widthReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "SET_LINE_WIDTH":
      return {
        ...state,
        size: action.payload,
      };
    default:
      return state;
  }
}