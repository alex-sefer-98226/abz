import { combineReducers } from "redux";
import usersReducer from "./domain/usersReducer";
import usersLoadReducer from "./app/usersLoadReducer";
import menuReducer from "./app/menuReducer";
import modalReducer from "./ui/modalReducer";
import positionsReducer from "./domain/positionsReducer";
import tokenReducer from "./domain/tokenReducer";
import usersDetailsReducer from "./ui/usersDetails";
import formSentReducer from "./app/formReducer";
import responseReducer from "./domain/responseReducer";

export const rootReducer = combineReducers({
  domain: combineReducers({
    users: usersReducer,
    positions: positionsReducer,
    token: tokenReducer,
    response: responseReducer,
  }),
  app: combineReducers({
    usersLoading: usersLoadReducer,
    menu: menuReducer,
    formSent: formSentReducer,
  }),
  ui: combineReducers({
    isUsersOpened: usersDetailsReducer,
    modal: modalReducer,
  }),
});
