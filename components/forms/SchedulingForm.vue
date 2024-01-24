<script setup>

import {humanReadableTimespan} from "~/utils/formattingUtils.js";

const selectedDate = ref(null);
const highPrioTimespanInDays = 7;
const normalPrioTimeSpanInDays = 14;
const lowPrioTimespanInDays = 21;

const e = defineEmits(
    ['onDateChange']
)

const dateRanges = computed(() => {
  const today = new Date();
  const highPrioDate = new Date(today.getTime() + highPrioTimespanInDays * 24 * 60 * 60 * 1000);
  const normalPrioDate = new Date(today.getTime() + normalPrioTimeSpanInDays * 24 * 60 * 60 * 1000);
  const lowPrioDate = new Date(today.getTime() + lowPrioTimespanInDays * 24 * 60 * 60 * 1000);

  console.log(today, highPrioDate, normalPrioDate, lowPrioDate)

  return [
    {startDate: highPrioDate, endDate: normalPrioDate, color: 'yellow'},
    {startDate: normalPrioDate, endDate: lowPrioDate, color: 'blue'},
    {startDate: lowPrioDate, endDate: null, color: 'green'},
  ];
});

watch(selectedDate, (newDate) => {
      e('onDateChange', newDate)
    }
);

</script>

<template>
  <v-card title="Wunschdatum">
    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="12" md="6">
            <!-- Use this later on, when I found out how to highlight different date spans in different colors
            : <custom-date-picker v-model="selectedDate" :highlightedDates="dateRanges" :min="minDate"/> -->
            <v-date-picker v-model="selectedDate"
                           :elevation="3" :min="new Date(dateRanges[0].startDate.getTime() - (24 * 60 * 60 * 1000))"
                           locale="de-DE"/>
          </v-col>
          <v-col cols="12" md="6">
            <!-- list three types of possible target date priorities here: high priority, normal priority, low priority as listed in custom date picker component -->
            <v-alert type="info">
              Je nach ausgewähltem Wunschdatum wird ein Preisfaktor festgelegt. Die Preise werden in der Reihenfolge der
              Priorität angezeigt.
              <br>
              <br>
              <strong>Hohe Priorität:</strong><br> {{ humanReadableTimespan(dateRanges [0]) }}, Preisfaktor 1.35
              <br>
              <strong>Normale Priorität:</strong><br> {{ humanReadableTimespan(dateRanges [1]) }}, Preisfaktor 1
              <br>
              <strong>Niedrige Priorität:</strong><br> {{ humanReadableTimespan(dateRanges [2]) }}, Preisfaktor 0.9
            </v-alert>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<style scoped>

</style>