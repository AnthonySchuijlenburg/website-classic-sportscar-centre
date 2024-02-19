<template>
  <div class="relative isolate px-6 py-14 pb-16 lg:px-8">
    <div class="mx-auto max-w-2xl py-8 sm:py-12 md:max-w-4xl lg:py-16">
      <div>
        <h1
          class="text-4xl text-center font-bold tracking-tight text-gray-900 sm:text-6xl"
        >
          {{ $t("contact_us") }}
        </h1>
        <p class="mt-8 text-lg leading-8 text-gray-700">
          {{ $t("contact.title") }}
        </p>
        <p class="mt-2 text-lg leading-8 text-gray-700">
          <span class="font-bold">{{ $t("brand") }}</span>
        </p>
        <p class="text-lg leading-8 text-gray-700">
          {{ $t("contact.location") }}
        </p>
        <p class="mt-4 text-lg leading-8 text-gray-700">
          <span class="font-semibold">{{ $t("contact.phone") }}</span
          ><a class="underline hover:text-blue-800" href="tel:+31653728462">
            {{ $t("contact.phone_number") }}
          </a>
        </p>
        <p class="text-lg leading-8 text-gray-700">
          <span class="font-semibold">{{ $t("contact.email") }}</span
          ><a
            class="underline hover:text-blue-800"
            href="mailto:info@classicsportscarcentre.com"
            >info@classicsportscarcentre.com</a
          >
        </p>
        <p class="text-lg leading-8 text-gray-700">
          <span class="font-semibold">{{ $t("contact.facebook") }}</span
          ><a
            class="underline hover:text-blue-800"
            rel="nofollow"
            target="blank"
            href="https://www.facebook.com/p/Classic-Sportscar-Centre-100045209156136/"
            >{{ $t("contact.facebook_url") }}</a
          >
        </p>
        <p class="mt-4 text-lg leading-8 text-gray-700">
          {{ $t("contact.content") }}
        </p>
      </div>
    </div>
  </div>
</template>
