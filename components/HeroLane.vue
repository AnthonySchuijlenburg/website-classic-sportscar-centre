<script setup lang="ts">
interface Image {
  default: string;
}

const glob: Record<string, Promise<Image>> = import.meta.glob(
  "@/assets/images/heroes/*.jpg",
  { eager: true },
);

const images: Record<string, string> = await useAssetFilePaths(glob);

const count = computed(() => {
  return Object.keys(images).length;
});
</script>

<template>
  <Swiper
    class="relative w-full"
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
        <img
          class="brightness-90 w-full max-h-[64rem] object-cover"
          :src="images[`${image}`]"
          alt="hero"
        />
      </ClientOnly>
    </SwiperSlide>

    <SwiperControls />
  </Swiper>
</template>
