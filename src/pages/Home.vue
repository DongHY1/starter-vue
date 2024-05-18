<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { useCounterStore } from '@/stores/useCounterStore'
import { useTodoList } from '@/api'

const counterStore = useCounterStore()
const { data, isPending, isError, error } = useTodoList()
</script>

<template>
  <div>
    <span v-if="isPending">pending....</span>
    <span v-else-if="isError">Error: {{ error?.message }}</span>
    <ScrollArea v-else class="h-72 w-48 rounded-md border">
      <div class="p-4">
        <h4 class="mb-4 text-sm font-medium leading-none">
          Todos
        </h4>

        <div v-for="todo in data" :key="todo.id">
          <div class="text-sm">
            {{ todo.title }}
          </div>
          <Separator class="my-2" />
        </div>
      </div>
    </ScrollArea>
    <div class="w-full flex justify-center items-center mt-4">
      <Button @click="counterStore.increment">
        Add 1 in About router
      </Button>
    </div>
  </div>
</template>
