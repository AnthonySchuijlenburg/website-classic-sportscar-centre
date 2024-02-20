<script lang="ts" setup>
const { t: $t } = useI18n();
const localePath = useLocalePath();

useSeoMeta({
  title: $t("restoration.title"),
});

const lanes = [
  "comprehensive_assessment",
  "authenticity_and_quality",
  "craftsmanship",
  "process",
  "customer_satisfaction",
];

interface Image {
  default: string;
}

const glob: Record<string, Promise<Image>> = import.meta.glob(
  "@/assets/images/restoration/*.jpg",
  { eager: true },
);

const images = await useAssetFilePaths(glob);
</script>

<template>
  <div class="relative isolate px-6 py-14 pb-16 lg:px-8">
    <div class="mx-auto max-w-2xl py-8 sm:py-12 md:max-w-4xl lg:py-16">
      <div class="text-center">
        <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          {{ $t("restoration.title") }}
        </h1>
        <p class="mt-6 text-lg leading-8 text-gray-700">
          {{ $t("restoration.intro") }}
        </p>
      </div>

      <ImageLane
        v-for="(lane, index) in lanes"
        :key="lane"
        :name="`restoration.${lane}`"
        :align-right="index % 2 !== 0"
        :image-url="images[index + 1]"
      />

      <div class="text-center mt-6">
        <h2 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          {{ $t("restoration.before_and_after.title") }}
        </h2>
        <p class="mt-2 text-lg leading-8 text-gray-700">
          {{ $t("restoration.before_and_after.content") }}
        </p>

        <div class="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
          <img
            class="w-full object-cover aspect-video rounded-sm"
            src="@/assets/images/restoration/before.jpg"
            alt="Image"
          />
          <img
            class="w-full object-cover aspect-video rounded-sm"
            src="@/assets/images/restoration/after.jpg"
            alt="Image"
          />
        </div>
      </div>

      <hr class="mt-6" />

      <div class="text-center mt-6">
        <h2 class="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
          {{ $t("contact_us") }}
        </h2>
        <p class="mt-2 text-lg leading-8 text-gray-700">
          {{ $t("restoration.cta") }}
          <NuxtLink
            :to="localePath('/contact')"
            class="font-semibold leading-6 text-gray-900 hover:underline hover:text-gray-600"
          >
            {{ $t("contact_us") }} <span aria-hidden="true">→</span>
          </NuxtLink>
        </p>
      </div>
    </div>
  </div>
</template>
