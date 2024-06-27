<script setup>
const router = useRouter();

const navigateTo = (path) => {
  router.push(path)
}

useHead(
    {
      title: 'KAW-Prints - Administration',
    }
)

// Add more functions for other sub-pages
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="4">
        <v-card color="blue-lighten-1" prepend-icon="mdi-printer-3d" title="Modellverwaltung">
          <v-card-text>
            <v-btn text=">> Zur Modellverwaltung" variant="text" @click="navigateTo('/management/modelpanel')"/>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="4">
        <v-card color="red" prepend-icon="mdi-atom-variant" title="Materialsortiment">
          <v-card-text>
            <v-btn text=">> Zur Materialverwaltung" variant="text" @click="navigateTo('/management/materialpanel')"/>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="4">
        <v-card color="green" prepend-icon="mdi-image" title="Galerieverwaltung">
          <v-card-text>
            <v-btn text=">> Zur Galerieverwaltung" variant="text" @click="navigateTo('/management/gallerypanel')"/>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

</style>