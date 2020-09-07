import { MODAL_CLOSE, MODAL_OPEN } from "../../constants/modal";

const initialState = {
  isOpened: false,
};

export default function modalReducer(state = initialState, action) {
  switch (action.type) {
    case MODAL_OPEN:
      return {
        ...state,
        isOpened: true,
      };
    case MODAL_CLOSE:
      return {
        ...state,
        isOpened: false,
      };
    default:
      return state;
  }
}
