<template>
  <div class="home">
    <Malfunctions />
  </div>
</template>

<script>
// @ is an alias to /src
import Malfunctions from '@/views/Malfunctions.vue'
export default {
  name: 'Home',
  components: {
    Malfunctions
  }
}
</script>
