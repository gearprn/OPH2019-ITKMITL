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
@import url('https://fonts.googleapis.com/css?family=Kanit|Mitr&display=swap');
#app {
  font-family: 'Mitr',sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
