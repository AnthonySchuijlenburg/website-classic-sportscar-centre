<script setup lang="ts">
const swiper = useSwiper();
</script>

<template>
  <button
    class="absolute top-1/2 left-1 transform -translate-y-1/2 z-10 text-blue-800 hover:text-blue-500"
    @click="swiper.slidePrev()"
  >
    <IconChevronLeft class="h-12 w-12" />
  </button>
  <button
    class="absolute top-1/2 right-1 transform -translate-y-1/2 z-10 text-blue-800 hover:text-blue-500"
    @click="swiper.slideNext()"
  >
    <IconChevronRight class="h-12 w-12" />
  </button>
</template>
