<script setup>

import swal from "sweetalert2";

const catalogueOrder = ref([]);
const specialOrder = ref([]);

const calculateCosts = () => {
  // get costs of order
  // get costs of material for model size x model count
  // get costs of shipping for model size (or flat fee of like 5 EUR)


  // Placeholder:
  const obj = {name: 'Testobject', size: 'medium', amount: 1, total: 5.99};
  catalogueOrder.value.push(obj);

  const specialPurchase = {
    name: 'Special',
    size: 'large',
    amount: 1,
    total: 12.99
  }
  specialOrder.value.push(specialPurchase);
}

onMounted(async () => {
  calculateCosts();
});


const submitOrders = () => {
  // send both catalogue Orders and special Orders to backend
  // must contain the ids of the orders to be submitted and the user and with that payment info
  // open modal to let the user know they can check for order status by entering their order number

  // send order to backend asynchronously, then...

  swal.fire({
    title: 'Bestellung erfolgreich abgesendet!',
    text: 'Eine Bestellbestätigung wird an die angegebene E-Mail-Adresse gesendet. Sie können den Status ihrer Bestellung jederzeit prüfen.',
    icon: 'success',
    confirmButtonText: 'Ok',
  }).then(
      () => {
        // send
        navigateTo({path: '/'})
      }
  )
}
</script>

<template>
  <v-card title="Kasse">
    Auflistung der Kosten
    <ol>
      <li>Katalog-Modell-kosten immer pauschal, Sonderdruck stets nach Größe und Filament</li>
      <li>Menge der Figuren (Bulk bestellung? überhaupt erlauben?)</li>
      <li>Druckkosten als Faktor von Größe und Filament/Resin</li>
      <li>Versandkosten abhängig von Größe, Tracking soll immer dabei sein (oder 6,99EUR pauschal mit Tracking?)</li>
      <li>Wichtig: "Kostenpflichtig bestellen" button</li>
    </ol>
    <v-card-text>
      <h3>Katalogkäufe</h3>
      <v-divider/>
      <v-row v-for="order in catalogueOrder" justify="space-between">
        <v-col>
          {{ order.name }}, {{ order.size }}
        </v-col>
        <v-col>
          {{ order.amount }} Stück
        </v-col>
        <v-col class="text-right">
          {{ order.total }} EUR
        </v-col>
      </v-row>
      <v-row justify="end">
        <v-col class="text-right">
          Zwischensumme: {{ catalogueOrder.reduce((a, b) => a + b.total, 0) }} EUR
        </v-col>
      </v-row>
      <br>
      <v-divider/>
      <h3>Sonderanfertigungen</h3>
      <v-row v-for="order in specialOrder" justify="space-between">
        <v-col>
          {{ order.name }}, {{ order.size }}
        </v-col>
        <v-col>
          {{ order.amount }} Stück
        </v-col>
        <v-col class="text-right">
          {{ order.total }} EUR
        </v-col>
      </v-row>
      <v-row justify="end">
        <v-col class="text-right">
          Zwischensumme: {{ specialOrder.reduce((a, b) => a + b.total, 0) }} EUR
        </v-col>
      </v-row>
      <v-row justify="end">
        <v-col class="text-right">
          <b>Gesamtsumme:</b> {{
            catalogueOrder.reduce((a, b) => a + b.total, 0) + specialOrder.reduce((a, b) => a + b.total, 0)
          }} EUR
        </v-col>
      </v-row>

      <br>
      <v-row justify="end">
        <v-btn color="primary" @click="submitOrders">Bestellung kostenpflichtig absenden</v-btn>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<style scoped>

</style>