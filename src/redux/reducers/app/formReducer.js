import { FORM_SENT, FORM_COULD_BE_SENT } from "../../constants/sendForm";

const initialState = false;

export default function formSentReducer(state = initialState, action) {
  switch (action.type) {
    case FORM_SENT:
      return true;
    case FORM_COULD_BE_SENT:
      return false;

    default:
      return state;
  }
}
