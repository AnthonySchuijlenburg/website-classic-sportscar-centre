<script lang="ts" setup>
const { t: $t } = useI18n();

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

const images: Record<string, string> = await useAssetFilePaths(glob);
</script>

<template>
  <InfoPage
    :title="$t('restoration.title')"
    :intro="$t('restoration.intro')"
    :cta="$t('restoration.cta')"
  >
    <ImageLane
      v-for="(lane, index) in lanes"
      :key="lane"
      :name="`restoration.${lane}`"
      :align-text-right="index % 2 !== 0"
      :image-url="images[index + 1]"
    />

    <BeforeAfter
      name="restoration"
      :images="[images['before'], images['after']]"
    />
  </InfoPage>
</template>
