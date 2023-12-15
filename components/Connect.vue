<template>
  <div class="bg-white dark:bg-fourthly text-fourthly dark:text-grey-blue">
    <div class="container mx-auto py-16">
      <section class="text-center">
        <h2 class="font-semibold text-4xl text-fourthly dark:text-white mb-4 ff-raleway">
          Connect <span class="text-secondary dark:text-inherit">With Us</span>
        </h2>
        <p class="mb-8 max-w-xl mx-auto">
          Join us as we pave the way for countless success stories and usher in a new era of IT
          excellence.
        </p>
        <form action="" class="max-w-2xl mx-auto flex flex-col gap-4">
          <div class="flex relative">
            <label
              for="nameInput"
              class="inputLabel flex items-center gap-2 absolute top-1/2 left-4 -translate-y-1/2 text-fourthly"
            >
              <i class="bi bi-person text-grey-blue" aria-hidden="true"></i>
              Nom
            </label>
            <input
              type="email"
              name="nameInput"
              id="nameInput"
              class="border border-grey-blue py-2 pl-24 pr-3 rounded-lg w-full text-grey-blue placeholder:text-grey-blue h-12"
              placeholder="Loop Sinus"
            />
          </div>
          <div class="flex relative">
            <label
              for="emailInput"
              class="inputLabel flex items-center gap-2 absolute top-1/2 left-4 -translate-y-1/2 text-fourthly"
            >
              <i class="bi bi-at text-grey-blue" aria-hidden="true"></i>
              Email
            </label>
            <input
              type="email"
              name="emailInput"
              id="emailInput"
              class="border border-grey-blue py-2 pl-[6.25rem] pr-3 rounded-lg w-full text-grey-blue placeholder:text-grey-blue h-12"
              placeholder="loopsinus@gmail.com"
            />
          </div>
          <textarea
            name="message"
            id="message"
            rows="4"
            placeholder="Message"
            class="resize-none border border-grey-blue p-3 rounded-lg"
          ></textarea>
          <BaseButton type="submit" variant="primary" label="Envoyer" class="mx-auto" />
        </form>
      </section>
    </div>
  </div>
</template>

<style scoped>
.inputLabel::after {
  content: '|';
  color: #abbed1;
  margin-left: -0.2rem;
}
</style>
