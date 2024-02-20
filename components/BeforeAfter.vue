<script setup lang="ts">
defineProps<{
  name: string;
  images: Array<string>;
}>();
</script>

<template>
  <div class="text-center mt-6">
    <h2 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
      {{ $t(`${name}.before_and_after.title`) }}
    </h2>
    <p class="mt-2 text-lg leading-8 text-gray-700">
      {{ $t(`${name}.before_and_after.content`) }}
    </p>

    <div class="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
      <img
        class="w-full object-cover aspect-video rounded-sm"
        :src="images[0]"
        alt="Image"
      />
      <img
        class="w-full object-cover aspect-video rounded-sm"
        :src="images[1]"
        alt="Image"
      />
    </div>
  </div>
</template>
