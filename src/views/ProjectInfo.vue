<template>
    <section >

 <v-layout class="tester" text-xs-center wrap>
      <v-flex mb-4 ma-2 white>
        <BudgetCard></BudgetCard>
      </v-flex>
    </v-layout>

       <v-layout text-xs-center wrap>
      <v-flex mb-4 ma-2 white>
        <OverallRiskCard></OverallRiskCard>
      </v-flex>
      <v-flex mb-4 ma-2 white>
        <MoraleCard></MoraleCard>
      </v-flex>
      <v-flex mb-4 ma-2 white>
          <VelocityCard></VelocityCard>
      </v-flex>
    </v-layout>

     <v-layout text-xs-center wrap>
      <v-flex mb-4 ma-2 white>
        <QaCard></QaCard>
      </v-flex>
    </v-layout>
  </section>
</template>

<script>
import VelocityCard from "@/components/VelocityCard";
import OverallRiskCard from "@/components/OverallRiskCard";
import BudgetCard from "@/components/BudgetCard";
import MoraleCard from "@/components/MoraleCard";
import QaCard from "@/components/QaCard";
export default {
  components: {
    VelocityCard,
    OverallRiskCard,
    BudgetCard,
    MoraleCard,
    QaCard
  }
};
</script>

<style>

</style>