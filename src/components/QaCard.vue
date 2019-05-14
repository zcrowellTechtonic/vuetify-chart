<template>
    <v-card>
         <v-toolbar class="layout justify-center">
              <v-toolbar-title>QA REPORT</v-toolbar-title> 
            </v-toolbar>
              <v-container  fluid>
      <v-layout id="counter-display" text-xs-center wrap>
        <v-flex xs4 mb-4 ma-2>
          <v-btn v-on:click="counter -= 1">-</v-btn>
        </v-flex>
        <v-flex xs-4 mb-4 ma-2>
          <div class="counter-background display-2">{{ counter }}%</div>
        </v-flex>
        <v-flex xs-4 mb-4 ma-2>
          <v-btn v-on:click="counter += 1">+</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
            </v-card>
</template>

<script>
    export default {
        data(){
            return{
                counter: 15
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>