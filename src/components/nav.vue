<template>
    <div>
        <b-navbar toggleable="md" type="light" variant="">
            <div class="container">

                <b-navbar-brand href="/">
                    <img class="navBrandImg" src="https://edu.bstudio.click/openhouse-2018/assets/img/logo-sym.svg">
                </b-navbar-brand>

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
                <b-collapse id="nav-collapse" is-nav>

                    <b-navbar-nav class="ml-auto">
                        <b-nav-item href="/">หน้าหลัก</b-nav-item>
                        <b-nav-item href="/schedule">กำหนดการ</b-nav-item>
                    </b-navbar-nav>
                    
                </b-collapse>

            </div>
        </b-navbar>
    </div>
</template>

<script>
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import axios from 'axios'

Vue.use(BootstrapVue)
export default {
    name: 'NavCard',
    data () {
        return {
            
        }
    }
}

</script>

<style scoped lang="scss">
.navbar {
  background: #FFF;
}

.navbar-dark .navbar-nav .nav-link {
    color: rgba(0,0,0,1);
}

.navbar-dark:hover .navbar-nav:hover .nav-link:hover {
    color: rgba(0,0,0,.5);
}

.navBrandImg {
    height: 90px;
}
</style>