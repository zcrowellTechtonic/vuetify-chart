<template>
    <div>
         <v-toolbar class="layout justify-center" color="grey lighten-2">
              <v-toolbar-title>QA REPORT</v-toolbar-title> 
            </v-toolbar>
        <!-- <v-container> -->
       
                <QAChart></QAChart>
         
          
    <!-- </v-container> -->
    </div>
</template>

<script>
import QAChart from './charts/QAChart'
    export default {
        components: {
            QAChart
        },
        data(){
            return{
             
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>