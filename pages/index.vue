<template>
  <div>
    <HeroLane />
    <div class="relative isolate px-6 py-0 md:py-14 pb-16 lg:px-8">
      <div class="mx-auto max-w-2xl py-8 sm:py-12 md:max-w-4xl lg:py-16">
        <div class="text-center">
          <h1
            class="text-6xl font-bold tracking-tight text-gray-900 sm:text-6xl"
          >
            Classic Sportscar Centre
          </h1>
          <p class="mt-6 text-lg leading-8 text-gray-700">
            Classic sportscar centre is the adress for repair and maintenance of
            classic and sportscars of all makes and years, but we like German
            cars of the 70`s and 80`s like the Mercedes w107 and Porsche 911 the
            most. With over 25 years of experience in classic and sportscars we
            are a true and reliable partner for anyone with or anyone who
            desires a classic sporstcar!
            <NuxtLink
              to="/contact"
              class="font-semibold leading-6 text-gray-900 hover:underline hover:text-gray-600"
            >
              Contact us <span aria-hidden="true">→</span>
            </NuxtLink>
          </p>
        </div>

        <hr class="mt-6" />

        <div class="mt-8 grid gap-6">
          <div>
            <h2
              class="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl"
            >
              Explore Our Restoration Services
            </h2>
            <p class="text-lg leading-8 text-gray-700">
              If you are considering restoring your classic Mercedes R107 to its
              original condition, we invite you to
              <NuxtLink
                to="/restoration"
                class="font-semibold leading-6 text-gray-900 hover:underline hover:text-gray-600"
                >explore our restoration services</NuxtLink
              >
              for detailed information.
            </p>
          </div>
          <div>
            <h2
              class="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl"
            >
              Discover Our Servicing & Maintenance Solutions
            </h2>
            <p class="text-lg leading-8 text-gray-700">
              To ensure the continued performance and longevity of your classic
              Mercedes R107, we offer comprehensive servicing and maintenance
              solutions. Learn more and
              <NuxtLink
                to="/service-and-maintenance"
                class="font-semibold leading-6 text-gray-900 hover:underline hover:text-gray-600"
                >discover our servicing & maintenance options</NuxtLink
              >
              here.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
