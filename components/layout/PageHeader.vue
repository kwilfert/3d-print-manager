<script lang="ts" setup>
import TopNavigation from "~/components/layout/TopNavigation.vue";
import banner from "~/assets/images/3302177.jpg";
</script>

<template>
  <v-sheet>
    <!--Parallax Background and Page Title -->
    <v-parallax :src="banner" class="banner">
      <div class="ms-5 mt-10">
        <div class="ms-5 mt-10 text-white font-weight-bold">
          <p class="text-h4">
            <span class="text-decoration-underline">KAW-Prints</span><span class="d-none d-sm-block">3D-Druck mit Herz und Seele</span>
          </p>
          <p class="mt-2 text-h5 d-none d-sm-block">
            Print-on-Demand-Service für Filament und UV-Harz
          </p>
        </div>
      </div>
      <!--Nav bar with centered nav items in nuxt. Should stick to bottom of header -->
      <TopNavigation class="position-absolute bottom-0"/>
    </v-parallax>
  </v-sheet>
</template>

<style scoped>
.banner {
  @media (max-width: 600px) {
    height: 200px;
  }

  @media (min-width: 600px) {
    height: 300px;
  }
}
</style>