<script setup lang="ts">
const switchLocalePath = useSwitchLocalePath();
const { locale } = useI18n();
</script>

<template>
  <footer class="bg-white w-full rounded-lg shadow mx-auto">
    <div
      class="w-full mx-auto p-6 md:flex md:items-center md:justify-between max-w-3xl md:max-w-4xl lg:px-0"
    >
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400"
        >© {{ new Date().getFullYear() }}
        <span class="font-medium">{{ $t("brand") }}</span>
        {{ $t("all_rights_reserved") }}
      </span>

      <div class="flex gap-4 mt-4 md:mt-0">
        <button
          class="border rounded px-2 py-1"
          :class="{ 'border-blue-800': locale === 'en' }"
        >
          <NuxtLink :to="switchLocalePath('en')">🇬🇧 {{ $t("en") }}</NuxtLink>
        </button>
        <button
          class="border rounded px-2 py-1"
          :class="{ 'border-blue-800': locale === 'nl' }"
        >
          <NuxtLink :to="switchLocalePath('nl')">🇳🇱 {{ $t("nl") }}</NuxtLink>
        </button>
        <button
          class="border rounded px-2 py-1"
          :class="{ 'border-blue-800': locale === 'de' }"
        >
          <NuxtLink :to="switchLocalePath('de')">🇩🇪 {{ $t("de") }}</NuxtLink>
        </button>
      </div>
    </div>
  </footer>
</template>
