<script setup lang="ts">
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import Form from './form.vue';
</script>

<template>
  <Dialog modal>
    <DialogTrigger>
      <Button>Add new smoothie</Button>
    </DialogTrigger>

    <DialogContent>
      <DialogHeader>
        <DialogTitle>Create new smoothie</DialogTitle>
        <DialogDescription> Click save when you're done. </DialogDescription>
      </DialogHeader>

      <Form />
    </DialogContent>
  </Dialog>
</template>
