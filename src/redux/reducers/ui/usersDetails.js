import { USERS_CLOSE, USERS_OPEN } from "../../constants/userDetails";

const initialState = false;

export default function usersDetailsReducer(state = initialState, action) {
  switch (action.type) {
    case USERS_OPEN:
      return true;
    case USERS_CLOSE:
      return false;
    default:
      return state;
  }
}
