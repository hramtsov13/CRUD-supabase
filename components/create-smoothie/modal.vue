<script setup lang="ts">
import type { Smoothie } from '~/stores/smoothies/types';

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';

import Form from './form.vue';

interface Props {
  isOpen: boolean;
  smoothie: Smoothie | null;
}

const emit = defineEmits(['onSubmit', 'onClose']);

const { isOpen, smoothie } = defineProps<Props>();

const onSubmit = (values: any) => {
  emit('onSubmit', values);
};
</script>

<template>
  <Dialog modal :open="isOpen" @update:open="emit('onClose')">
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Create new smoothie</DialogTitle>
        <DialogDescription> Click save when you're done. </DialogDescription>
      </DialogHeader>

      <Form :smoothie="smoothie" @onSubmit="onSubmit" />
    </DialogContent>
  </Dialog>
</template>
