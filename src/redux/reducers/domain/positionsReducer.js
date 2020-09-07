import { FETCH_POSITIONS } from "../../constants/positions";

const initialState = [];

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_POSITIONS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
