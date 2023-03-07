<template>
  <div class="login-account">
    <el-form :rules="rules" :model="account" class="login-ccount-form">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" placeholder="enter username" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" placeholder="enter password"> </el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, defineExpose } from 'vue'
import { rules } from '../config/rules'
const account = reactive({
  name: '',
  password: ''
})
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const loginAction = () => {
  console.log(account)

  // 3.8 任务，这里需要做登陆前数据验证
}
defineExpose({
  loginAction
})
</script>

<style scoped lang="less"></style>
