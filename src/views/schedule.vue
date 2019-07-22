<template>
  <div class="schedule">
    <schedulePage></schedulePage>
  </div>
</template>

<script>
// @ is an alias to /src
import schedulePage from '@/components/schedulePage.vue'

export default {
  name: 'schedule',
  components: {
    schedulePage
  }
}
</script>