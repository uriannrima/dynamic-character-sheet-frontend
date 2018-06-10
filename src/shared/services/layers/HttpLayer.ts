import axios, { AxiosInstance } from 'axios'
import Constants from 'Constants'

var service = axios.create({
  baseURL: Constants.API_URL + '/'
})

export default class HttpLayer {
  public url: string;
  public service: AxiosInstance;
  constructor ({ url = '' }: { url: string }) {
    this.url = url
    this.service = service
  }
}
