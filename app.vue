<template>
  <v-app>
    <page-header/>
    <sidebar-navigation/>
    <v-main>
      <nuxt-page/>
    </v-main>
    <page-footer/>
  </v-app>
</template>
<script lang="js" setup>
import PageFooter from "~/components/layout/PageFooter.vue";
import PageHeader from "~/components/layout/PageHeader.vue";
import SidebarNavigation from "~/components/layout/SidebarNavigation.vue";
</script>