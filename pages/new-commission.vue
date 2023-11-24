<script lang="ts" setup>

</script>

<template>
  <v-container>
    <v-row justify="center">
      <v-col class="mt-auto">
        <v-stepper :items="['Printmedium', 'Model', 'Zeitraum','Kompensation']">
          <template v-slot:item.1>
            <v-card title="Printmedium" flat>

            </v-card>
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