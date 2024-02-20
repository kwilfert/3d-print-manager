<script setup>

const props = defineProps({
  material:
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
  <v-card variant="elevated" @click="emit( 'onSelect', props.material)">
    <v-img
        :cover="true"
        :src="props.material.imagePath"
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
      <v-col cols="12">
        <h4>{{ props.material.name }}</h4>
      </v-col>
      <v-col cols="12" align-self="end">
        <h3 class="text-green text-right text-no-wrap">+ {{ props.material.price }} €</h3>
      </v-col>
      <v-col cols="12">
        <p v-for="attribute in props.material.attributes">- {{ attribute }}</p>
      </v-col>
    </v-row>
  </v-card>
</template>

<style scoped>

</style>