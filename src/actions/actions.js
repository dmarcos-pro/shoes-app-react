import { ADD } from "../actionTypes/actionTypes";

const add = (id, title, content) => {
  return {
    type: ADD,
    payload: {id, title, content}
  }
}

export { add };