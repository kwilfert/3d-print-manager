<script lang="ts" setup>
const printmedium_base = ref(0)
</script>

<template>
  <v-card title="Printmedium" variant="flat">
    <v-container>
      <v-row justify="center">
        <v-btn-toggle v-model="printmedium_base" class="ma-3">
          <v-btn prepend-icon="mdi-flask" text="UV-Polymer"/>
          <v-btn append-icon="mdi-printer-3d" text="Filament"/>
        </v-btn-toggle>
      </v-row>
      <v-row class="text-justify">
        <template v-if="printmedium_base === 0">
          <v-col cols="12" sm="6">
            <v-img src="~/assets/images/Elegoo-Saturn-2.webp"/>
          </v-col>
          <v-col cols="12" sm="6">
            <p>Resin, auch genant "Harz" oder wissenschaftlich "UV-Polymer", wird meist für filigrane Figuren oder
              unbewegliche 3D-Modelle verwendet. Die hohe Präzision eines Polymer-Druckers ermöglicht es, kleinste
              Details im Mikrometerbereich darzustellen. Viele Polymere sind jedoch ziemlich brüchig und nicht für den
              Außenbereich geeignet. Bei entsprechend großen Modellen müssen das Modell ausgehöhlt und Löcher an
              unauffälliger Stelle erstellt werden, um das noch flüssige Polymer ablaufen zu lassen, da die Figur sonst
              später durch eingeschlossenes Harz zu Bruch gehen kann. Ist das Platzieren von Abflusslöchern nicht
              möglich, so muss solide gedruckt werden. Polymere sind generell nicht lebensmittelecht.</p>
          </v-col>
        </template>
        <template v-if="printmedium_base === 1">
          <v-col cols="12" order="2" order-sm="1" sm="6">
            <p>Filament-Drucker arbeiten mit auf Spulen aufgewickeltem Plastikfilament.
              Gerade in den letzten Jahren hat sich die Präzision traditioneller 3D Drucker und der daraus entstehende
              Qualitätsgrad der Drucke enorm gesteigert. Die unterschiedlichen Filamente ermöglichen eine Reihe
              verschiedener Anwendungen des fertigen Drucks. Darunter das Erstellen beweglicher Modelle, Werkzeug,
              robuste Prototypen und witterungsbeständige Outdoorobjekte und natürlich Dekoration. Einige Filamente sind
              sogar lebensmittelecht und somit unbedenklich beim Kontakt mit Lebensmitteln</p>
          </v-col>
          <v-col cols="12" order="1" order-sm="2" sm="6">
            <v-img src="~/assets/images/Elegoo-Neptune-4-Plus.webp"/>
          </v-col>
        </template>
        <v-col cols="12">
          <v-divider/>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<style scoped>

</style>