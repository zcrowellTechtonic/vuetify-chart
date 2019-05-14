<template>
  <v-container fluid>
    <v-layout text-xs-center wrap>
      <!-- RISK CARD -->
      <v-flex xs8 mb-4 ma-2>
        <OverallRiskCard></OverallRiskCard>
      </v-flex>
      <!-- END RISK CARD -->

      <!-- VELOCITY CARD -->
      <v-flex xs-4 mb-4 ma-2>
        <VelocityCard></VelocityCard>
      </v-flex>
      <!-- END VELOCITY CARD -->
    </v-layout>

    <v-layout text-xs-center wrap>
      <!-- BUDGET CARD -->
      <v-flex xs8 mb-4 ma-2>
        <BudgetCard></BudgetCard>
      </v-flex>
      <!-- END BUDGET CARD -->

      <!--QA card -->
      <v-flex xs-4 mb-4 ma-2>
        <QaCard></QaCard>
      </v-flex>
      <!-- END QA card -->
    </v-layout>

    <v-layout text-xs-center wrap>
      <!-- PRODUCT SUMMARY CARD -->
      <v-flex xs8 mb-4 ma-2>
        <ProductSummaryCard></ProductSummaryCard>
      </v-flex>
      <!-- END PRODUCT SUMMARY -->

      <!-- MORALE CARD  -->
      <v-flex xs-4 mb-4 ma-2>
        <MoraleCard></MoraleCard>
      </v-flex>
      <!-- END MORALE CARD  -->
    </v-layout>
  </v-container>
</template>

<script>
import VelocityCard from "@/components/VelocityCard";
import OverallRiskCard from "@/components/OverallRiskCard";
import BudgetCard from "@/components/BudgetCard";
import ProductSummaryCard from "@/components/ProductSummaryCard";
import MoraleCard from "@/components/MoraleCard";
import QaCard from "@/components/QaCard";
export default {
  components: {
    VelocityCard,
    OverallRiskCard,
    BudgetCard,
    ProductSummaryCard,
    MoraleCard,
    QaCard
  }
};
</script>

<style>


</style>