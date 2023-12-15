<template>
  <div class="rounded-xl bg-white shadow-lg max-w-[52rem] mx-auto grid">
    <div class="rounded-[inherit] relative auth-img-container">
      <img
        src="~/assets/img/auth.jpg"
        alt=""
        class="w-full rounded-[inherit] object-cover h-80 md:absolute md:h-full auth-img"
      />
      <div class="absolute top-1/2 -translate-y-1/2 left-8">
        <img src="~/assets/icon/LogoWhite.svg" alt="" class="mb-2" />
        <p class="ff-raleway font-semibold text-white text-2xl">
          <span class="text-primary">Welcome</span> Batallion
        </p>
      </div>
    </div>
    <div class="p-8 md:py-20 md:px-10 max-w-md mx-auto md:max-w-none md:mx-0">
      <h1 class="ff-raleway font-semibold text-xl text-fourthly mb-6">
        <slot name="title">Sign in</slot>
      </h1>
      <div>
        <NuxtLink
          to="/"
          class="border border-grey-blue rounded-3xl py-2 flex items-center justify-center gap-4 mb-2 hover:shadow transition-shadow"
        >
          <img src="~/assets/icon/IconGoogle.svg" alt="Google" width="22" />
          <p class="text-fourthly text-base">Continue with Google</p>
        </NuxtLink>
        <NuxtLink
          to="/"
          class="border border-grey-blue rounded-3xl py-2 flex items-center justify-center gap-4 hover:shadow transition-shadow"
        >
          <i class="bi bi-twitter text-[#47ACDF] text-xl" aria-hidden="true"></i>
          <p class="text-fourthly text-base">Continue with Twitter</p>
        </NuxtLink>
      </div>
      <div class="flex justify-between items-center my-7">
        <span class="bar w-[45%] h-px bg-grey-blue"></span>
        <p class="uppercase text-center">Or</p>
        <span class="bar w-[45%] h-px bg-grey-blue"></span>
      </div>
      <slot name="form"></slot>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
@media screen and (min-width: 768px) {
  .signup {
    grid-template-columns: 1fr 0.9fr;
  }
  .signin {
    grid-template-columns: 0.9fr 1fr;
  }
  .signin .auth-img {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .signup .auth-img {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  .signup .auth-img-container {
    order: 2;
  }
}
.inputContainer::before {
  content: '|';
  color: #abbed1;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 1.85rem;
}
</style>
