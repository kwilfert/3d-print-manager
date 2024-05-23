<script lang="js" setup>
import PageFooter from "~/components/layout/PageFooter.vue";
import PageHeader from "~/components/layout/PageHeader.vue";
</script>
<template>
  <v-app>
    <PageHeader/>
    <v-main>
      <nuxt-page/>
    </v-main>
    <PageFooter/>
  </v-app>
</template>