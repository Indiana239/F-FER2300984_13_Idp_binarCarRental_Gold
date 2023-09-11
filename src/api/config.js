import axios from "axios";

const http = axios.create({
  baseURL: "https://bootcamp-rent-cars.herokuapp.com/",
  timeout: 2500,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

http.interceptors.request.use(
  (config) => {
    config.headers.Authorization = localStorage.getItem("auth");
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default http;
