import http from "../utils/http";

export const getPosts = (limit: number) => http.get(`posts?limit=${limit}`);
