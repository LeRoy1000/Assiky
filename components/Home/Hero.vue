<template>
  <div
    class="bg-[url('/assets/img/hero.jpg')] dark:bg-gradient-to-r bg-no-repeat bg-cover bg-fixed"
  >
    <div class="container mx-auto relative">
      <div class="grid md:grid-cols-[1.5fr_1fr] md:items-center py-28 md:h-[35.5rem]">
        <section class="order-last md:order-first">
          <h1
            class="custom-text-shadow text-white ff-raleway text-4xl md:text-5xl lg:text-[4rem] font-bold leading-normal md:leading-[4.75rem] mb-4"
          >
            Welcome to your path <span class="text-primary">to IT Success</span>
          </h1>
          <p class="text-silver dark:text-grey-blue mb-8">Start your IT journey now.</p>
          <BaseButton label="Start" variant="primary" href="/signup" class="max-w-max">
            <template #icon
              ><img src="~/assets/icon/IconArrow.svg" alt="" role="presentation"
            /></template>
          </BaseButton>
        </section>
        <div class="hidden dark:block">
          <!-- <NuxtImg src="/assets/img/hero-icon.svg" alt="" class="ml-auto" /> -->
          <img
            src="~/assets/img/hero-icon.svg"
            alt=""
            role="presentation"
            class="mx-auto md:ml-auto"
          />
        </div>
      </div>

      <div>
        <img
          src="~/assets/img/hero-skills.svg"
          alt=""
          role="presentation"
          class="absolute bottom-24 right-6 sm:right-1/3 grayscale mix-blend-luminosity"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.custom-text-shadow {
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.16);
}
</style>
