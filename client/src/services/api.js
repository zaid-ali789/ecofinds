import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/api",
});

let jwtToken = null;

const setToken = (token) => {
  jwtToken = token;
  instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

const login = (email, password) =>
  instance.post("/auth/login", { email, password });

const register = (email, username, password) =>
  instance.post("/auth/register", { email, username, password });

const getCurrentUser = () =>
  instance.get("/users/me");

const getProducts = (params = {}) =>
  instance.get("/products", { params });

const getProduct = (id) =>
  instance.get(`/products/${id}`);

const createProduct = (data) =>
  instance.post("/products", data);

const updateProduct = (id, data) =>
  instance.put(`/products/${id}`, data);

const deleteProduct = (id) =>
  instance.delete(`/products/${id}`);

const createOrder = (data) =>
  instance.post("/orders", data);

const getOrders = () =>
  instance.get("/orders");

export default {
  setToken,
  login,
  register,
  getCurrentUser,
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  createOrder,
  getOrders,
};
