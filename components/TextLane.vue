<script setup lang="ts">
defineProps<{
  name: string;
}>();
</script>

<template>
  <div class="py-2">
    <h2 class="text-lg font-bold tracking-tight text-gray-900 sm:text-xl">
      {{ $t(`${name}.title`) }}
    </h2>
    <div class="mt-1 text-gray-600">
      <p>
        {{ $t(`${name}.content`) }}
      </p>
    </div>
  </div>
</template>
