<script lang="js" setup>
import PageFooter from "~/components/layout/PageFooter.vue";
import PageHeader from "~/components/layout/PageHeader.vue";

useHead(
    {
      title: 'KAW-Prints - Home',
    }
)
</script>
<template>
  <v-app theme="dark">
    <PageHeader/>
    <v-main>
      <nuxt-page/>
    </v-main>
    <PageFooter/>
  </v-app>
</template>