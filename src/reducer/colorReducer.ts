const initialState = {
  color: '#000'
}

export const colorReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "SET_COLOR":
      return {
        ...state,
        color: action.payload,
      };
    default:
      return state;
  }
}