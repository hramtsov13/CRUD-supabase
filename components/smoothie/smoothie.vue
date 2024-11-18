<script setup lang="ts">
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

import type { Props } from './types';

const { smoothie } = defineProps<Props>();
</script>

<template>
  <Card class="relative">
    <CardHeader>
      <CardTitle class="h-12">
        {{ smoothie.title }}
      </CardTitle>
    </CardHeader>

    <CardContent class="h-16">
      {{ smoothie.method }}
    </CardContent>

    <CardFooter class="absolute -right-4 -top-4 rounded-full bg-green-400 px-4 py-2">
      <span class="block h-full">{{ smoothie.rating ?? '-' }}</span>
    </CardFooter>
  </Card>
</template>
