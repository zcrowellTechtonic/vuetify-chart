<template>
  <v-app>  
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
