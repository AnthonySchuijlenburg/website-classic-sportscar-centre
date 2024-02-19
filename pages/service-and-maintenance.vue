<script lang="ts" setup>
const { t: $t } = useI18n();

useSeoMeta({
  title: $t("service.title"),
});
</script>

<template>
  <div class="relative isolate px-6 py-14 pb-16 lg:px-8">
    <div class="mx-auto max-w-2xl py-8 sm:py-12 md:max-w-4xl lg:py-16">
      <div class="text-center">
        <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          {{ $t("service.title") }}
        </h1>
        <p class="mt-6 text-lg leading-8 text-gray-700">
          {{ $t("service.intro") }}
        </p>
      </div>

      <div class="mt-6 py-4">
        <h2 class="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
          {{ $t("service.routine.title") }}
        </h2>
        <div class="mt-1 grid grid-cols-1 gap-4 text-gray-600 md:grid-cols-2">
          <p>
            {{ $t("service.routine.content") }}
          </p>
          <img
            class="w-full object-cover aspect-video rounded-sm"
            src="@/assets/images/service/1.jpg"
            alt="Image"
          />
        </div>
      </div>

      <div class="py-4">
        <h2 class="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
          {{ $t("service.inspection.title") }}
        </h2>
        <div class="mt-1 grid grid-cols-1 gap-4 text-gray-600 md:grid-cols-2">
          <p>
            {{ $t("service.inspection.content") }}
          </p>
          <img
            class="w-full object-cover aspect-video rounded-sm"
            src="@/assets/images/service/2.jpg"
            alt="Image"
          />
        </div>
      </div>

      <div class="py-4">
        <h2 class="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
          {{ $t("service.parts.title") }}
        </h2>
        <div class="mt-1 grid grid-cols-1 gap-4 text-gray-600 md:grid-cols-2">
          <p>
            {{ $t("service.parts.content") }}
          </p>
          <img
            class="w-full object-cover aspect-video rounded-sm"
            src="@/assets/images/service/3.jpg"
            alt="Image"
          />
        </div>
      </div>

      <div class="py-4">
        <h2 class="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
          {{ $t("service.service.title") }}
        </h2>
        <div class="mt-1 grid grid-cols-1 gap-4 text-gray-600 md:grid-cols-2">
          <p>
            {{ $t("service.service.content") }}
          </p>
          <img
            class="w-full object-cover aspect-video rounded-sm"
            src="@/assets/images/service/4.jpg"
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
          {{ $t("service.cta") }}
          <NuxtLink
            to="/contact"
            class="font-semibold leading-6 text-gray-900 whitespace-nowrap hover:underline hover:text-gray-600"
          >
            {{ $t("contact_us") }} <span aria-hidden="true">→</span>
          </NuxtLink>
        </p>
      </div>
    </div>
  </div>
</template>
