<script lang="ts" setup>
const { t: $t } = useI18n();

useSeoMeta({
  title: $t("service.title"),
});

const lanes = ["routine", "inspection", "parts", "service"];

interface Image {
  default: string;
}

const glob: Record<string, Promise<Image>> = import.meta.glob(
  "@/assets/images/service/*.jpg",
  { eager: true },
);

const images: Record<string, string> = await useAssetFilePaths(glob);
</script>

<template>
  <InfoPage
    :title="$t('service.title')"
    :intro="$t('service.intro')"
    :cta="$t('service.cta')"
  >
    <ImageLane
      v-for="(lane, index) in lanes"
      :key="lane"
      :name="`service.${lane}`"
      :align-text-right="false"
      :image-url="images[index + 1]"
    />
  </InfoPage>
</template>
