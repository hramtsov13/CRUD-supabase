<script setup lang="ts">
import useSmoothiesStore from '@/stores/smoothies';
import { toTypedSchema } from '@vee-validate/zod';
import { useForm, useIsFormValid } from 'vee-validate';
import * as z from 'zod';

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

const emit = defineEmits(['onSubmit']);

const formSchema = toTypedSchema(
  z.object({
    title: z.string().min(2).max(50),
    method: z.string().min(2).max(250),
    rating: z.optional(z.number().min(1).max(10)),
  }),
);

const { handleSubmit, isSubmitting, resetForm } = useForm({
  validationSchema: formSchema,
});

const isFormValid = useIsFormValid();

const smoothiesStore = useSmoothiesStore();

const onSubmit = handleSubmit(async (values) => {
  await smoothiesStore.createSmoothie({ ...values });

  resetForm();
  emit('onSubmit');
});
</script>

<template>
  <form @submit="onSubmit">
    <div class="space-y-2">
      <FormField v-slot="{ componentField }" name="title">
        <FormItem>
          <FormLabel>Title</FormLabel>

          <FormControl>
            <Input type="text" placeholder="Hell sour cherry monster" v-bind="componentField" />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>

      <FormField v-slot="{ componentField }" name="method">
        <FormItem>
          <FormLabel>Description</FormLabel>

          <FormControl>
            <Input type="text" placeholder="Consists from gas and fire" v-bind="componentField" />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>

      <FormField v-slot="{ componentField }" name="rating">
        <FormItem class="max-w-[50%]">
          <FormLabel>Rating</FormLabel>

          <FormControl>
            <Input type="number" placeholder="1-10" v-bind="componentField" />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
    </div>

    <Button type="submit" :disabled="isSubmitting || !isFormValid" class="mt-6"> Save </Button>
  </form>
</template>
