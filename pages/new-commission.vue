<script setup>
import PrintMediumForm from "~/components/forms/PrintMediumForm.vue";
import ModelForm from "~/components/forms/ModelForm.vue";
import SchedulingForm from "~/components/forms/SchedulingForm.vue";

const commissionData = ref({});

const setTargetDate = (date) => {
  commissionData.value.target_date = date;
}
const setCatalogueModelData = (data) => {
  commissionData.value.catalogue_model = data;
}

const setCustomModelData = (data) => {
  commissionData.value.custom_model = data;
}

const setPrintMediumData = (data) => {
  commissionData.value.print_medium = data;
}

watch(commissionData, (newVal) => {
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
            <v-card title="Kasse">
              Auflistung der Kosten
              <ol>
                <li>Katalog-Modell-kosten immer pauschal, Sonderdruck stets nach Größe und Filament</li>
                <li>Menge der Figuren (Bulk bestellung? überhaupt erlauben?)</li>
                <li>Druckkosten als Faktor von Größe und Filament/Resin</li>
                <li>Versandkosten abhängig von Größe, Tracking soll immer dabei sein (oder 6,99EUR pauschal mit Tracking?)</li>
                <li>Wichtig: "Kostenpflichtig bestellen" button</li>
              </ol>
            </v-card>
          </template>
        </v-stepper>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

</style>