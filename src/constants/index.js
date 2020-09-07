export const getUsers = (page = 1, count = 6) =>
  `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=${count}`;
export const countUserPerPage = 6;
export const getPositions = () =>
  "https://frontend-test-assignment-api.abz.agency/api/v1/positions";
export const getToken = () =>
  "https://frontend-test-assignment-api.abz.agency/api/v1/token";
