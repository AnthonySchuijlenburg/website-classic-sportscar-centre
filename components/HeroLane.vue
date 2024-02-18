<script setup lang="ts">
import { filename } from "pathe/utils";

interface HeroImage {
  default: string;
}

const glob: Record<string, Promise<HeroImage>> = import.meta.glob(
  "@/assets/images/heroes/*.jpg",
  { eager: true },
);
const images: Record<string, string> = Object.fromEntries(
  await Promise.all(
    Object.entries(glob).map(async ([key, valuePromise]) => {
      const value = await valuePromise;
      return [filename(key), value.default];
    }),
  ),
);

const count = computed(() => {
  return Object.keys(images).length;
});
</script>

<template>
  <Swiper
    class="relative"
    :modules="[SwiperAutoplay, SwiperEffectCreative]"
    :slides-per-view="1"
    :loop="true"
    :effect="'creative'"
    :pagination="true"
    :autoplay="{
      delay: 8000,
      disableOnInteraction: false,
    }"
    :creative-effect="{
      prev: {
        shadow: false,
        translate: ['-20%', 0, -1],
      },
      next: {
        translate: ['100%', 0, 0],
      },
    }"
  >
    <SwiperSlide v-for="image in count" :key="image">
      <template #fallback> Loading... </template>
      <ClientOnly>
        <img class="brightness-90" :src="images[`${image}`]" alt="hero" />
      </ClientOnly>
    </SwiperSlide>

    <SwiperControls />
  </Swiper>
</template>
