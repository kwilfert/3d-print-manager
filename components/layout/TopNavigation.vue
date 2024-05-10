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
  <v-container fluid class="border">
    <v-row justify="center">
      <v-col v-for="nav in navigation" :key="nav.label" class="text-center" cols="auto">
        <div class="inline-block align-middle font-semibold ps-2 pe-2">
          <nuxt-link :to="nav.path" class="font-bold">{{ nav.label }}</nuxt-link>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

</style>