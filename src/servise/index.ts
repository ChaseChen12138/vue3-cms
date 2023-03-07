import Request from '@/servise/request/request'

export default new Request({
  timeout: 1000,
  // 实例中的拦截器
  interceptors: {
    requestInterceptor: (config) => {
      console.log('requestInterceptor')
      return config
    },
    requestInterceptorCatch: (error) => {
      console.log('requestInterceptorCatch')
      return error
    },
    responseInterceptor: (config) => {
      console.log('responseInterceptor')
      return config
    },
    responseInterceptorCatch: (error) => {
      console.log('responseInterceptorCatch')
      return error
    }
  }
})
