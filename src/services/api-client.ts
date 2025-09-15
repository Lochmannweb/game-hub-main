import axios, { AxiosRequestConfig } from "axios";

const apiKey = import.meta.env.VITE_RAWG_API_KEY;
console.log("RAWG API Key:", apiKey);


export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: apiKey,
  },
});

class APIClient<T> {
  constructor(private readonly endpoint: string) {}

  getAll = async (config: AxiosRequestConfig) => {
    return await axiosInstance.get<FetchResponse<T>>(this.endpoint, config).then((res) => res.data);
  };
}

export default APIClient;
