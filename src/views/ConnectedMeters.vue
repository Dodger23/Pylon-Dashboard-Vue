<template>

   <div class='connected-meters-container'>
      <div class="chart-title-container">
        <h1 class="arabic" style='direction: "rtl'>
            العدادات المتصلة
        </h1>
      </div>

      <div class='connected-meters-chart-container'>
        <apexchart width="100%" height="100%" type="area" :options="options" :series="series"></apexchart>
      </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      options: {
        legend: {
          position: 'bottom'
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: true
          }
        },
        xaxis: {
          categories: ['01/10/2021', '04/10/2021', '15/10/2021', '17/10/2021']
        }
      },
      series: [{
        data: [100, 30, 50, 40]
      }]
    }
  },
  name: 'ConnectedMeters'
}
</script>

<style scoped>
.connected-meters-container {
    width: 100%;
    height: 500px;
    background-color: var(--primary);
    display: grid;
    grid-template-rows: auto 1fr;
}

.connected-meters-chart-container {
    max-height: 90%;
    padding: 20px;
}

.connected-meters-chart {
    height: 100%;
    width: 100%;
}
@media only screen and (max-width: 1200px) {
  .connected-meters-container {
    height: 650px;
  }
}
</style>
