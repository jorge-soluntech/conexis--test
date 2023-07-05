import type { AxiosError, AxiosInstance, AxiosResponse } from 'axios';

export default class ResourceService<T> {
  protected axiosInstance: AxiosInstance;

  protected resourceEndpoint: string;

  constructor(axiosInstance: AxiosInstance, resourceEndpoint: string) {
    this.axiosInstance = axiosInstance;
    this.resourceEndpoint = resourceEndpoint;
  }

  public getAll(): Promise<T[]> {
    return this.axiosInstance
      .get<T[]>(`${this.resourceEndpoint}/readAll`)
      .then((response: AxiosResponse<T[]>) => {
        // @ts-ignore
        const data = this.transform
          ? // @ts-ignore
            response.data.data.map((item) => this.transform(item))
          : // @ts-ignore
            response.data.data;
        return data;
      })
      .catch((error: AxiosError) => {
        throw new Error(`Failed to get all resources: ${error.message}`);
      });
  }

  public getById(id: string): Promise<T> {
    const url = `${this.resourceEndpoint}/${id}`;
    return this.axiosInstance
      .get<T>(url)
      .then((response: AxiosResponse<T>) => response.data)
      .catch((error: AxiosError) => {
        throw new Error(
          `Failed to get resource with ID ${id}: ${error.message}`
        );
      });
  }

  public create(data: T): Promise<T> {
    return this.axiosInstance
      .post<T>(this.resourceEndpoint, data)
      .then((response: AxiosResponse<T>) => response.data)
      .catch((error: AxiosError) => {
        throw new Error(`Failed to create resource: ${error.message}`);
      });
  }

  public update(id: string, data: T): Promise<T> {
    const url = `${this.resourceEndpoint}/${id}`;
    return this.axiosInstance
      .put<T>(url, data)
      .then((response: AxiosResponse<T>) => response.data)
      .catch((error: AxiosError) => {
        throw new Error(
          `Failed to update resource with ID ${id}: ${error.message}`
        );
      });
  }

  public delete(id: string): Promise<void> {
    const url = `${this.resourceEndpoint}/${id}`;
    return this.axiosInstance
      .delete(url)
      .then(() => {})
      .catch((error: AxiosError) => {
        throw new Error(
          `Failed to delete resource with ID ${id}: ${error.message}`
        );
      });
  }
}
