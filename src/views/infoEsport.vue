<template>
  <div class="infoEsport">
    <infoesportPage></infoesportPage>
  </div>
</template>

<script>
// @ is an alias to /src
import infoesportPage from '@/components/infoEsportPage.vue'

export default {
  name: 'InfoEsport',
  components: {
    infoesportPage
  }
}
</script>