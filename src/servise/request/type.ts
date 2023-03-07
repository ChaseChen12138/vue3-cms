import type { AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios'

// 这里的RequestInter定义了interceptor传入的函数类型
interface RequestInterceptors<T = AxiosResponse> {
  // 请求响应的成功失败拦截接口定义
  // 这里需要注意requestInterceptor的类型是InternalAxiosRequestConfig(继承自AxiosRequestConfig)而非AxiosRequestConfig（外部config接口）
  requestInterceptor?: (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (config: T) => T
  responseInterceptorCatch?: (error: any) => any
}

// 这里定义的RequestConfig使得原本的AxiosRequestConfig类型多了interceptor属性
interface RequestConfig extends AxiosRequestConfig {
  interceptors?: RequestInterceptors
  showLoading?: boolean
}
interface InterRequestConfig<T = AxiosResponse> extends InternalAxiosRequestConfig {
  interceptors?: RequestInterceptors<T>
  showLoading?: boolean
}

export { RequestInterceptors, RequestConfig, InterRequestConfig }
