import { createSelector } from "reselect";

export const getUsers = (state) => state.domain.users;

export const getUsersAllIds = createSelector(getUsers, (users) => users.allIds);

export const getUsersById = createSelector(getUsers, (users) => users.byId);

export const getUsersList = createSelector(
  getUsersAllIds,
  getUsersById,
  (allIds, byId) => allIds.map((id) => byId[id])
);

export const getPage = createSelector(getUsers, (users) => users.page);

export const getTotalUsers = createSelector(getUsers, (users) => users.total);

export const hasMoreUsers = createSelector(
  getTotalUsers,
  getUsersAllIds,
  (total, allIds) => total > allIds.length
);

export const getUserStatus = (state) => {
  if (state.app.isLoading === undefined) {
    return true;
  }
  return state.app.isLoading.users;
};
