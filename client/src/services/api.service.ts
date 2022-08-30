import Axios, { AxiosResponse } from 'axios';
import { ITestResponse } from '../../../shared/api.schemas';

export default class ApiService {

  public static testApi(): Promise<string> {
    const url = 'api/test/init';
    const extractData = (response: AxiosResponse<ITestResponse>): string => response.data.message;
    return Axios.get<ITestResponse>(url).then(extractData);
  }

  public static fetchTopMovies(): Promise<any> {
    const url = 'api/movies/top';
    const extractData = (response: AxiosResponse<ITestResponse>) => response.data;
    return Axios.get<ITestResponse>(url).then(extractData);
  }

  public static fetchGenres(): Promise<any> {
    const url = 'api/movies/genre';
    const extractData = (response: AxiosResponse<ITestResponse>) => response.data;
    return Axios.get<ITestResponse>(url).then(extractData);
  }

  public static fetchMovies(page_no?: string|number, text?: string): Promise<any> {
    const url = `api/movies?current_page=${page_no || 1}&text=${text || ''}`;
    const extractData = (response: AxiosResponse<ITestResponse>) => response.data;
    return Axios.get<ITestResponse>(url).then(extractData);
  }

}
