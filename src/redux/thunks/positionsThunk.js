import { getPositions } from "../../constants";
import { fetchPosition } from "../actions/form";

export const loadPositions = () => {
  return (dispatch) => {
    fetch(getPositions())
      .then((res) => res.json())
      .then((res) => {
        dispatch(fetchPosition(res.positions));
      });
  };
};
