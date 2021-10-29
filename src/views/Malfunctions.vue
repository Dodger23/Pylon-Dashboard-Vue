<template>
  <div class="malfunctions-container">
    <div class="malfunctions-stats-container">
      <div class="malfunctions-stat">
        <div class="stat-info-container">
          <h3>159</h3>
          <p class="arabic">مغلق</p>
        </div>
        <div
          class="stat-icon-container"
          style="background-color: #ffd2da; color: #ff5c7a"
        >
          <font-awesome-icon :icon="['fas', 'times']" style="width: 19.2px" />
        </div>
      </div>
      <div class="malfunctions-stat">
        <div class="stat-info-container">
          <h3>5,720</h3>
          <p class="arabic">تم تركيبه</p>
        </div>
        <div
          class="stat-icon-container"
          style="background-color: #acffe3; color: #20c58e"
        >
          <font-awesome-icon :icon="['fas', 'check']" style="width: 19.2px" />
        </div>
      </div>
      <div class="malfunctions-stat">
        <div class="stat-info-container">
          <h3>6,436</h3>
          <p class="arabic">متوقع تركيبه</p>
        </div>
        <div
          class="stat-icon-container"
          style="background-color: rgb(255, 254, 219); color: rgb(197, 193, 87)"
        >
          <font-awesome-icon
            :icon="['fas', 'calendar-plus']"
            style="width: 19.2px"
          />
        </div>
      </div>
      <div class="malfunctions-stat">
        <div class="stat-info-container">
          <h3>590</h3>
          <p class="arabic">في الصيانة</p>
        </div>
        <div
          class="stat-icon-container"
          style="background-color: rgb(219, 238, 255); color: rgb(87, 120, 197)"
        >
          <font-awesome-icon :icon="['fas', 'wrench']" style="width: 19.2px" />
        </div>
      </div>
      <div class="malfunctions-stat">
        <div class="stat-info-container">
          <h3>6,570</h3>
          <p class="arabic">اجمالي</p>
        </div>
        <div
          class="stat-icon-container"
          style="background-color: rgb(240, 219, 255); color: rgb(157, 87, 197)"
        >
          <font-awesome-icon
            :icon="['fas', 'database']"
            style="width: 19.2px"
          />
        </div>
      </div>
    </div>

   <div class="malfunctions-chart-container">
      <div class="chart-title-container">
        <h1 class="arabic" style='direction: "rtl'>
              أعطال عدادات الكهرباء
        </h1>
      </div>

      <div class="malfunctions-chart">
        <apexchart width="100%" height="100%" type="bar" :options="options" :series="series"></apexchart>
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
        name: 'عطل 1',
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      },
      {
        name: 'عطل 2',
        data: [65, 42, 82, 34, 76, 90, 10, 74]
      },
      {
        name: 'عطل 3',
        data: [80, 55, 95, 20, 64, 85, 15, 60]
      }
      ]
    }
  },
  name: 'Malfunctions'
}
</script>

<style scoped>
.malfunctions-container {
  width: 100%;
}

.malfunctions-stats-container {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 1%;
}

.malfunctions-stat {
  padding: 30px 20px;
  background-color: var(--primary);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.stat-icon-container {
  padding: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin-left: 20px;
}

.stat-info-container {
  width: 60%;
  text-align: right;
}

.stat-info-container h3 {
  font-size: 2rem;
  color: var(--main-text);
  margin: 0;
}

.stat-info-container p {
  font-size: 1.4rem;
  color: var(--second-text);
  margin: 10px 0;
}

.malfunctions-chart-container {
  height: 500px;
  background-color: var(--primary);
  box-shadow: var(--shadow);
  border-radius: var(--border-radius);
  margin-top: 20px;
  padding: 20px;
}

.chart-title-container {
  width: 90%;
  margin: 0 auto 20px;
  direction: rtl;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--second-text);
}

.chart-sortby {
  display: flex;
  align-items: center;
}

.chart-sortby p {
  color: var(--main-text);
}

.chart-sortby select {
  background-color: var(--primary);
  outline: none;
  border: 0;
  font-weight: bold;
  cursor: pointer;
  font-size: 1.3rem;
}
.malfunctions-chart {
  height: 75%;
}

@media only screen and (max-width: 700px) {
  .sidebar-container {
    display: none;
  }

  .main-content {
    width: 100%;
  }

  .main-content {
    padding: 30px 20px;
  }

  .malfunctions-stats-container {
    display: grid;
    grid-template-rows: repeat(5, 1fr);
    grid-template-columns: repeat(1, 1fr);
    row-gap: 1%;
  }
  .malfunctions-chart {
    height: 80%;
  }

  .chart-title-container h1 {
    font-size: 1.2rem;
  }
  .chart-sortby select {
    font-size: 1rem;
  }
}

@media only screen and (min-width: 701px) and (max-width: 1200px) {
  .malfunctions-stats-container {
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1% 1%;
  }
}

@media only screen and (min-width: 1201px) and (max-width: 1500px) {
  .main-content {
    padding: 20px 50px;
  }
  .stat-icon-container {
    font-size: 1.2rem;
    padding: 15px;
  }

  .stat-info-container h3 {
    font-size: 1.3rem;
  }

  .stat-info-container p {
    font-size: 0.8rem;
  }
}
</style>
