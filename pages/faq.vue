<script lang="ts" setup>
const generalFAQ = [
  {
    icon: 'mdi-diamond-outline',
    question: 'Welche Qualität kann ich erwarten?',
    answer: 'Die gefertigten Objekte sind sorgfältig vorbereitet, gedruckt und nachbearbeitet worden. Da der Großteil dieses Prozesses jedoch individuelle Handarbeit ist, können kleinere Defekte während des Herstellungsprozesses manchmal nicht vermieden werden. Natürlich tue ich mein Bestes, um solche Fälle zu verhindern.'
  },
  {
    icon: 'mdi-package-variant',
    question: 'Wie werden die Waren verpackt?',
    answer: 'Je nach Zerbrechlichkeit der gedruckten Objekte kommen Verpackungsmaterialien wie Luftpolsterfolie, Styroporchips, Papier, und natürlich Kartons zum Einsatz, damit sie die Reise zu dir zu unbeschadet zu überstehen.'
  },
  {
    icon: 'mdi-food-outline',
    question: 'Sind gedruckte Modelle lebensmittelecht?',
    answer: 'Gedrucktes Thermoplastik und bestimmtes UV-Harz können lebensmittelecht sein. Jedoch sind die winzigen Nischen und Rillen bei Kontakt mit Lebensmitteln problematisch, da sich in ihnen Bakterien und Schimmel bilden können. Ich übernehme keinerlei Verantwortung für den Kontakt der Drucke mit Lebensmitteln und den daraus resultierenden Folgen.'
  },
  {
    icon: 'mdi-brush-outline',
    question: 'Kann ich meinen Druck bemalt bestellen?',
    answer: 'Leider ist das Bemalen von gedruckten Objekten sehr zeitaufwändig und kann deshalb in meinem Shop nicht angeboten werden. Für gedruckte Objekte aus UV-Harz ist jedoch eine helle oder dunkle Grundierung beim Kaufprozess auswählbar.'
  },
];
</script>

<template>
  <v-container>
    <v-row>
      <v-col>
        <div class="text-h4 font-bold text-center">Häufig gestellte Fragen</div>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12">
        <v-expansion-panels>
          <v-expansion-panel
              v-for="(item, index) in generalFAQ"
              :key="index"
          >
            <v-expansion-panel-title>
              <v-icon class="mr-3">{{ item.icon }}</v-icon>
              {{ item.question }}
            </v-expansion-panel-title>
            <v-expansion-panel-text>{{ item.answer }}</v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.v-expansion-panel-title {
  font-weight: bold;
}
</style>
