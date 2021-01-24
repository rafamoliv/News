import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:44372/Classifieds",
});

export default api;
