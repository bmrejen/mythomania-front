<script>
import AppNavbar from "./components/layout/AppNavbar.vue"

export default {
  name: "App",
  components: {
    AppNavbar
  }
}
</script>

<template>
  <AppNavbar />
  <router-view></router-view>
</template>

<style>
body {
  background-color: #5f5f5f1a !important;
}
</style>
