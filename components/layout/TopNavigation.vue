<script lang="ts" setup>
const navigation = ref([
  {path: '/home', label: 'Home'},
  {path: '/gallery', label: 'Galerie'},
  {path: '/shop', label: 'Shop'},
  {path: '/3d-printing-basics', label: '3D-Druck Basics'},
  {path: '/about-us', label: 'Über uns'},
])
</script>

<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col v-for="nav in navigation" :key="nav.label" align-self="center" class="text-center" cols="auto">
        <nuxt-link :to="nav.path" active-class="text-decoration-underline"
                   class="font-weight-bold text-white text-decoration-none">
          <div class="align-center px-md-4 px-sm-2 px-1 py-2 rounded-lg bg-semi-transparent">
            {{ nav.label }}

          </div>
        </nuxt-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.bg-semi-transparent {
  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}
</style>