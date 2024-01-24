<script lang="js" setup>
import ModelBrowser from "~/components/modelbrowser/ModelBrowser.vue";
import {humanReadableFileSize} from "~/utils/formattingUtils.js";

const emit = defineEmits(['update:modelValue'])

const is_custom_model = ref(0);

// model browser selection
const model_browser_selection = ref(null);

// custom model file in input
const model_file = ref(null);

watch(model_file, (newVal) => {
  emit('on_custom_model', newVal);
});

watch(model_browser_selection, (newVal) => {
  emit('on_catalogue_model', newVal);
});
</script>

<template>
  <v-card title="Model" variant="flat">
    <v-card-text>
      <v-row>
        <v-col cols="12">
          <p class="text-justify">
            Wähle aus einer Liste vordefinierter Modelle aus oder lade ein eigenes Modell im .stl-Format hoch
          </p>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-btn-toggle v-model="is_custom_model" class="ma-3">
          <v-btn text="Katalog"/>
          <v-btn text="Sonderdruck"/>
        </v-btn-toggle>
      </v-row>
      <v-row>
        <template v-if="is_custom_model===0">
          <v-col cols="12">
            <p>Die hier dargestellten Modelle sind bereits mit Stützen versehen und liegen zum Drucken bereit. Somit
              können diese günstig und schnell gefertigt werden. Diese Modelle sind jeweils in einer spezifischen Größe
              verfügbar.</p>
            <p>Wir arbeiten stetig am Ausbau unseres Katalogs. Interesse, ein Modell in unserem Shop zu veröffentlichen?
              Kontaktiere uns per E-Mail und wir helfen gerne weiter!</p>
          </v-col>
          <v-col cols="12">
            <model-browser v-model="model_browser_selection"/>
          </v-col>
        </template>
        <template v-if="is_custom_model===1">
          <v-col cols="12">
            <p>Schon ein spezifisches Modell im Sinn? Hier kann eine .stl-Datei oder ein Archiv angegeben werden, die
              anderswo erworben
              wurde. Viele kreative Köpfe modellieren beruflich in ihrer Freizeit, weshalb wir darum bitten stets beim
              ursprünglichen Ersteller des Modells zu kaufen.</p>
            <v-file-input
                v-model="model_file"
                :clearable="true"
                accept=".stl,.zip,.rar,.7zip,.gz"
                class="mt-4"
                density="compact"
                label="STL-Datei oder Archiv hierher ziehen oder klicken"
                prepend-icon="mdi-paperclip"
                variant="outlined"
            />
            <v-alert type="info">Ist beim Resindruck das Setzen manueller Stützen nötig, um ein gutes Ergebnis zu gewährleisten, wirkt sich
              das auf die Bearbeitungszeit aus.
            </v-alert>
          </v-col>
          <template v-if="model_file !== null">
            <v-col cols="12" md="6">
              <v-list>
                <v-list-item :title="model_file[0].name" subtitle="Modell-/Archivname"/>
                <v-list-item :title="humanReadableFileSize(model_file[0].size)" subtitle="Größe"/>
                <v-list-item :title="new Date(model_file[0].lastModified).toLocaleDateString()"
                             subtitle="Zuletzt bearbeitet"/>
              </v-list>
            </v-col>
            <v-col cols="6" md="6">
              <!-- // TODO: show preview with 3d plugin -->
            </v-col>
          </template>
        </template>
      </v-row>
    </v-card-text>
  </v-card>
</template>
<style scoped>
</style>