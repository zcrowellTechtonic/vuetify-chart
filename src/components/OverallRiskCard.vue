<template>

  <div>
    <v-toolbar class="layout justify-center" color="grey lighten-2">
      <v-toolbar-title>OVERALL RISK</v-toolbar-title>
    </v-toolbar>

      <v-layout class="mt-4" text-xs-center wrap>
        <v-flex mb-4 ma-2>
      <v-btn fab dark small v-on:click="counter -= 1" color="grey">
        <v-icon dark>remove</v-icon>
      </v-btn>
        </v-flex>
        <v-flex mb-4 ma-2>
          <div color="red" class="counter-background-risk display-2">{{ counter }}</div>
        </v-flex>
        <v-flex mb-4 ma-2>
            <v-btn fab dark small v-on:click="counter += 1" color="grey">
        <v-icon dark>add</v-icon>
      </v-btn>
        </v-flex>
      </v-layout>
  </div>

</template>

<script>
    export default {
        data(){
          return {
            counter: 10
          }
        }
    }
</script>

<style>
.counter-background-risk {
  background-color: rgb(75, 75, 75);
  color: white;
  border-radius: 50px;
  box-shadow: 1px 2px 3px grey;
}
</style>