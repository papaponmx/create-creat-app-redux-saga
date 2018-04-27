import { ADD_CAT } from "../actions";

export default (state = {}, action) => {
  switch (action.type) {
    case ADD_CAT:
      return { ...state };

    default:
      return state;
  }
};
