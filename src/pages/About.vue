<script setup lang="ts">
import { useCounterStore } from '@/stores/useCounterStore'

const counterStore = useCounterStore()
</script>

<template>
  {{ counterStore.count }}
  about
  {{ counterStore.doubleCount }}
</template>
