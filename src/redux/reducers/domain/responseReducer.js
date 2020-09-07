import { RESPONSE_GOT } from "../../constants/sendForm";

const initialState = {};

export default function menuReducer(state = initialState, action) {
  switch (action.type) {
    case RESPONSE_GOT:
      return action.payload;
    default:
      return state;
  }
}
