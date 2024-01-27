import http from "../utils/http";

export const getUsers = (limit: number) => http.get(`user?limit=${limit}`);
