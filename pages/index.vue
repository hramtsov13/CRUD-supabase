<script setup lang="ts">
import useSmoothiesStore from '~/stores/smoothies/index';

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

const onNewSmoothieCreated = async () => {
  toggleCreateModal();
  await refresh();
};
</script>

<template>
  <div>
    <Button @click="toggleCreateModal">Add new smoothie</Button>
    <CreateSmoothieModal :isOpen="isCreateModalVisible" @onSubmit="onNewSmoothieCreated" @onClose="toggleCreateModal" />
  </div>

  <Separator class="my-10" label="Smoothies" />

  <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
    <Smoothie v-for="smoothie in smoothiesStore.smoothiesList" :key="smoothie.id" :smoothie="smoothie" />
  </div>
</template>
