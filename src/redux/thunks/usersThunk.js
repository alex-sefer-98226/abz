import { fetchUsers } from "../actions/fetchUsers";
import { getUsers } from "../../constants";
import { USERS_LOADED, USERS_LOADING } from "../constants/fetchUsers";

export const loadUsers = (page = 1, count = 6) => {
  return (dispatch) => {
    dispatch({ type: USERS_LOADING });

    fetch(getUsers(page, count))
      .then((res) => res.json())
      .then((res) => {
        dispatch(
          fetchUsers({
            byId: res.users.reduce(
              (acc, user) => ({ ...acc, [user.id]: user }),
              {}
            ),
            allIds: res.users.map((item) => item.id),
            total: res.total_users,
            page: res.page,
          })
        );
        dispatch({ type: USERS_LOADED });
      });
  };
};
