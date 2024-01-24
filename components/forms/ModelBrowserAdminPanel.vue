<template>
  <v-row>
    <!-- Display all items -->
    <v-col v-for="item in items" :key="item._id" cols="12">
      <v-row>
        <p>{{ item.name }}</p>
        <v-img :src="'data:' + item.image.contentType + ';base64,' + item.image.data.toString('base64')"
               alt="Item Image"/>
        <!-- Add other fields as needed -->
        <v-btn @click="editItem(item._id)">Edit</v-btn>
        <v-btn @click="removeItem(item._id)">Delete</v-btn>
      </v-row>
    </v-col>

    <v-container>
      <v-row>
        <v-col cols="6">
          <v-text-field v-model="formData.name" label="Bezeichnung" placeholder="Name" required type="text"
                        variant="outlined"/>
        </v-col>
        <v-col cols="6">
          <v-file-input v-model="formData.image" accept="image/*" label="Thumbnail" required type="file"
                        variant="outlined"/>
        </v-col>
        <v-col cols="6">
          <v-text-field v-model="formData.price" label="Preis(€)" placeholder="Price" required type="number"
                        variant="outlined"/>
        </v-col>
        <v-col cols="12">
          <v-textarea v-model="formData.description" label="Beschreibung" multiline placeholder="Description"
                      required type="text"
                      variant="outlined"/>
        </v-col>
        <v-col class="text-center" cols="6">
          <v-btn color="primary" @click="saveItem">Speichern</v-btn>
        </v-col>
        <v-col class="text-center" cols="6">
          <v-btn color="error" @click="resetForm">Abbrechen</v-btn>
        </v-col>
      </v-row>
    </v-container>

    <!-- Add Item Button -->
    <v-btn @click="showForm = true">Add Item</v-btn>
  </v-row>
</template>

<script lang="js" setup>


import {
  createModelBrowserItem,
  deleteModelBrowserItem,
  getModelBrowserItems,
  updateModelBrowserItem
} from "~/services/modelBrowserItemsClient.js";

const items = ref([]);
const showForm = ref(false);
const formData = ref({
  name: "",
  description: "",
  image: null,
  price: 1.00,
  _id: null
});

const saveItem = async () => {
  try {
    // Create a new item if formData has no _id, otherwise update the existing item
    if (!formData.value._id) {
      createModelBrowserItem(formData.value).then((response) => {
        console.log(formData.value.name);
        console.log(formData.value.price);
        if (response.data) {
          formData.value._id = response.data._id;
          items.value.push(formData.value);
        } else {
          console.error("Failed to create item:", response);
        }
      }).catch((error) => {
        console.error("Error creating item:", error);
      })
    } else {
      updateModelBrowserItem(formData.value).then((response) => {
        if (response.data) {
          const index = items.value.findIndex((item) => item._id === formData.value._id);
          if (index !== -1) {
            items[index] = formData.value;
          } else {
            console.error("Failed to update item:", response);
          }
        }
      }).catch((error) => {
        console.error("Error updating item:", error);
      })
    }
    resetForm();
  } catch (error) {
    console.error(error);
  }
};

const editItem = (itemId) => {
  const selectedItem = items.value.find((item) => item._id === itemId);
  if (selectedItem) {
    formData.value = selectedItem;
    showForm.value = true;
  }
};

const removeItem = async (itemId) => {
  try {
    deleteModelBrowserItem(itemId).then((response) => {
      if (response.data) {
        items.value = items.value.filter((item) => item._id !== itemId);
      } else {
        console.error("Failed to delete item:", response);
      }
    }).catch((error) => {
      console.error("Error deleting item:", error);
    })
  } catch (error) {
    console.error(error);
  }
};

const resetForm = () => {
  formData.value = {
    name: "",
    description: "",
    image: null,
    price: 0,
  };
  showForm.value = false;
};

onMounted(() => {
  getModelBrowserItems().then((response) => {
    if (response.data) {
      console.log(response.data)
      items.value = response.data;
    }
  }).catch((error) => {
    console.error("Error fetching items:", error.message);
  })
})
</script>

<style scoped>

</style>