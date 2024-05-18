<script setup lang="ts">
import { VueQueryDevtools } from '@tanstack/vue-query-devtools'
import { Button } from '@/components/ui/button'
</script>

<template>
  <div class="w-full h-screen  flex justify-center items-center flex-col gap-y-4">
    <div>My Vue Starter</div>
    <div class="flex gap-x-4">
      <Button>
        <RouterLink to="/">
          Go to Home
        </RouterLink>
      </Button>
      <Button>
        <RouterLink to="/about">
          Go to About
        </RouterLink>
      </Button>
    </div>
    <RouterView />
    <VueQueryDevtools position="right" />
  </div>
</template>
