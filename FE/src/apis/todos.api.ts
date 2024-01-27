import http from "../utils/http";

export const getTodos = (limit: number) => http.get(`todos?limit=${limit}`);
