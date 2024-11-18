<script setup lang="ts">
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';

import Form from './form.vue';

interface Props {
  isOpen: boolean;
}

const emit = defineEmits(['onSubmit', 'onClose']);

const { isOpen } = defineProps<Props>();
</script>

<template>
  <Dialog modal :open="isOpen" @update:open="emit('onClose')">
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Create new smoothie</DialogTitle>
        <DialogDescription> Click save when you're done. </DialogDescription>
      </DialogHeader>

      <Form @onSubmit="emit('onSubmit')" />
    </DialogContent>
  </Dialog>
</template>
