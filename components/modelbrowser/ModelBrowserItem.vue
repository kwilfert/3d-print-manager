<script setup>

defineProps({
  item: Object,
  selected: Boolean
})
</script>

<template>
  <v-card
      :variant="selected ? 'outlined' : 'elevated'"
  >
    <v-img
        :cover="true"
        :src="item.imagePath"
        aspect-ratio="1"
        class="grey lighten-2 border-b"
    >
      <template v-slot:placeholder>
        <v-row align="center" class="fill-height" justify="center">
          <v-col class="text-center">
            <v-progress-circular color="grey lighten-5" indeterminate/>
          </v-col>
        </v-row>
      </template>
      <template v-slot:error>
        <v-row align="center" class="fill-height" justify="center">
          <v-col class="text-center">
            <v-icon size="50">mdi-image-off</v-icon>
            <h4 class="text-center">Fehler beim Laden des Bildes</h4>
          </v-col>
        </v-row>
      </template>
      <v-icon v-if="selected" color="green" size="50">mdi-check-circle-outline</v-icon>
    </v-img>
    <v-row class="pa-4">
      <v-col cols="8">
        <h3>{{ item.name }}</h3>
      </v-col>
      <v-col cols="4">
        <h3 class="text-green text-right text-no-wrap">{{ item.price }} €</h3>
      </v-col>
      <v-col cols="12">
        <p>{{ item.notes }}</p>
      </v-col>
    </v-row>
  </v-card>
</template>

<style scoped>
</style>