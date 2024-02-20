<script setup>
import PrintMediumForm from "~/components/forms/PrintMediumForm.vue";
import ModelForm from "~/components/forms/ModelForm.vue";
import SchedulingForm from "~/components/forms/SchedulingForm.vue";
import CheckoutForm from "~/components/forms/CheckoutForm.vue";

const order = ref({});

const setTargetDate = (date) => {
  order.value.target_date = date;
}
const setCatalogueModelData = (data) => {
  order.value.catalogue_model = data;
}

const setCustomModelData = (data) => {
  order.value.custom_model = data;
}

const setPrintMediumData = (data) => {
  order.value.print_medium = data;
}

const processOrder = () => {

}

watch(order, (newVal) => {
  console.log(JSON.stringify(newVal, null, 2));
});

</script>

<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12">
        <v-stepper :items="['Model', 'Printmedium', 'Zeitraum','Kompensation']" class="mx-auto" max-width="1000">
          <template v-slot:item.1>
            <model-form @on-catalogue-model="setCatalogueModelData" @on-custom-model="setCustomModelData"/>
          </template>

          <template v-slot:item.2>
            <print-medium-form @on-print-medium-change="setPrintMediumData"/>
          </template>

          <template v-slot:item.3>
            <scheduling-form @on-date-change="setTargetDate"/>
          </template>
          <template v-slot:item.4>
            <checkout-form :order="order"/>
          </template>
        </v-stepper>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

</style>