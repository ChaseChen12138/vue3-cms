import { FormRules } from 'element-plus'
export const rules: FormRules = {
  name: [
    {
      required: true,
      message: '用户名必填',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{5,10}$/,
      message: '用户名必须5-10各字母或者数字',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '密码必填',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{3,}$/,
      message: '用户名必须3位以上字母或者数字',
      trigger: 'blur'
    }
  ]
}
