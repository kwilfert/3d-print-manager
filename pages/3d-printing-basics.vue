<script lang="ts" setup>
import fdm_img from '~/assets/images/61NEKs5QsmL.png';
import resin_img from '~/assets/images/creality_cl_103l_halot_mage_3d_printer_1763114.png';

useHead(
    {
      title: 'KAW-Prints - 3D-Druck-Basiswissen',
    }
)

const links = [
  {title: 'CheersBar - 3D-Druck-Tutorials auf YouTube', url: 'https://www.youtube.com/c/CheersBar'},
  {title: 'Wikipedia - 3D-Druck', url: 'https://de.wikipedia.org/wiki/3D-Druck'},
  {title: 'All3DP - Nachrichten und Leitfäden zum 3D-Druck', url: 'https://all3dp.com/de/'}
]
</script>


<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="10">
        <v-card class="my-5">
          <v-card-title class="text-3xl font-bold text-center">3D-Druck-Basiswissen</v-card-title>
          <v-card-text class="text-xl mt-5">
            Da es unser Hobby ist, was wir hier zum Beruf machen, sind wir begeistert für das Thema 3D-Drucken und sehen
            in unserem Webauftritt auch eine Möglichkeit, unsere Besucher über dieses Thema aufzuklären und häufige
            Missverständnisse aus dem Weg zu räumen.
          </v-card-text>
        </v-card>

        <!-- Filament Printing Section -->
        <v-card class="my-5 card-gradient-lr">
          <v-row>
            <v-col cols="12" md="6">
              <!-- center this vertically-->
              <v-img :src="fdm_img" class="mt-5 mb-5" height="350px"></v-img>
            </v-col>
            <v-col cols="12" md="6">
              <v-card-title class="text-2xl font-bold">Filamentdruck (FDM)</v-card-title>
              <v-card-text class="text-lg">
                Der Filamentdruck, auch bekannt als Fused Deposition Modeling (FDM), ist die am häufigsten verwendete
                Methode des 3D-Drucks. Bei diesem Verfahren wird ein thermoplastischer Faden, das Filament, geschmolzen
                und Schicht für Schicht auf eine Bauplattform aufgetragen. Zu den Vorteilen des FDM-Drucks gehören die
                kostengünstigen Materialien und die einfache Bedienung.
                <br><br>
                <b>Typische Materialien:</b> PLA, ABS, PETG, TPU
                <br>
                <b>Vorteile:</b> Günstig, vielseitig, einfach zu bedienen
                <br>
                <b>Nachteile:</b> Weniger feine Details, Schichtlinien sichtbar
              </v-card-text>
            </v-col>
          </v-row>
        </v-card>

        <!-- Resin Printing Section -->
        <v-card class="my-5">
          <v-row>
            <v-col cols="12" md="6">
              <v-card-title class="text-2xl font-bold">Harzdruck (SLA/DLP)</v-card-title>
              <v-card-text class="text-lg">
                Der Harzdruck, bekannt als Stereolithografie (SLA) oder Digital Light Processing (DLP), verwendet
                flüssiges Harz, das durch Licht ausgehärtet wird, um hochdetaillierte und glatte Oberflächen zu
                erzeugen. Diese Druckmethode ist ideal für Modelle, die feine Details erfordern.
                <br><br>
                <b>Typische Materialien:</b> UV-härtendes Harz
                <br>
                <b>Vorteile:</b> Sehr feine Details, glatte Oberflächen
                <br>
                <b>Nachteile:</b> Teurer, empfindlicher, erfordert Nachbearbeitung (Waschen und Aushärten)
              </v-card-text>
            </v-col>
            <v-col cols="12" md="6">
              <v-img :src="resin_img" class="mt-5 mb-5" height="350px"></v-img>
            </v-col>
          </v-row>
        </v-card>

        <!-- Additional Information Section -->
        <v-card class="my-5">
          <v-card-title class="text-2xl font-bold text-center">Weiterführende Informationen</v-card-title>
          <v-card-text class="text-lg">
            Für weitere Informationen über 3D-Drucktechnologien empfehlen wir die folgenden Ressourcen:

            <v-list class="mt-5">
              <v-list-item v-for="link in links" :key="link.url" :href="link.url" :title="link.title"
                           link prepend-icon="mdi-link" target="_blank"/>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>


<style scoped>
/* linear gradient for v-card, left to right from original theme color to transparent */
.card-gradient-lr {
  background: linear-gradient(90deg, var(--v-theme-surface) 0%, rgba(0,0,0,0) 75%);
}
</style>