import http from "../utils/http";

export const getUsers = (_page: number, _limit: number) =>
  http.get(`users?page=${_page}&limit=${_limit}`);
