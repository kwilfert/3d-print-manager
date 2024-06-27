<script lang="ts" setup>
import InstaWidget from "~/components/misc/InstaWidget.vue";
import insta_qr from "~/assets/images/kaywilfert_qr.png"

useHead(
    {
      title: 'KAW-Prints - Gallery',
    }
)
</script>
<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <p class="text-h4 font-bold text-center mb-8">Instagram Webauftritt</p>
      </v-col>
      <v-col cols="12" sm="6">
        <p class="text-h5 font-weight-bold">Ich bin auch auf Instagram</p>
        <p class="text-body mt-4">Hier drucke, bemale, und experimentiere ich, und sehe, was mit dem Hobby 3D-Druck so
          alles möglich ist. Da es mein persönlicher Account ist, mischt sich auch ein wenig Privatleben mit ein</p>
        <p class="text-body mt-4">Hier kannst Du auch gerne mit mir in Kontakt treten</p>
      </v-col>
      <v-col cols="12" sm="6" class="justify-center justify-sm-end d-flex">
        <v-img :src="insta_qr" alt="Instagram-QR-Code" max-width="200"/>
      </v-col>
    </v-row>
    <!-- VVV Dont know why, but this layout only has the correct color, when the theme is set to light for this component -->
    <InstaWidget class="mt-8" theme="light"/>
    <!-- ^^^ -->
  </v-container>
</template>

<style scoped>

</style>