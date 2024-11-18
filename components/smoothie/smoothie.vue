<script setup lang="ts">
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

import type { Props } from './types';

const emit = defineEmits(['onEditClick', 'onDeleteClick']);
const { smoothie } = defineProps<Props>();
</script>

<template>
  <NuxtLink :href="`/${smoothie.id}`">
    <Card class="relative transition-colors duration-150 hover:cursor-pointer hover:border-purple-500">
      <CardHeader class="items-top flex-row justify-between">
        <CardTitle class="h-16 max-w-[60%]">
          {{ smoothie.title }}
        </CardTitle>
      </CardHeader>

      <CardContent class="h-16">
        {{ smoothie.method }}
      </CardContent>

      <div class="absolute -right-4 -top-4 rounded-full bg-green-400 px-4 py-2">
        <span class="block h-full">{{ smoothie.rating ?? '-' }}</span>
      </div>

      <CardFooter class="gap-2">
        <Button class="flex-1" @click.prevent variant="outline" size="sm" @click="emit('onEditClick', smoothie)">
          Edit <IconsEditIcon class="h-6 w-6" />
        </Button>

        <Button class="flex-1" @click.prevent variant="outline" size="sm" @click="emit('onDeleteClick', smoothie)">
          Delete <IconsDeleteIcon class="h-6 w-6" />
        </Button>
      </CardFooter>
    </Card>
  </NuxtLink>
</template>
