<script setup lang="ts">
import useSmoothiesStore from '~/stores/smoothies/index';

definePageMeta({
  layout: 'default',
});

const smoothiesStore = useSmoothiesStore();

await useAsyncData('posts', async () => {
  await smoothiesStore.fetchAllSmoothies();

  return smoothiesStore.smoothiesList;
});
</script>

<template>
  <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
    <Smoothie v-for="smoothie in smoothiesStore.smoothiesList" :key="smoothie.id" :smoothie="smoothie" />
  </div>
</template>
