<template>
  <v-date-picker v-model="selectedDate" elevation="5" text="TEST">
    <template v-slot:date="{ date }">
      <div :style="{ backgroundColor: getBackgroundColor(date) }">
        {{ date }}
      </div>
    </template>
  </v-date-picker>
</template>

<script setup>
import {defineProps, onMounted, ref} from 'vue';

const props = defineProps({
  selectedDate: {
    type: Date
  },
  highlightedDates: {
    type: Array,
    required: true
  }
});

defineEmits(
    ['update:selectedDate']
)

const dateRanges = ref([]);
const selectedDate = ref(null);

const getBackgroundColor = (date) => {
  console.log("Date: " + date);
  const matchingRange = dateRanges.value.find(range => {
    return date >= range.start && date <= range.end;
  });
  console.log("Date: " + date + " " + matchingRange.color);
  return matchingRange ? matchingRange.color : '';
}

onMounted(() => {
  dateRanges.value = props.highlightedDates.map(range => ({
    start: new Date(range.startDate),
    end: new Date(range.endDate),
    color: range.color
  }));
  console.log("DR " + JSON.stringify(dateRanges.value));
});
</script>