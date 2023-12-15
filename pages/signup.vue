<template>
  <main class="bg-silver dark:bg-fourthly text-fourthly dark:text-grey-blue">
    <div class="container mx-auto py-28">
      <AuthCard class="signup">
        <template #title>Sign <span class="text-secondary">up</span></template>
        <template #form>
          <form action="" class="flex flex-col gap-3">
            <div>
              <label for="name" class="inline-block mb-1">Nom & prénoms</label>
              <Input type="text" name="name" id="name" placeholder="Loopsinus" />
            </div>
            <div>
              <label for="email" class="inline-block mb-1">Email address</label>

              <Input type="email" name="email" id="email" placeholder="loopsinus@gmail.com" />
            </div>
            <div class="phoneContainer">
              <label for="phone" class="inline-block mb-1">Phone</label>
              <Input type="tel" name="phone" id="phone" placeholder="" />
            </div>
            <div>
              <div class="flex justify-between gap-4">
                <label for="password" class="inline-block mb-1">Your password</label>
                <button type="button" class="text-secondary text-base flex items-center">
                  <img src="~/assets/icon/IconHide.svg" alt="" class="w-5" />
                  Hide
                </button>
              </div>

              <Input type="password" name="password" id="password" placeholder="*****" />

              <p class="text-xs mt-1">
                Use 8 or more characters with a mix of letters, numbers & symbols
              </p>
            </div>
            <div class="relative">
              <div class="flex justify-between gap-4">
                <label for="passwordConfirm" class="inline-block mb-1">Confirm password</label>
                <button type="button" class="text-secondary text-base flex items-center">
                  <img src="~/assets/icon/IconHide.svg" alt="" class="w-5" />
                  Hide
                </button>
              </div>
              <Input
                type="password"
                name="passwordConfirm"
                id="passwordConfirm"
                placeholder="*****"
              />
            </div>

            <BaseButton
              type="submit"
              variant="primary"
              label="Register"
              class="mb-2 self-start mt-5"
            >
              <template #icon>
                <i class="bi bi-arrow-right"></i>
              </template>
            </BaseButton>
            <p class="text-fourthly">
              Already have an account ?
              <NuxtLink to="/signin" class="text-secondary underline">Sign in</NuxtLink>
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
  title: 'Sign Up | Assiky',
  meta: [{ name: 'description', content: 'Join our amazing battalion today!' }],
  link: [
    {
      rel: 'stylesheet',
      href: 'https://cdn.jsdelivr.net/npm/intl-tel-input@18.2.1/build/css/intlTelInput.css',
    },
  ],
  script: [
    {
      src: 'https://cdn.jsdelivr.net/npm/intl-tel-input@18.2.1/build/js/intlTelInput.min.js',
    },
  ],
});

onMounted(() => {
  if (process.client) {
    const phoneInput = document.querySelector('#phone');
    if (window.intlTelInput) {
      window?.intlTelInput(phoneInput, {
        initialCountry: 'us',
        utilsScript: 'https://cdn.jsdelivr.net/npm/intl-tel-input@18.2.1/build/js/utils.js',
      });

      document.querySelector('.phoneContainer').querySelector('.iti').classList.add('w-full');
    }
  }
});
</script>

<style scoped></style>
