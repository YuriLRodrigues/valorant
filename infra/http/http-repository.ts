export interface HttpRepository {
  get<T>(url: string): Promise<T>;
}
