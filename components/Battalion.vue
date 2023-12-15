<template>
  <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 py-12">
    <section>
      <h2
        class="font-semibold text-4xl text-fourthly dark:text-white mb-4 ff-raleway text-center md:text-left"
      >
        Join the Assiky <span class="text-secondary dark:text-inherit">Battalion</span>
      </h2>
      <p class="mb-8">
        <slot name="text"></slot>
      </p>
      <BaseButton
        label="Sign Up"
        href="/signup"
        variant="primary"
        class="max-w-max mx-auto md:mx-0"
      />
    </section>
    <div class="">
      <img src="~/assets/img/battalion.svg" alt="" role="presentation" class="mx-auto md:mr-0" />
    </div>
  </div>
</template>
