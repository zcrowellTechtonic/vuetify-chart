<template>

  <v-app>  

 
    
      <!-- <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/chartjs">vue-chartjs</router-link></li>
        <li><router-link to="/charts">vue-charts</router-link></li>
        <li><router-link to="/chartkick">vue-chartkick</router-link></li>
      </ul>
   
    <router-view /> -->
  

    <v-content>
      <MainDash/>
    </v-content>
  </v-app>
</template>

<script>
// import DashGrid from './components/DashGrid'
import MainDash from './components/MainDash'
export default {
  name: 'App',
  components: {
    MainDash
  },
  data () {
    return {
      //
    }
  }
}
</script>
