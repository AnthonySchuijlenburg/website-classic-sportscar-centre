<script setup lang="ts">
const localePath = useLocalePath();

interface Route {
  location: string;
  label: string;
}

const navigationOpen = ref<boolean>(false);

const routes: Array<Route> = [
  {
    location: "/",
    label: "routes.home",
  },
  {
    location: "/restoration",
    label: "routes.restoration",
  },
  {
    location: "/service-and-maintenance",
    label: "routes.service",
  },
  {
    location: "/contact",
    label: "routes.contact",
  },
];
</script>

<template>
  <nav class="bg-white shadow-md sticky top-0 z-10">
    <div class="max-w-4xl mx-auto px-4">
      <div class="flex justify-between">
        <div class="flex space-x-4">
          <div>
            <NuxtLink
              :to="localePath('/')"
              class="flex justify-center items-center h-16"
            >
              <img
                class="h-14 py-1 object-contain"
                src="@/assets/images/logo.png"
                alt=""
              />
            </NuxtLink>
          </div>
        </div>

        <div class="hidden md:flex items-center space-x-1">
          <NuxtLink
            v-for="link in routes"
            :key="link.location"
            :to="localePath(link.location)"
            class="py-5 px-3 text-gray-700 hover:text-gray-900"
            >{{ $t(link.label) }}</NuxtLink
          >
        </div>

        <div class="md:hidden flex items-center">
          <button class="md:hidden" @click="navigationOpen = !navigationOpen">
            <IconMenu v-if="!navigationOpen" />
            <IconX v-else />
          </button>
        </div>
      </div>
    </div>

    <div class="md:hidden" :class="navigationOpen ? 'block' : 'hidden'">
      <NuxtLink
        v-for="link in routes"
        :key="link.location"
        :to="link.location"
        class="block py-2 px-4 text-sm hover:bg-gray-200"
        @click="navigationOpen = !navigationOpen"
      >
        {{ link.label }}</NuxtLink
      >
    </div>
  </nav>
</template>
