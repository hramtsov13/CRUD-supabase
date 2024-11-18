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
    <div
      v-for="post in smoothiesStore.smoothiesList"
      :key="post.id"
      class="rounded-md border border-gray-400 px-4 py-6"
    >
      <h2 class="mb-2 text-sm font-semibold leading-4">
        {{ post.title }}
      </h2>

      <p class="text-muted-foreground">
        {{ post.method }}
      </p>
    </div>
  </div>
</template>
