import { getToken } from "../../constants";
import { fetchToken } from "../actions/form";

export const loadToken = () => {
  return (dispatch) => {
    fetch(getToken())
      .then((res) => res.json())
      .then((res) => {
        dispatch(fetchToken(res.token));
      });
  };
};
