import axios, { AxiosInstance } from 'axios'

var service = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL + '/'
})

export default class HttpLayer {
  public url: string;
  public service: AxiosInstance;
  constructor ({ url = '' }: { url: string }) {
    this.url = url
    this.service = service
  }
}
