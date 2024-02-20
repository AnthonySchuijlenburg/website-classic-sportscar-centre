<script lang="ts" setup>
const localePath = useLocalePath();

definePageMeta({
  title: "Home",
});
</script>

<template>
  <div>
    <HeroLane />
    <div class="relative isolate px-6 py-0 md:py-14 pb-16 lg:px-8">
      <div class="mx-auto max-w-2xl py-8 sm:py-12 md:max-w-4xl lg:py-16">
        <div class="text-center">
          <h1
            class="text-6xl font-bold tracking-tight text-gray-900 sm:text-6xl"
          >
            {{ $t("brand") }}
          </h1>
          <p class="mt-6 text-lg leading-8 text-gray-700">
            {{ $t("homepage.intro") }}
            <NuxtLink
              :to="localePath('/contact')"
              class="font-semibold leading-6 text-gray-900 whitespace-nowrap hover:underline hover:text-gray-600"
              >{{ $t("contact_us") }}
              <span aria-hidden="true">→</span></NuxtLink
            >
          </p>
        </div>

        <hr class="mt-6" />

        <div class="mt-8 grid gap-6">
          <div>
            <h2
              class="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl"
            >
              {{ $t("homepage.restoration.title") }}
            </h2>
            <p class="text-lg leading-8 text-gray-700">
              {{ $t("homepage.restoration.content") }}
              <NuxtLink
                :to="localePath('/restoration')"
                class="font-semibold leading-6 text-gray-900 whitespace-nowrap hover:underline hover:text-gray-600"
                >{{ $t("homepage.restoration.link") }}
                <span aria-hidden="true">→</span></NuxtLink
              >
            </p>
          </div>

          <div class="mt-8 grid gap-6">
            <div>
              <h2
                class="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl"
              >
                {{ $t("homepage.service.title") }}
              </h2>
              <p class="text-lg leading-8 text-gray-700">
                {{ $t("homepage.service.content") }}
                <NuxtLink
                  :to="localePath('/service-and-maintenance')"
                  class="font-semibold leading-6 text-gray-900 whitespace-nowrap hover:underline hover:text-gray-600"
                  >{{ $t("homepage.service.link") }}
                  <span aria-hidden="true">→</span></NuxtLink
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
