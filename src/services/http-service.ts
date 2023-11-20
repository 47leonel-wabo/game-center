import axiosInstance from "./api-client";

class HttpService {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll<T>() {
    const controller = new AbortController();
    const resultPromise = axiosInstance.get<T>(this.endpoint, {
      signal: controller.signal,
    });
    return { resultPromise, controller };
  }

  getOne<T>(id: number) {
    const controller = new AbortController();
    const resultPromise = axiosInstance.get<T>(`${this.endpoint}/${id}`, {
      signal: controller.signal,
    });
    return { resultPromise, controller };
  }
}

const createService = (endpoint: string) => new HttpService(endpoint);

export default createService;
