<template>
  <v-card>
       <v-toolbar color="light-blue" class="layout justify-center" dark>
          <v-toolbar-title>Low Risk</v-toolbar-title>
          <v-spacer></v-spacer>
      </v-toolbar>
    <v-expansion-panel v-model="panel" dark expand>
      <v-expansion-panel-content 
        v-for="(section, n) in project"
        :value="n==currSection"
        :key="`expansion-${n}`"
        @input="onInput($event, n)"
        @focus="$emit($event, n)"
      >
        <template v-slot:header title>
          <div>
            {{section.title}}   
          </div>
           <v-badge color="green" class="mr-4">
               <template v-slot:badge>
                <span></span>
              </template>
              </v-badge>
        </template>
        <v-card>
          <v-data-table :headers="headers" :items="desserts" class="elevation-1">
            <template v-slot:items="props">
              <td>{{ props.item.name }}</td>
              <td class="text-xs-right">{{ props.item.stats}}</td>
              <!-- <td class="text-xs-right">{{ props.item.fat }}</td> -->
              <!-- <td class="text-xs-right">{{ props.item.carbs }}</td> -->
              <!-- <td class="text-xs-right">{{ props.item.protein }}</td> -->
              <!-- <td class="text-xs-right">{{ props.item.iron }}</td> -->
            </template>
          </v-data-table>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-card>
</template>

<script>

export default {
  components: {
   
  },
  data() {
    return {
       project: [
      {
        complete: true,
        title: "BEAT PORT",
        fields: [
        ]
      },
      {
        complete: false,
        title: "SPHERO"
      },
      {
        complete: false,
        title: "CSA",
        "Info": "This is where the field set fields will go."
      }
    ],
      // panel: [false, true, true]
      headers: [
        {
          text: "Metric",
          align: "left",
          sortable: false,
          value: "name"
        },
        { text: "Stat", 
          align: "right",
          value: "calories" }
      ],
      desserts: [
        {
          name: "Risk Rating",
          stats: "10GA"
        },
        {
          name: "Budget Used",
          stats: "23%"
        },
        {
          name: "Project Completion",
          stats: "62%"
        }
      ]
    };
  }
};
</script>

<style scoped>

</style>