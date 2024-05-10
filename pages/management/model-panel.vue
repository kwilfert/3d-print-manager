<script setup>
import ModelCreationModal from "~/components/modelbrowser/ModelCreationModal.vue";
import {deleteModel, getModels} from "~/clients/modelsclient.js";
import $swal from "sweetalert2";

const models = ref([]);


const dialog = ref(false);
const model = ref({});

const table_loading = ref(true);
const headers = [
  {title: "Modellname", key: "name"},
  {title: "Preis(€)", key: "price"},
  {title: "Thumbnail", key: "thumbnailPath"},
  {title: "Actions", key: "actions"}];

onMounted(async () => {
  loadModels()
});

const loadModels = () => {
  table_loading.value = true
  getModels().then((response) => {
    if (response.data) {
      console.log(response.data);
      models.value = response.data;
    }
  }).finally(
      () => {
        table_loading.value = false;
      }
  )
}

const editItem = (item) => {
  model.value = item
  dialog.value = true
}

const deleteItem = (item) => {
  $swal.fire({
    title: "Sicher?",
    text: "Diese Daten können nicht wieder hergestellt werden",
    icon: "warning",
    showConfirmButton: true,
    showCancelButton: true,
    confirmButtonText: "Löschen",
    cancelButtonText: "Abbrechen",
  }).then((result) => {
    // delete if deletion is confirmed
    if (result.isConfirmed) {
      deleteModel(item.id).then((response) => {
        if (response) {
          console.log("Deleted model: " + item.id);
          models.value = models.value.filter((i) => i.id !== item.id)
          loadModels();
        }
      })
    }
  });
}

</script>

<template>
  <v-data-table-server :headers="headers" :items="models" :loading="table_loading" show-select>
    <template v-slot:top>
      <v-toolbar flat title="Model Browser">
        <v-spacer></v-spacer>
        <v-divider class="mx-4" inset vertical/>
        <model-creation-modal :editModel="model" @on-model-created="loadModels"/>
      </v-toolbar>
    </template>
    <template v-slot:item.thumbnailPath="{ value }">
      <v-img :src="value" cover height="45" width="45"/>
    </template>
    <template v-slot:loading>
      <v-skeleton-loader type="table-row@10"/>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon
          class="me-2"
          size="small"
          @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
          size="small"
          @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
  </v-data-table-server>
</template>

<style scoped>

</style>