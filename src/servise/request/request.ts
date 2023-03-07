import axios from 'axios'
import type { AxiosInstance } from 'axios'
import { RequestInterceptors, RequestConfig, InterRequestConfig } from './type'
import { ElLoading } from 'element-plus'
// 如何查找类型，需要根据对应库对ts的支持
import { LoadingInstance } from 'element-plus/es/components/loading/src/loading'

// 使用类的好处是能够使用继承，不同的实例可以具有不同的属性
class Request {
  instance: AxiosInstance
  interceptors?: RequestInterceptors
  loading?: LoadingInstance
  showLoading: boolean

  constructor(config: RequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.showLoading = config.showLoading ?? true

    // 个别实例创建的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.requestInterceptorCatch
    )

    // 全局的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        const token = ''
        config.headers.Authorization = `Bearer ${token}`
        console.log('requestInterceptor')

        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: 'Loading',
            background: 'rgba(0, 0, 0, 0.7)'
          })
        }

        return config
      },
      (error) => {
        this.loading?.close()

        console.log('requestInterceptorCatch')
        return error
      }
    )
    this.instance.interceptors.response.use(
      (config) => {
        this.loading?.close()

        console.log('responseInterceptor')
        return config
      },
      (error) => {
        this.loading?.close()

        console.log('responseInterceptorCatch')
        return error
      }
    )
  }

  request<T>(config: InterRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }
      if (config.showLoading === false) {
        this.showLoading = config.showLoading
      }

      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          this.showLoading = true

          resolve(res)
          return res
        })
        .catch((err) => {
          this.showLoading = true
          reject(err)
          return err
        })
    })
  }
}

export default Request
