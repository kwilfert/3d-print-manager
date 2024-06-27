<script lang="ts" setup>
import grandpa from "~/assets/images/grandpa.jpeg"

useHead(
    {
      title: 'KAW-Prints - About Us',
    }
)

</script>

<template>
  <v-container max-width="1000">
    <div class="text-3xl font-bold text-center mt-10">Über uns</div>
    <v-row class="mt-10">
      <v-col cols="6">
        <p class="text-semibold text-xl mt-10">Wir sind ein Freundes-Duo aus den Standorten Helmbrechts und Plauen,
          die schon seit Jahren begeistert vom Thema 3D-Druck waren bis ein Spontankauf dann schließlich den Stein ins
          Rollen brachte.
          Nach kurzer Zeit folgten dann weitere Drucker und es taten sich schier endlose Möglichkeiten auf.
          <br>
          Freunde und Bekannte fragten nach Werkzeugen, Bauteilen, Cosplay Props und Pen and Paper Figuren.
        </p>
      </v-col>
      <v-col cols="4">
        <v-img :src="grandpa"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

</style>