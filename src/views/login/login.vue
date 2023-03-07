<template>
  <div class="login">
    <loginPanel></loginPanel>
  </div>
</template>

<script lang="ts" setup>
import loginPanel from './cpns/login-panel.vue'
</script>

<style scoped lang="less">
div.login {
  height: 100%;
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
