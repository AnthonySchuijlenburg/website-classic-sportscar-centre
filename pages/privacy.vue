<script lang="ts" setup>
definePageMeta({
  title: "Privacy",
});

const lanes: Array<string> = [
  "information",
  "use_of_cookies",
  "sharing",
  "security",
  "consent",
  "changes",
  "contact",
];
</script>

<template>
  <div class="relative isolate px-6 py-14 pb-16 lg:px-8">
    <div class="mx-auto max-w-2xl py-8 sm:py-12 md:max-w-4xl lg:py-16">
      <div>
        <h1
          class="text-4xl text-center font-bold tracking-tight text-gray-900 sm:text-6xl"
        >
          {{ $t("privacy.title") }}
        </h1>
        <p class="text-sm mt-4 text-center text-gray-500">
          {{ $t("privacy.latest_update") }}
        </p>
        <p class="mt-8 text-lg leading-8 text-gray-700">
          {{ $t("privacy.content") }}
        </p>
      </div>

      <TextLane v-for="lane in lanes" :key="lane" :name="`privacy.${lane}`" />
    </div>
  </div>
</template>
