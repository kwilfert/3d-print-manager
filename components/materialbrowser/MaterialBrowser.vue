<script setup>
import {getMaterials} from "~/clients/materialclient.js";
import {ref} from "vue";
import MaterialBrowserItem from "~/components/materialbrowser/MaterialBrowserItem.vue";

const useResin = ref(false);

const materials = ref([]);

const selectMaterial = (material) => {
  console.log("Selected Material " + JSON.stringify(material));
};

onMounted(
    async () => {
      getMaterials().then((response) => {
        if (response.data) {
          materials.value = response.data;
        }
      });
    }
)

</script>

<template>
  <v-card>
    <v-container>
      <v-row justify="center">
        <v-btn-toggle v-model="useResin" class="ma-3" divided>
          <v-btn prepend-icon="mdi-flask" text="UV-Polymer"/>
          <v-btn append-icon="mdi-printer-3d" text="Filament"/>
        </v-btn-toggle>
      </v-row>
      <v-row>

        <v-col v-for="material in materials" cols="6">
          <material-browser-item :material="material" @onSelect="selectMaterial"/>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<style scoped>

</style>