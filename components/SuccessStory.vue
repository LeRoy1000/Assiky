<template>
  <div class="bg-silver py-8">
    <div class="container mx-auto relative z-20">
      <section class="text-center">
        <h2
          class="text-black ff-raleway text-3xl md:text-[4rem] font-bold leading-[1.3] mb-8 max-w-4xl mx-auto"
        >
          Are you ready to write your success story ?
        </h2>
        <NuxtLink
          to="/signup"
          class="mx-auto text-white inline-block bg-primary hover:bg-gradient-to-r hover:from-transparent hover:to-black py-2 md:py-3 px-6 md:px-8 rounded font-bold transition-colors active:bg-gradient-to-l"
        >
          Sign Up <i class="bi bi-arrow-right"></i>
        </NuxtLink>
        <img
          src="~/assets/img/cta.svg"
          alt=""
          role="presentation"
          class="absolute -top-[65%] -left-[8%] -z-10 hidden lg:block"
        />
      </section>
    </div>
  </div>
</template>
