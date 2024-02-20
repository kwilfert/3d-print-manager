<script setup>

import rules from "~/components/misc/validation/modelCreationFormValidation.js";
import {getTags} from "~/clients/tagclient.js";
import {createModel} from "~/clients/modelsclient.js";


// dialog controls
const dialog = ref(false);
const tags_loading = ref(false);
const submit_loading = ref(false);

const reset = () => {
  name.value = '';
  price.value = 9.99;
  creator.value = '';
  creatorSocials.value = '';
  thumbnailFile.value = [];
  imageFiles.value = [];
  chosenTags.value = [];
  description.value = '';
}


const emits = defineEmits(['onModelCreated'])

// tags
const tags = ref([]);
const tags_strings = computed(() => {
  return tags.value.map((tag) => {
    return {title: tag.name, value: tag.id}
  })
})
const loadTags = () => {
  tags_loading.value = true
  getTags()
      .then((response) => {
        if (response.data) {
          tags.value = response.data;
        }
      })
      .finally(() => {
        tags_loading.value = false
      })
}

// form data
const name = ref('');
const price = ref(9.99);
const creator = ref('');
const creatorSocials = ref('');
const thumbnailFile = ref();
const imageFiles = ref();
const chosenTags = ref([]);
const description = ref('');
const modelFiles = ref([]);

const submitModel = () => {
  submit_loading.value = true

  // TODO: validation

  const modelData = {
    name: name.value,
    price: price.value,
    author: creator.value,
    description: description.value,
    creator: creator.value,
    creatorSocials: creatorSocials.value,
    thumbnail: thumbnailFile.value[0],
    images: imageFiles.value,
    tags: chosenTags.value
  };


  const formData = new FormData();

  for (const key in modelData) {
    if (key === 'images') {
      for (let img of imageFiles.value) {
        formData.append('images', img);
      }
      for (let img of modelFiles.value) {
        formData.append('model_files', img);
      }
    } else formData.append(key, modelData[key]);
  }


  // submit
  createModel(formData)
      .then((response) => {
        if (response.data) {
          emits('onModelCreated', response.data);
        }
        reset();
        dialog.value = false;
      })
      .catch((error) => {
        // TODO: Pass error to user (with snackbar?)
        console.error('Could not create model: ', JSON.stringify(error.response.data));

      })
      .finally(() => {
        submit_loading.value = false
      })
}

watch(dialog, (newVal) => {
  if (newVal) {
    loadTags()
  }
});

const props = defineProps(
    {
      editModel: Object
    }
)

watch(props.editModel, (newVal) => {
  if (newVal) {
    name.value = newVal.name;
    price.value = newVal.price;
    creator.value = newVal.author;
    creatorSocials.value = newVal.creatorSocials;
    description.value = newVal.description;
    chosenTags.value = newVal.tags;
    modelFiles.value = newVal.model_files;
    imageFiles.value = newVal.images;
    thumbnailFile.value = [newVal.thumbnail];
  }
})
const createImgURL = (file) => URL.createObjectURL(file);

</script>

<template>
  <v-row justify="center">
    <v-dialog
        v-model="dialog"
        persistent
        width="1024">
      <template v-slot:activator="{ props }">
        <v-btn
            color="primary"
            text="Neues Modell"
            v-bind="props"/>
      </template>
      <v-card>
        <v-overlay
            :model-value="submit_loading"
            class="align-center justify-center">
          <v-progress-circular
              :size="64"
              color="primary"
              indeterminate
          />
        </v-overlay>
        <v-card-title class="text-h5">Neues 3D Modell anlegen</v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                  cols="12"
                  md="6"
              >
                <v-text-field
                    v-model="name"
                    :rules="rules.name_rules"
                    label="Titel*"
                    prepend-icon="mdi-format-title"
                    required
                    variant="outlined"/>
                <v-text-field v-model="creator" :rules="rules.author_rules" label="Ersteller*"
                              prepend-icon="mdi-account"
                              required variant="outlined"/>
                <v-text-field
                    v-model="creatorSocials"
                    hint="Patreon, Twitter, Instagram, etc."
                    label="Ersteller Socials"
                    prepend-icon="mdi-earth"
                    required
                    variant="outlined"/>
                <v-file-input
                    v-model="modelFiles"
                    :rules="rules.modelFiles_rules"
                    accept=".obj,.stl,.zip,.rar,.7zip,.gz"
                    counter
                    label="3D-Modell/Teile*"
                    multiple
                    persistent-hint
                    prepend-icon="mdi-cube"
                    required
                    show-size
                    variant="outlined"/>

              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                    v-model="price"
                    :rules="rules.price_rules"
                    label="Preis (€)*"
                    max="999,99"
                    min="1,00"
                    prepend-icon="mdi-currency-eur"
                    required
                    step="0.01"
                    suffix="€"
                    type="number"
                    variant="outlined"/>
                <v-textarea v-model="description" label="Beschreibung*" required rows="8"
                            variant="outlined"/>
              </v-col>
              <v-col
                  cols="12">
                <v-autocomplete
                    v-model="chosenTags"
                    :items="tags_strings"
                    :loading="tags_loading"
                    auto-select-first
                    hide-selected
                    item-text="name"
                    item-value="id"
                    label="Tags"
                    multiple
                    prepend-icon="mdi-tag-multiple-outline"
                    variant="outlined"/>
              </v-col>
              <v-col
                  cols="12"
                  sm="6"
              >
                <v-file-input
                    v-model="thumbnailFile"
                    accept="image/png, image/jpeg"
                    chips
                    counter
                    hint="Vorschaubild des Modells im Modellbrowser, Erstes Bild in der Galerie"
                    label="Model Thumbnail*"
                    persistent-hint
                    required
                    show-size
                    single-line
                    variant="outlined"
                />
              </v-col>
              <v-col
                  cols="12"
                  sm="6"
              >
                <v-file-input
                    v-model="imageFiles"
                    accept="image/png, image/jpeg"
                    chips
                    counter
                    hint="Detaillierte Portrait-Modellbilder, zeigen Modell selbst oder gedrucktes Produkt"
                    label="Galerie-Bilder"
                    multiple
                    persistent-hint
                    required
                    show-size
                    single-line
                    variant="outlined"/>
              </v-col>
              <v-col class="d-flex justify-center" cols="6">
                <v-img v-if="thumbnailFile" :alt="thumbnailFile.name" :src="createImgURL(thumbnailFile[0])"/>
              </v-col>

              <v-col class="d-flex justify-center" cols="6">
                <v-carousel v-if="imageFiles?.length" :show-arrows="imageFiles?.length > 1" height="auto"
                            hide-delimiter-background>
                  <v-carousel-item v-for="(img, index) in imageFiles" :key="index">
                    <v-img :src="createImgURL(img)" alt="Galerie-Bild"/>
                  </v-carousel-item>
                </v-carousel>
              </v-col>
            </v-row>
          </v-container>
          <small>*Pflichtfelder</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer/>
          <v-btn
              color="red-darken-1"
              text="Abbrechen"
              variant="text"
              @click="dialog = false"/>
          <v-btn
              color="blue-darken-1"
              text="Speichern"
              variant="text"
              @click="submitModel"/>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<style scoped>

</style>