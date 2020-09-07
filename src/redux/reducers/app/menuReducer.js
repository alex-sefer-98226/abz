import { MENU_CLOSE, MENU_OPEN } from "../../constants/menu";

const initialState = {
  isOpened: false,
};

export default function menuReducer(state = initialState, action) {
  switch (action.type) {
    case MENU_OPEN:
      return {
        ...state,
        isOpened: true,
      };
    case MENU_CLOSE:
      return {
        ...state,
        isOpened: false,
      };
    default:
      return state;
  }
}
