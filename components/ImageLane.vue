<script setup lang="ts">
defineProps<{
  name: string;
  imageUrl: string;
  alignTextRight?: boolean;
}>();
</script>

<template>
  <div class="mt-6 py-4">
    <h2 class="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
      {{ $t(`${name}.title`) }}
    </h2>
    <div class="mt-1 grid grid-cols-1 gap-4 text-gray-600 md:grid-cols-2">
      <img
        class="w-full object-cover aspect-video row-start-2 rounded-sm md:row-start-1"
        :class="alignTextRight ? '' : 'md:col-start-2'"
        :src="imageUrl"
        alt="Image"
      />
      <p>
        {{ $t(`${name}.content`) }}
      </p>
    </div>
  </div>
</template>
