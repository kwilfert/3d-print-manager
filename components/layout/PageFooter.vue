<script lang="js" setup>
const links = [
  {href: '/impressum', label: 'Impressum'},
  {href: '/datenschutz', label: 'Datenschutz'},
  {href: '/contact', label: 'Kontakt'},
  {href: '/about-us', label: 'Über uns'}
]
</script>

<template>
  <v-footer app>
    <v-row justify="center" no-gutters>
      <v-btn
          v-for="link in links"
          :key="link.href"
          class="mx-2"
          variant="text"
          @click="navigateTo(link.href)"
      >
        {{ link.label}}
      </v-btn>
      <v-col class="text-center mt-4" cols="12">
        {{ new Date().getFullYear() }} — <strong>KAW-Prints</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<style scoped>

</style>