import axios, { AxiosRequestConfig } from "axios";

class HttpService<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  // axios request config parameter is used to add more configuration to the request
  getAll = (requestConfig?: AxiosRequestConfig) => {
    const controller = new AbortController();
    const resultPromise = axios
      .get<T>(this.endpoint, {
        signal: controller.signal,
        ...requestConfig,
      })
      .then((response) => response.data);
    return resultPromise;
  };

  getOne = (id: number) => {
    const controller = new AbortController();
    const resultPromise = axios.get<T>(`${this.endpoint}/${id}`, {
      signal: controller.signal,
    });
    return { resultPromise, controller };
  };
}

// NOTE: THE 'endpoint' PARAMETER SHOULD HOLD THE COMPLETE PATH OF BACKEND API
const createService = <T>(endpoint: string) => new HttpService<T>(endpoint);

export default createService;
