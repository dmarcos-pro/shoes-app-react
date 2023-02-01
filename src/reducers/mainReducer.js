import { ADD } from "../actionTypes/actionTypes";

const initialState = {
  main: []
};


const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        task: [...state.main, action.payload]
      }
    
    default:
      return state;
  }
};

export { mainReducer };