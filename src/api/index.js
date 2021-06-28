import axios from "axios";
require("dotenv").config();

const url =
  process.env.REACT_APP_BUILD === "test"
    ? "http://localhost:8080"
    : "https://my-bazari-api.herokuapp.com";

// const API = axios.create({ baseURL: "http://localhost:8080" });

// API.interceptors.request.use((req) => {
//   if (localStorage.getItem("profile")) {
//     req.headers.Authorization = `Bearer ${
//       JSON.parse(localStorage.getItem("profile")).token
//     }`;
//   }

//   return req;
// });

// export const signIn = (formData) => API.post("/user/signin", formData);
// export const signUp = (formData) => API.post("/user/signup", formData);

export const fetchProducts = (name) => {
  return axios.get(`${url}/products?name=${name ? name : ""}`);
};
export const fetchProduct = (id) => axios.get(`${url}/products/${id}`);
export const fetchProfile = (id) => axios.get(`${url}/profiles/${id}`);

export const addProduct = (newProduct) =>
  axios.post(`${url}/products`, newProduct);

export const addProfile = (newProfile) => {
  console.log(newProfile);
  return axios.post(`${url}/profiles`, newProfile);
};
