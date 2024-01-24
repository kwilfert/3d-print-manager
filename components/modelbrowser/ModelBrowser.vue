<script lang="js" setup>
import {ref, watch} from "vue";
import ModelBrowserItem from "~/components/modelbrowser/ModelBrowserItem.vue";
import {getModels} from "~/clients/modelsclient.js";

const emit = defineEmits(['update:modelValue'])

const browser_items = ref([]);

const selectedId = ref(null);

watch(selectedId, (newVal) => {
  emit('update:modelValue', newVal);
});

onMounted(async () => {
  getModels().then((response) => {
    console.log(JSON.stringify(response, null, 2));
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
        <model-browser-item :selected="selectedId === item.id" :item="item" @click="selectedId = selectedId === item.id ? null : item.id"/>
      </v-col>
    </v-row>
  </v-container>
</template>
<style scoped>

</style>