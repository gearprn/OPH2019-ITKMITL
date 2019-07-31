<template>
  <div id="app">
    <nav-card></nav-card>
    <!-- <b-container class="mb-2 mt-4"> -->
      <router-view></router-view>
    <!-- </b-container> -->
    <Footer></Footer>
  </div>
</template>

<script>
import NavCard from '@/components/nav.vue'
import Footer from '@/components/footer.vue'

import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)
export default {
  name: 'app',
  components: {
    NavCard,
    Footer
  }
}
</script>

<style lang="scss">
@font-face {
  font-family: 'IBMPlexThai';
  src:  url('assets/fonts/IBMPlexThai-Bold.woff2') format('woff2'),
        url('assets/fonts/IBMPlexThai-ExtraLight.woff2') format('woff2'),
        url('assets/fonts/IBMPlexThai-Light.woff2') format('woff2'),
        url('assets/fonts/IBMPlexThai-Medium.woff2') format('woff2'),
        url('assets/fonts/IBMPlexThai-Regular.woff2') format('woff2'),
        url('assets/fonts/IBMPlexThai-SemiBold.woff2') format('woff2'),
        url('assets/fonts/IBMPlexThai-Text.woff2') format('woff2'),
        url('assets/fonts/IBMPlexThai-Thin.woff2') format('woff2');
}

html {
  scroll-behavior: smooth;
}
#app {
  font-family: 'IBMPlexThai',sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  scroll-behavior: smooth;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
