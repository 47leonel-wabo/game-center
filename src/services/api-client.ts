import axios from "axios";

const apiKey: string = "0227d7d5bfd44a18bd08b44b6098c742";

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: apiKey,
    "Content-Type": "application/json",
  },
});

// Because RAWG api return response with this shape
export interface RAWGRequestResponse<T> {
  count: number;
  next: string;
  previous: string;
  results: T[];
}

export default axiosInstance;
