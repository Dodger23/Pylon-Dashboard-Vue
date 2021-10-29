<template>
  <div class="home">
    <Malfunctions />
    <MonthlyReadings />
  </div>
</template>

<script>
// @ is an alias to /src
import Malfunctions from '@/views/Malfunctions.vue'
import MonthlyReadings from '@/views/MonthlyReadings.vue'
export default {
  name: 'Home',
  components: {
    Malfunctions,
    MonthlyReadings
  }
}
</script>
