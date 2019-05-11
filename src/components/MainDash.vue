<template>
  <v-app id="inspire">
      <v-toolbar color="blue-grey darken-1" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Dashboard</v-toolbar-title>
    </v-toolbar>
    
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-list dense>
        <v-list-tile 
        @click="sideDrawerLog">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Risk Dashboard</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="sideDrawerLog">
          <v-list-tile-action>
            <v-icon>build</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Projects</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="sideDrawerLog">
          <v-list-tile-action>
            <v-icon>bar_chart</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Reports</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="sideDrawerLog">
          <v-list-tile-action>
            <v-icon>info</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Account Info</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <RiskGrid></RiskGrid>
    <v-footer color="blue-grey darken-3" app>
        <v-spacer />
        <span
        v-for="link in links"
        :key="link.name"
      >
        <a
          :href="link.Link"
          class="tertiary--text footer-links">{{ link.name }}</a>
      </span>
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>
<script>

import RiskGrid from "./RiskGrid";
  export default {
  name: "DashGrid",
  components: {
      RiskGrid
  },
    data: () => ({
      drawer: null
    }),
    props: {
      source: String
    },
    methods: {
     sideDrawerLog(){
        this.console.log(this)
     }
    }
  }
</script>

<style>
#inspire {
background: #E6DADA;  /* fallback for old browsers */
background: -webkit-linear-gradient(to bottom, #274046, #E6DADA);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to bottom, #274046, #E6DADA); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

</style>