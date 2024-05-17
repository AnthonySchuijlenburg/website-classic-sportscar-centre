<script setup lang="ts">
const localePath = useLocalePath();

const expiresDate = new Date();
expiresDate.setDate(expiresDate.getDate() + 30);

const cookieOptions = {
  secure: true,
  sameSite: true,
  watch: true,
  expires: expiresDate,
  default: () => false,
};

const cookie = useCookie("accepted-cookies", cookieOptions);

// This is a hacky way of updating the expires date of the cookie
// so that users don't have to accept every x-amount of days if they
// frequently use the site
onBeforeMount(() => {
  cookie.value = !cookie.value;
  nextTick(() => {
    cookie.value = !cookie.value;
  });
});
</script>

<template>
  <ClientOnly>
    <div
      v-if="!cookie"
      class="bg-gray-100 px-6 py-8 fixed bottom-0 left-0 w-full md:py-6 lg:px-0"
    >
      <div
        class="flex justify-between items-center gap-4 mx-auto max-w-3xl md:max-w-4xl"
      >
        <p class="text-sm text-gray-700">
          {{ $t("cookies.title") }}
          <NuxtLink :to="localePath('/privacy')" class="underline">{{
            $t("cookies.link")
          }}</NuxtLink>
        </p>
        <button
          class="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
          @click="cookie = true"
        >
          {{ $t("cookies.accept") }}
        </button>
      </div>
    </div>
  </ClientOnly>
</template>
