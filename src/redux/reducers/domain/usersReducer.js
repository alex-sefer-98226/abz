import { FETCH_USERS, REFRESH_USERS } from "../../constants/fetchUsers";

const initialState = {
  byId: {},
  allIds: [],
  total: 0,
  page: 1,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        byId: { ...state.byId, ...action.payload.byId },
        allIds: [...state.allIds, ...action.payload.allIds],
        total: action.payload.total,
        page: action.payload.page,
      };
    case REFRESH_USERS: {
      return initialState;
    }
    default:
      return state;
  }
}
