import { USERS_LOADING, USERS_LOADED } from "../../constants/fetchUsers";

const initialState = {};

export default function usersLoadReducer(state = initialState, action) {
  switch (action.type) {
    case USERS_LOADING:
      return {
        ...state,
        usersLoading: true,
      };
    case USERS_LOADED:
      return {
        ...state,
        usersLoading: false,
      };
    default:
      return state;
  }
}
