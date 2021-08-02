import axios from "axios";

export const apiMultTenancy = axios.create({
  baseURL: "https://swapi.dev/api/people/"
});

// apiMultTenancy.interceptors.request.use(async config => {
//   const token = getToken();
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });
