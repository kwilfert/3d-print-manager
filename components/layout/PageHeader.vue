<script lang="ts" setup>
import TopNavigation from "~/components/layout/TopNavigation.vue";
// Banner attribution, as per freepik guide:
// Image by <a href="https://www.freepik.com/free-vector/wavy-luxury-abstraction-gradient-violet-tones_6437524.htm#from_view=detail_alsolike">Freepik</a>
import banner from "~/assets/images/3302177.jpg";
</script>

<template>
  <v-sheet>
    <!--Parallax Background and Page Title -->
    <v-parallax :src="banner" class="banner">
      <nuxt-link to="/management" class="management-button text-decoration-none">
        <v-icon icon="mdi-cog"/>
        <span class="management-text font-weight-bold">Adminbereich</span>
      </nuxt-link>
      <div class="ms-5 mt-10">
        <div class="ms-5 mt-10 text-white font-weight-bold">
          <p class="text-h4">
            <span class="text-decoration-underline">KAW-Prints</span><span class="d-none d-sm-block">3D-Druck mit Harz und Seele</span>
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

.management-button {
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  background-color: #333;
  padding: 10px;
  border-radius: 10px;
  transition: width 0.3s, background-color 0.3s;
  width: 45px; /* initial width to fit only the icon */
  overflow: hidden;
}

.management-button:hover {
  width: 160px; /* expanded width to fit the icon and text */
  background-color: #444;
}

.management-text {
  color: white;
  margin-left: 10px;
  white-space: nowrap;
  transition: transform 0.3s;
  transform: translateX(100%);
  opacity: 0;
}

.management-button:hover .management-text {
  transform: translateX(0);
  opacity: 1;
}

.banner {
  @media (max-width: 600px) {
    height: 200px;
  }

  @media (min-width: 600px) {
    height: 300px;
  }
}
</style>