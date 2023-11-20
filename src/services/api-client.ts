import axios from "axios";

const apiKey: string = "0227d7d5bfd44a18bd08b44b6098c742";

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: apiKey,
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
