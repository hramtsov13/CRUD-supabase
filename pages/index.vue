<script setup lang="ts">
import useSmoothiesStore from '~/stores/smoothies/index';
import type { Smoothie } from '~/stores/smoothies/types';

const CreateSmoothieModal = defineAsyncComponent(() => import('@/components/create-smoothie/modal.vue'));

const smoothiesStore = useSmoothiesStore();

const { refresh } = await useAsyncData('smoothies', async () => {
  await smoothiesStore.fetchAllSmoothies();

  return smoothiesStore.smoothiesList;
});

const isCreateModalVisible = ref(false);

const toggleCreateModal = () => {
  isCreateModalVisible.value = !isCreateModalVisible.value;
};

const onSubmit = async (smoothie: Smoothie) => {
  if (clickedSmoothie.value) {
    await smoothiesStore.updateSmoothie(clickedSmoothie.value.id, smoothie);

    clickedSmoothie.value = null;

    toggleCreateModal();
    await refresh();

    return;
  }

  await smoothiesStore.createSmoothie(smoothie);

  toggleCreateModal();
  await refresh();
};

const clickedSmoothie = ref<Smoothie | null>(null);

const onUpdateSmoothieClick = async (smoothie: Smoothie) => {
  clickedSmoothie.value = smoothie;
  toggleCreateModal();
};
</script>

<template>
  <div>
    <Button @click="toggleCreateModal">Add new smoothie</Button>
    <CreateSmoothieModal
      :isOpen="isCreateModalVisible"
      :smoothie="clickedSmoothie"
      @onSubmit="onSubmit"
      @onClose="toggleCreateModal"
    />
  </div>

  <Separator class="my-10" label="Smoothies" />

  <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
    <Smoothie
      v-for="smoothie in smoothiesStore.smoothiesList"
      :key="smoothie.id"
      :smoothie="smoothie"
      @onEditClick="onUpdateSmoothieClick"
    />
  </div>
</template>
