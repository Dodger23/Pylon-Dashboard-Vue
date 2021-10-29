<template>
  <div class="home">
    <Malfunctions />
    <MonthlyReadings />
    <div class="two-charts-container">
      <WaterContracts />
      <Responses />
    </div>
    <ConnectedMeters />
  </div>
</template>

<script>
// @ is an alias to /src
import Malfunctions from '@/views/Malfunctions.vue'
import MonthlyReadings from '@/views/MonthlyReadings.vue'
import WaterContracts from '@/views/WaterContracts.vue'
import Responses from '@/views/Responses.vue'
import ConnectedMeters from '@/views/ConnectedMeters.vue'
export default {
  name: 'Home',
  components: {
    Malfunctions,
    MonthlyReadings,
    WaterContracts,
    Responses,
    ConnectedMeters
  }
}
</script>
