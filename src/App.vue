<script setup lang="ts">
import zhCN from 'ant-design-vue/es/locale/zh_CN';
const locale = zhCN;
</script>

<template>
  <a-config-provider :locale="locale">
    <RouterView></RouterView>
  </a-config-provider>
</template>

<style lang="scss"></style>
