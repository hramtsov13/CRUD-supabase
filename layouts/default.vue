<script setup lang="ts">
import { NAV_ITEMS } from '@/constants/nav';
import { cn } from '@/lib/utils';

const route = useRoute();

const isLinkActive = (link: string) => {
  return link === route.path;
};
</script>

<template>
  <header class="bg-slate-900">
    <div class="container">
      <nav class="space-x-4 py-6">
        <NuxtLink
          v-for="link in NAV_ITEMS"
          :key="link.link"
          :href="link.link"
          :aria-label="`Link to ${link.title} page`"
          :class="cn('font-light text-white underline', { 'text-muted-foreground': isLinkActive(link.link) })"
        >
          {{ link.title }}
        </NuxtLink>
      </nav>
    </div>
  </header>

  <div class="container py-10">
    <slot />
  </div>
</template>
