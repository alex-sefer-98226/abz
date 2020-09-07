import { FETCH_TOKEN } from "../../constants/fetchToken";

const initialState = "";

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_TOKEN:
      return action.payload;
    default:
      return state;
  }
}
