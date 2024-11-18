<script setup lang="ts">
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

import type { Props } from './types';

const emit = defineEmits(['onEditClick']);
const { smoothie } = defineProps<Props>();
</script>

<template>
  <NuxtLink :href="`/${smoothie.id}`">
    <Card class="relative transition-colors duration-150 hover:cursor-pointer hover:border-purple-500">
      <CardHeader class="items-top flex-row justify-between">
        <CardTitle class="h-16 max-w-[60%]">
          {{ smoothie.title }}
        </CardTitle>

        <Button @click.prevent variant="outline" size="icon" @click="emit('onEditClick', smoothie)">
          <IconsEditIcon class="h-6 w-6" />
        </Button>
      </CardHeader>

      <CardContent class="h-16">
        {{ smoothie.method }}
      </CardContent>

      <CardFooter class="absolute -right-4 -top-4 rounded-full bg-green-400 px-4 py-2">
        <span class="block h-full">{{ smoothie.rating ?? '-' }}</span>
      </CardFooter>
    </Card>
  </NuxtLink>
</template>
