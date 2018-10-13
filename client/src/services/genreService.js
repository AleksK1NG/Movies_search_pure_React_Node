import http from "./httpService";
import { apiUrl } from'../config.json';

// export function getGenres() {
//   return http.get("http://localhost:3900/api/genres");
// }

export const getGenres = async () => {
  const request = http.get(`${apiUrl}/genres`);
  return request;
};
