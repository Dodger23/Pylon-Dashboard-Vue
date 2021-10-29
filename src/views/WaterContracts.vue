<template>

   <div class='water-contracts-container'>
      <div class="chart-title-container">
        <h1 class="arabic" style='direction: "rtl'>
            عقود المياه
        </h1>
      </div>

      <div class='water-contracts-chart-container'>
        <apexchart width="100%" height="100%" type="donut" :options="options" :series="series"></apexchart>
      </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      options: {
        labels: ['مهيأة', 'غير مهيأة', 'مركب'],
        legend: {
          position: 'bottom'
        }
      },
      series: [44, 55, 60]
    }
  },
  name: 'WaterContracts'
}
</script>

<style scoped>
.water-contracts-container {
    width: auto;
    height: 500px;
    background-color: var(--primary);
    box-shadow: var(--shadow);
    border-radius: var(--border-radius);
    margin-top: 20px;
    padding: 20px;
}

.water-contracts-chart-container {
    width: 100%;
    height: 80%;
}

@media only screen and (max-width: 1200px) {
    .water-contracts-container {
        width: 100%;
    }
}

</style>
