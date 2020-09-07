import { FETCH_TOKEN } from "../constants/fetchToken";
import { FETCH_POSITIONS } from "../constants/positions";
import { FORM_SENT, RESPONSE_GOT } from "../constants/sendForm";

export const fetchPosition = (payload) => ({ type: FETCH_POSITIONS, payload });
export const fetchToken = (payload) => ({ type: FETCH_TOKEN, payload });
export const formSent = (payload) => ({ type: FORM_SENT, payload });
export const responseGot = (payload) => ({ type: RESPONSE_GOT, payload });
