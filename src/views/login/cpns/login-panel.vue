<template>
  <div class="login-panel">
    <p class="title">后台管理系统</p>
    <el-tabs v-model="activeName" class="demo-tabs" stretch>
      <el-tab-pane label="账号登录" name="login">
        <loginAccount ref="accountRef"></loginAccount>
      </el-tab-pane>
      <el-tab-pane label="手机登录" name="phone">
        <loginPhone></loginPhone>
      </el-tab-pane>
    </el-tabs>
    <div class="accaount-countrol">
      <el-checkbox v-model="isKeepPassword" label="记住密码" size="large" />
      <el-link href="https://element-plus.org" target="_blank">忘记密码</el-link>
    </div>
    <el-button class="login-btn" type="primary" size="large" @click="handleLoginClick"
      >立即登录</el-button
    >
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import loginAccount from './login-account.vue'
import loginPhone from './login-phone.vue'

const activeName = ref('login')
const isKeepPassword = ref(false)
const accountRef = ref<InstanceType<typeof loginAccount>>()

const handleLoginClick = () => {
  accountRef.value?.loginAction()
}
</script>

<style scoped lang="less">
.login-panel {
  width: 320px;
}
.accaount-countrol {
  display: flex;
  justify-content: space-between;
}
:deep(.el-checkbox.el-checkbox--large) {
  height: 20px;
}
:deep(.el-tabs__content) {
  height: 100px;
}
.login-btn {
  width: 100%;
  margin-top: 10px;
}
</style>
