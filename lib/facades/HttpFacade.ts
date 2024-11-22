// libs/facades/HttpFacade.ts
import { httpClient } from "../services/httpClient";

export const HttpFacade = {
  get: (url: string, params?: Record<string, number>) =>
    httpClient.get(url, { params }),
  post: (url: string, data: object) => httpClient.post(url, data),
  put: (url: string, data: object) => httpClient.put(url, data),
  delete: (url: string) => httpClient.delete(url),
};
