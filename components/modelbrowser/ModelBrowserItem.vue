<script setup>

const props = defineProps({
  model:
  {
    type: Object,
    default: null
  }
})

const emit = defineEmits ([
  'onSelect'
])

</script>

<template>
  <v-card variant="elevated" @click="emit( 'onSelect', props.model)">
    <v-img
        :cover="true"
        :src="props.model.thumbnailPath"
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
    </v-img>
    <v-row class="pa-4">
      <v-col cols="8">
        <h3>{{ props.model.name }}</h3>
      </v-col>
      <v-col cols="4">
        <h3 class="text-green text-right text-no-wrap">{{ props.model.price }} €</h3>
      </v-col>
      <v-col cols="12">
        <p>{{ props.model.notes }}</p>
      </v-col>
    </v-row>
  </v-card>
</template>

<style scoped>
</style>