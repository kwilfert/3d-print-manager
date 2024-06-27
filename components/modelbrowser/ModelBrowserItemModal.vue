<script lang="ts" setup>
import MaterialBrowser from "~/components/materialbrowser/MaterialBrowser.vue";
import type {PropType} from "vue";
import type {Model} from "~/api-client";

const props = defineProps(
    {
      selectedModel: Object as PropType<Model>,
    }
)
const emits = defineEmits(
    ['onClose']
)
const modelQuantity = ref(1);


const addToCart = () => {
  console.log("Add to cart " + modelQuantity.value + "x Model " + JSON.stringify(props.selectedModel ?? '', null, 3));
}

</script>

<template>
  <v-dialog :model-value="props.selectedModel" max-width="1000px" @click:outside="emits('onClose')">
    <v-card>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="6">
              <v-carousel>
                <!-- show thumbnail for now -->
                <!-- TODO: dont use thumbnail. Use one or more of the full resolution images. Waiting for backend -->
                <v-carousel-item
                    v-for="imgPath in props.selectedModel?.imagePaths"
                    :key="imgPath"
                    :src="imgPath"
                    `/>
              </v-carousel>
            </v-col>
            <v-col cols="6">
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <span class="text-h5">{{ props.selectedModel?.name ?? "Unbekanntes Model" }}</span>
                    <v-spacer/>
                    <span class="text-h5 text-green">{{ props.selectedModel?.price ?? "?" }}€</span>
                  </v-col>
                  <v-col cols="12">
                    <p>{{ props.selectedModel?.description ?? "Keine Beschreibung angegeben." }}</p>
                  </v-col>

                  <!-- Material Browser -->
                  <!-- TODO: Implement Material Browser -->
                  <v-col cols="12">
                    <material-browser/>
                  </v-col>

                  <v-col cols="6">
                    <v-select v-model="modelQuantity" :items="[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]" density="compact"
                              prefix="Menge: "
                              variant="solo"/>
                  </v-col>
                  <v-col cols="6">
                    <v-btn class="ma-1" color="primary" @click="addToCart">In den Einkaufswagen</v-btn>
                  </v-col>
                </v-row>
              </v-container>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<style scoped>
</style>