<script lang="ts" setup>
import deepmind from "@/assets/images/pexels-google-deepmind-17485708.jpg"
import TopNavigation from "~/components/layout/TopNavigation.vue";
</script>

<template>
  <v-sheet>
    <!--Parallax Background and Page Title -->
    <v-parallax src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg" height="300">
      <div class="inline-block align-middle ms-10 mt-20 text-white font-semibold align-middle">
        <p class="text-4xl">
          <span class="underline">KAW-Prints</span>: 3D-Druck mit Herz und Seele
        </p>
        <p class="mt-2 text-3xl">
          Print-on-Demand-Service für Filament und UV-Harz
        </p>
      </div>
    </v-parallax>
    <!--Nav bar with centered nav items in nuxt. Should stick to bottom of header -->
    <top-navigation/>
  </v-sheet>
</template>

<style scoped>

</style>