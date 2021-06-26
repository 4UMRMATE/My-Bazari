import axios from "axios";

// "http://localhost:8080";
const url = "https://my-bazari-api.herokuapp.com";

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

export const fetchProducts = () => axios.get(`${url}/products`);
export const fetchProduct = (id) => axios.get(`${url}/products/${id}`);
export const fetchProfile = (id) => axios.get(`${url}/profiles/${id}`);

export const addProduct = (newProduct) =>
  axios.post(`${url}/products`, newProduct);

export const addProfile = (newProfile) => {
  console.log(newProfile);
  return axios.post(`${url}/profiles`, newProfile);
};
