<script lang="ts" setup>

import PrintMediumForm from "~/components/forms/PrintMediumForm.vue";
</script>

<template>
  <v-container>
    <v-row justify="center">
      <v-col class="mt-auto">
        <v-stepper :items="['Printmedium', 'Model', 'Zeitraum','Kompensation']" max-width="1000" class="mx-auto">
          <template v-slot:item.1>
            <print-medium-form/>
          </template>

          <template v-slot:item.2>
            <v-card title="Model" flat>

            </v-card>
          </template>

          <template v-slot:item.3>
            <v-card title="Zeitraum" flat>

            </v-card>
          </template>
          <template v-slot:item.4>
            <v-card title="Zeitraum" flat>

            </v-card>
          </template>
        </v-stepper>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

</style>