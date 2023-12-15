<template>
  <main class="bg-white dark:bg-fourthly text-fourthly dark:text-grey-blue">
    <div class="container mx-auto py-12">
      <div
        class="grid grid-cols-1 sm:grid-cols-[1fr_2fr] md:grid-cols-[1fr_3fr] gap-12 items-center max-w-[50rem] mx-auto mb-16"
      >
        <img
          src="~/assets/img/happy-woman.png"
          alt=""
          role="presentation"
          class="mx-auto md:mx-0 max-w-[15rem]"
        />
        <div>
          <h1
            class="font-semibold text-4xl text-fourthly dark:text-white mb-4 ff-raleway text-center md:text-left"
          >
            Find Your <span class="text-secondary dark:text-inherit">Perfect</span> IT Talent
          </h1>
          <p class="text-sm text-light-grey">
            Discover Assiky's large family of talented battalions. You're sure to find what you
            need.
          </p>
        </div>
      </div>
      <SearchBar />
    </div>
    <div class="bg-silver dark:bg-fourthly text-fourthly dark:text-grey-blue">
      <div class="container mx-auto py-12">
        <div class="grid grid-cols-1 sm:grid-cols-[250px_auto] gap-10">
          <div>
            <h2 class="text-fourthly ff-raleway text-xl font-semibold">Filter Panel</h2>

            <FilterPanel />
          </div>

          <div>
            <div class="flex justify-center gap-x-6 gap-y-14 flex-wrap">
              <BaseCard v-for="i in 10" class="w-full md:w-auto px-8 group">
                <template #button>
                  <NuxtLink
                    to="/profile-details"
                    class="text-grey-blue bg-white text-sm font-medium py-1 px-6 rounded flex items-center gap-2 transition-colors group-hover:text-white group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-tertiary group-active:to-primary"
                  >
                    Connect
                    <i class="bi bi-arrow-right text-lg" aria-hidden="true"></i>
                  </NuxtLink>
                </template>
              </BaseCard>
            </div>
            <BaseButton
              label="Load more"
              variant="tertiary"
              size="small"
              class="mt-8 mx-auto"
              background="transparent"
            />
          </div>
        </div>
      </div>
    </div>
    <SuccessStory class="bg-white" />
  </main>
</template>

<script setup>
import BaseCard from '~/components/BaseCard/BaseCard.vue';
import SuccessStory from '~/components/SuccessStory.vue';
import SearchBar from '~/components/FindTalents/SearchBar.vue';
import FilterPanel from '~/components/FindTalents/FilterPanel.vue';

useHead({
  title: 'Find Talents | Assiky',
  meta: [{ name: 'description', content: 'Find your perfect IT talents in just a few clicks.' }],
});
</script>
