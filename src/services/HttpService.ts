import axios, { AxiosInstance } from "axios";

export const apiFactory = (path: string): AxiosInstance =>
  axios.create({
    baseURL: `http://localhost:8080/${path}`,
  });
