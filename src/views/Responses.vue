<template>

   <div class='responses-container'>
      <div class="chart-title-container">
        <h1 class="arabic" style='direction: "rtl'>
            عقود المياه
        </h1>
      </div>

      <div class='responses-chart-container'>
        <apexchart width="100%" height="100%" type="bar" :options="options" :series="series"></apexchart>
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
          categories: ['مشكلة بطارية', 'مشكلة أحمال', 'رصيد سالب', 'عمل صيانة بالعداد', 'مشكلة استهلاك', 'شاشة لا تعمل', 'العداد فاصل', 'مشكلة كارت', 'تنظيف فلتر', 'رفع العداد للصيانة'
          ]
        }
      },
      series: [{
        data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
      }]
    }
  },
  name: 'Responses'
}
</script>

<style scoped>
.responses-container{
    width: auto;
    height: 500px;
    background-color: var(--primary);
    box-shadow: var(--shadow);
    border-radius: var(--border-radius);
    margin-top: 20px;
    padding: 20px;
    overflow: hidden;
}

.two-charts-container {
    height: 500px;
    display: grid;
    grid-template-columns: 1fr 2fr;
    column-gap: 2%;
    margin-bottom: 50px;
}
.responses-chart-container {
    height: 80%;
}

@media only screen and (max-width: 1200px) {
    .two-charts-container {
        height: 1000px;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
    }
}
</style>
