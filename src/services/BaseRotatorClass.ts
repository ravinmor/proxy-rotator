import axios, {
  Axios,
  AxiosError,
  AxiosProxyConfig,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios'

import { RequestOptionsType } from '../../contracts/Interfaces'

class BaseRotatorClass {
  _axios: Axios
  _headers: AxiosRequestConfig
  _requestOptions: RequestOptionsType

  _proxyObjects?: AxiosProxyConfig[]
  _proxyList?: string[]

  constructor(_headers: AxiosRequestConfig = { timeout: 2000 }, options = {}) {
    this._headers = _headers
    this._axios = axios.create(this._headers)
    this._requestOptions = {
      proxy: false,
    }
  }

  async handleRequest(
    reqResponse: PromiseSettledResult<AxiosResponse<any, any>>[],
  ) {
    return reqResponse
  }

  async handleRequestError(error: AxiosError) {
    if (error.response) {
      console.log(
        '> Error: The request was made and the server responded with a status code',
      )
      console.log(`> Status: ${error.response.status}`)
      console.log(`> Headers:\n${error.response.headers}`)
      console.log(`> Response:\n${error.response.data}`)

      return error.toJSON()
    } else if (error.request) {
      console.log('> Error: The request was made but no response was received')
      console.log(`> Headers:\n${error.request}`)

      return error.toJSON()
    } else {
      console.log(
        '> Error: Something happened in setting up the request that triggered an Error',
      )
      console.log(`> Message:\n${error.message}`)

      return error.toJSON()
    }
  }
}

export default BaseRotatorClass
