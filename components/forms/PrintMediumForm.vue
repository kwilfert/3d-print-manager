<script lang="ts" setup>
const printmedium_base = ref(0)
</script>

<template>
  <v-card flat title="Printmedium">
    <v-row justify="center">
      <v-btn-toggle v-model="printmedium_base" class="ma-3">
        <v-btn prepend-icon="mdi-flask" text="UV-Polymer"/>
        <v-btn append-icon="mdi-printer-3d" text="Filament"/>
      </v-btn-toggle>
    </v-row>
    <v-row>
      <v-img src="~/assets/images/Elegoo-Saturn-2.webp"></v-img>
      <v-col>
        <p class="text-justify">Resin, auch genant "Harz" oder wissenschaftlich "UV-Polymer", wird meist für filigrane Figuren oder
          unbewegliche 3D-Modelle verwendet. Die hohe Präzision eines Polymer-Druckers ermöglicht es, kleinste Details
          im Mikrometerbereich
          darzustellen. Viele Polymere sind jedoch ziemlich brüchig und nicht für den Außenbereich geeignet. Bei
          entsprechend großen Modellen muss das Modell ausgehöhlt und Löcher an unauffälliger Stelle erstellt werden, um
          das noch flüssige Polymer ablaufen zu lassen, da die Figur sonst später zu Bruch gehen kann. Polymere sind
          generell nicht lebensmittelecht.</p>
      </v-col>
    </v-row>
  </v-card>
</template>

<style scoped>

</style>