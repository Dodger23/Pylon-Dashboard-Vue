<template>
    <div className="sidebar-container">
      <div className="sidebar">
        <h2>Dshboard</h2>

        <div className="pages">
          <router-link to="/">
            <div class="page">
              <font-awesome-icon :icon="['fas', 'home']" />
              <p class="arabic">{{arabicPagesNames.home}}</p>
            </div>
          </router-link>
          <router-link to="/water-contracts">
            <div class="page">
              <font-awesome-icon :icon="['fas', 'water']" />
              <p class="arabic">{{arabicPagesNames.waterContracts}}</p>
            </div>
          </router-link>
          <router-link to="/malfunctions">
            <div class="page">
              <font-awesome-icon :icon="['fas', 'wrench']" />
              <p class="arabic">{{arabicPagesNames.malfunctions}}</p>
            </div>
          </router-link>
          <router-link to="/responses">
            <div class="page">
              <font-awesome-icon :icon="['fas', 'reply-all']" />
              <p class="arabic">{{arabicPagesNames.responses}}</p>
            </div>
          </router-link>
          <router-link to="/monthly-readings">
            <div class="page">
              <font-awesome-icon :icon="['fas', 'file-alt']" />
              <p class="arabic">{{arabicPagesNames.monthlyReadings}}</p>
            </div>
          </router-link>
          <router-link to="/connected-meters">
            <div class="page">
              <font-awesome-icon :icon="['fas', 'cubes']" />
              <p class="arabic">{{arabicPagesNames.connectedMeters}}</p>
            </div>
          </router-link>
        </div>
      </div>
    </div>

</template>

<script>
export default {
  data () {
    return {
      arabicPagesNames: {
        home: 'الرئيسية',
        malfunctions: 'الأعطال',
        connectedMeters: 'العدادات المتصلة',
        monthlyReadings: 'القراءات الشهرية',
        responses: 'الردود',
        waterContracts: 'عقود المياه'
      }
    }
  },
  name: 'Sidebar'
}
</script>

<style scoped>

.sidebar-container {
    position: relative;
    z-index: 2;
    box-shadow: var(--shadow);
    width: 20%;
}
.sidebar {
    height: 100%;
    padding: 40px 20px 0px;
    background-color: var(--primary);
    text-align: center;
}

.sidebar h2 {
    background-color: var(--secondary);
    color: var(--primary);
    border-radius: var(--border-radius);
    padding: 10px;
    margin: 0px 0px 30px;
}

.pages {
    display: grid;
    grid-template-rows: auto repeat(5, auto) 1fr;
    row-gap: 1%;
}

.pages a {
    font-size: 1.2rem;
    width: 100%;
    height: 9%;
}

.pages .page {
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: left;
    cursor: pointer;
    color: var(--second-text);
    padding: 20px;
}
.router-link-active .page{
  color: var(--main-text);
    font-weight: bold;
}
.page:hover {
    color: var(--main-text);
    font-weight: bold;
}

.page svg {
    width: 30%;
}

.page p {
    width: 70%;
    text-align: center;
    margin: 0;
}

</style>
