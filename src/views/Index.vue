<template>
  <div class="index">
    <IndexPage></IndexPage>
  </div>
</template>

<script>
// @ is an alias to /src
import IndexPage from '@/components/index.vue'

export default {
  name: 'index',
  components: {
    IndexPage
  }
}
</script>