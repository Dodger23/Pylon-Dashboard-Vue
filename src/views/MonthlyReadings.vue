<template>
  <div class='monthly-readings-container'>
      <div class="chart-title-container">
        <h1 class="arabic" style='direction: "rtl'>
            القراءات الشهرية
        </h1>
      </div>
   <div class='monthly-readings-charts-container'>

      <div class='monthly-readings-charts'>
        <apexchart width="100%" height="100%" type="bar" :options="options" :series="series"></apexchart>
        <apexchart width="100%" height="100%" type="donut" :options="donutOptions" :series="donutSeries"></apexchart>
      </div>

   </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      options: {
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          categories: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov']
        }
      },
      series: [{
        name: 'مقبول',
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      },
      {
        name: 'مشكوك فيه',
        data: [65, 42, 82, 34, 76, 90, 10, 74]
      }
      ],
      donutOptions: {
        labels: ['مقبول', 'مشكوك فيه'],
        legend: {
          position: 'bottom'
        }
      },
      donutSeries: [44, 55]
    }
  },
  name: 'MonthlyReadings'
}
</script>

<style scoped>
.monthly-readings-container {
    height: 500px;
    background-color: var(--primary);
    box-shadow: var(--shadow);
    border-radius: var(--border-radius);
    margin-top: 20px;
    padding: 20px;
}

.monthly-readings-charts-container {
    width: 100%;
    height: 100%;
    max-height: 330px;
}

.monthly-readings-charts {
    width: 100%;
    height: 100%;
    display: flex;
}

.monthly-readings-charts div:first-child {
    width: 70% !important;
}
.monthly-readings-charts div:last-child {
    width: 30% !important;
}

@media only screen and (max-width: 1200px) {

    .monthly-readings-charts-container {
        max-height: 500px;
    }
    .monthly-readings-container {
        height: 600px;
    }

    .monthly-readings-charts {
        height: 80%;
    }

    .monthly-readings-charts {
        flex-direction: column;
    }
    .monthly-readings-charts div {
        height: 50% !important;
    }
    .monthly-readings-charts div:first-child {
        width: 100% !important;
    }
    .monthly-readings-charts div:last-child {
        width: 100% !important;
    }
}

</style>
