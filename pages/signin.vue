<template>
  <main class="bg-silver dark:bg-fourthly text-fourthly dark:text-grey-blue">
    <div class="container mx-auto py-28">
      <AuthCard class="signin">
        <template #title>Sign <span class="text-secondary">in</span></template>
        <template #form>
          <form action="">
            <div class="relative mb-3">
              <label for="name" class="inline-block mb-1">User name or email address</label>

              <Input type="text" name="name" id="name" placeholder="Loopsinus" />
            </div>
            <div class="relative mb-1">
              <div class="flex justify-between gap-4">
                <label for="password" class="inline-block mb-1">Your password</label>
                <button type="button" class="text-secondary text-base flex items-center">
                  <img src="~/assets/icon/IconHide.svg" alt="" class="w-5" />
                  Hide
                </button>
              </div>

              <Input type="password" name="password" id="password" placeholder="*****" />
            </div>
            <div class="flex mb-6">
              <NuxtLink
                to="/"
                class="text-secondary text-sm underline text-right inline-block font-semibold leading-5 ml-auto"
                >Forgot your password</NuxtLink
              >
            </div>

            <BaseButton type="submit" variant="primary" label="Connect" class="mb-2">
              <template #icon>
                <i class="bi bi-arrow-right"></i>
              </template>
            </BaseButton>
            <p class="text-fourthly">
              Don’t have an account ?
              <NuxtLink to="/signup" class="text-secondary underline">Sign up</NuxtLink>
            </p>
          </form>
        </template>
      </AuthCard>
    </div>
  </main>
</template>

<script setup>
import AuthCard from '~/components/Auth/AuthCard.vue';
import Input from '~/components/Auth/Input.vue';
useHead({
  title: 'Sign In | Assiky',
  meta: [{ name: 'description', content: 'Welcome back to Assiky!' }],
});
</script>

<style scoped></style>
