import {
  FORM_COULD_BE_SENT,
  FORM_SENT,
  RESPONSE_GOT,
} from "../constants/sendForm";

export const sendForm = (formDataObject, token) => {
  return (dispatch) => {
    dispatch({ type: FORM_SENT });
    fetch("https://frontend-test-assignment-api.abz.agency/api/v1/users", {
      method: "POST",
      body: formDataObject,
      headers: { Token: token },
    })
      .then((res) => res.json())
      .then((res) =>
        dispatch({
          type: RESPONSE_GOT,
          payload: res,
        })
      )
      .catch((err) =>
        dispatch({
          type: RESPONSE_GOT,
          payload: err,
        })
      )
      .then(() => dispatch({ type: FORM_COULD_BE_SENT }));
  };
};
