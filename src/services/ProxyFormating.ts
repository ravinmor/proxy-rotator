import { Axios, AxiosResponse } from 'axios'
import { HttpsProxyAgent } from 'https-proxy-agent'

import BaseRotatorClass from './BaseRotatorClass'
import { IProxyFormat, RequestDataType } from '../../contracts/Interfaces'

class CSVtoProxyObject implements IProxyFormat {
  formatProxy() {}
}

class ListtoProxyObject implements IProxyFormat {
  formatProxy() {}
}
class ProxyFormating {
  constructor() {}

  formatProxyListToProxyObject() {}

  formatProxyCSVListToProxyObject() {}
}
