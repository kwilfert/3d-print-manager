<script lang="js" setup>
import $swal from "sweetalert2";

const promptCommissionKey = () => {
  $swal.fire({
    title: "Auftragsnummer angeben",
    input: "text",
    showCancelButton: true,
    cancelButtonText: "Abbrechen",
    confirmButtonText: "Bestätigen",
    inputValidator: (value) => {
      if (!value) {
        return "Keine Auftragsnummer angegeben!";
      }
    }
  }).then((result) => {
    if (result.value) {
      navigateTo({
        path: `/commission/${result.value}`
      })
    }
  })
}

const navigateNewCommission = () => {
  navigateTo('/new-commission')
}
</script>

<template>
  <v-row justify="center">
    <v-col class="my-auto">
      <v-card class="mx-auto" max-width="400" title="Willkommen">
        <v-card-text>
          Auf dieser Seite können neue 3D-Druck-Aufträge erstellt werden. Hier wird auch über den Fortschritt des
          Druckprozesses berichtet.
          <br>
          <br>
          Was ist dein Anliegen?
        </v-card-text>
        <v-card-actions>
          <v-btn prepend-icon="mdi-printer" @click="promptCommissionKey">Druckfortschritt</v-btn>
          <v-btn prepend-icon="mdi-tag" @click="navigateNewCommission">Neuer Auftrag</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<style scoped>

</style>