<template>
  <v-card>
    <v-toolbar class="layout justify-center">
      <v-toolbar-title>Budget</v-toolbar-title>
    </v-toolbar>
    <v-container>
       
        <span class="layout justify-space-between">
           <p class="font-weight-medium"> Used: </p> <v-chip color="primary" text-color="white">{{ valueUsed }}%</v-chip>
        </span>
      <v-progress-linear height="30" 
      :value="valueUsed"
      color="teal"
      class="font-weight-medium"
      ></v-progress-linear>
    </v-container>
         
    <v-container>
        
        <span class="layout justify-space-between">
            <p class="font-weight-medium">Remaining:</p><v-chip color="primary" text-color="white">{{ valueRemaining }}%</v-chip>
        </span>
        
      <v-progress-linear height="30" 
      :value="valueRemaining"
      color="orange"
      class="font-weight-medium"
      ></v-progress-linear>
    </v-container>
  </v-card>
</template>

<script>
export default {
     data () {
      return {
         interval: {},
        valueUsed: 10,
        valueRemaining: 20
      }
      
    },
    beforeDestroy () {
      clearInterval(this.interval)
    },
    mounted () {
      this.interval = setInterval(() => {
        if (this.value === 100) {
          return (this.value = 0)
        }
        this.value += 10
      }, 1000)
    }
};
</script>

<style lang="scss" scoped>

</style>