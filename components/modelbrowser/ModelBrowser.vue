<script lang="js" setup>
import {ref} from "vue";
import ModelBrowserItem from "~/components/modelbrowser/ModelBrowserItem.vue";
import {getModels} from "~/clients/modelsclient.js";
import ModelBrowserItemModal from "~/components/modelbrowser/ModelBrowserItemModal.vue";

const browser_items = ref([]);

const selectedModel = ref(null);

const selectModel = (model) => {
  console.log(JSON.stringify(model, null, 2));
  selectedModel.value = model;
};

// TODO: Add Model ID to PATH URL to get selected model, maybe add share button to model modal
onMounted(async () => {
  getModels().then((response) => {
    if (response.data) {
      browser_items.value = response.data;
    }
  });
});

</script>
<template>
  <v-container>
    <v-row>
      <v-col v-for="item in browser_items" cols="12" lg="3" md="4" sm="6">
        <model-browser-item :model="item" @onSelect="selectModel"/>
      </v-col>
    </v-row>
    <model-browser-item-modal @on-close="selectedModel = null" :selectedModel="selectedModel" />
  </v-container>
</template>
<style scoped>

</style>