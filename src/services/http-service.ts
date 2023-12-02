import { AxiosRequestConfig } from "axios";
import axiosInstance from "./api-client";

class HttpService<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  // axios request config parameter is used to add more configuration to the request
  getAll = (requestConfig?: AxiosRequestConfig) => {
    const controller = new AbortController();
    const resultPromise = axiosInstance
      .get<T>(this.endpoint, {
        signal: controller.signal,
        ...requestConfig,
      })
      .then((response) => response.data);
    return resultPromise;
  };

  getOne = (id: number) => {
    const controller = new AbortController();
    const resultPromise = axiosInstance.get<T>(`${this.endpoint}/${id}`, {
      signal: controller.signal,
    });
    return { resultPromise, controller };
  };
}

const createService = <T>(endpoint: string) => new HttpService<T>(endpoint);

export default createService;
