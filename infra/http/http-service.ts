import { HttpRepository } from "./http-repository";

export class HttpService implements HttpRepository {
  async get<T>(url: string): Promise<T> {
    const response = await fetch(url).then((res) => res.json());
    return response;
  }
}
