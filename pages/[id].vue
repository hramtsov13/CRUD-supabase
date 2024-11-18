<script setup lang="ts">
import useSmoothiesStore from '~/stores/smoothies/index';
import type { Smoothie } from '~/stores/smoothies/types';

const smoothiesStore = useSmoothiesStore();
const route = useRoute();
const smoothie = ref<Smoothie | null>(null);

const { refresh } = await useAsyncData('smoothie', async () => {
  const res = await smoothiesStore.findSmoothie(Number(route.params.id));

  if (res) {
    smoothie.value = res;
  }
});
</script>

<template>
  <div v-if="smoothie" class="space-y-4">
    <h1 class="text-2xl"><b>Title:</b> {{ smoothie.title }}</h1>

    <p class="text-xl"><b>Consists of:</b> {{ smoothie.method }}</p>

    <p v-if="smoothie.rating" class="text-xl"><b>Rating:</b> {{ smoothie.rating }}</p>
  </div>

  <div v-else>Nothing has been found</div>
</template>
