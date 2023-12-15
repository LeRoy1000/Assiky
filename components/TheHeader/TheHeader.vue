<template>
  <header class="bg-white dark:bg-fourthly text-fourthly dark:text-white fixed w-full z-50">
    <div class="container relative mx-auto py-4 flex items-end justify-between gap-2 flex-wrap">
      <NuxtLink to="/">
        <img v-if="isDark" src="~/assets/icon/LogoGreen.svg" alt="Home" />
        <img v-else src="~/assets/icon/LogoBlack.svg" alt="Home" />
      </NuxtLink>
      <nav class="xl:flex xl:flex-row xl:items-end xl:gap-5">
        <ul
          class="flex items-center gap-6 firstList text-white md:text-fourthly md:dark:text-white"
          v-show="(isSmallScreen && menuIsOpen) || !isSmallScreen"
        >
          <li v-for="(item, i) in navListItem" :key="i" class="relative">
            <NuxtLink :to="item.href" class="list-item-link inline-block font-medium">
              {{ item.text }}
            </NuxtLink>
          </li>
        </ul>
        <ul
          class="flex items-end flex-col-reverse xl:flex-row gap-5 secondList"
          v-show="(isMediumScreen && menuIsOpen) || !isMediumScreen"
        >
          <li class="flex relative h-10">
            <input
              class="appearance-none w-64 text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-full py-2 px-3 shadow-sm border border-grey-blue"
              type="search"
              name="searchInput"
              id="searchInput"
              aria-label="Search your IT Talents"
              placeholder="Search your IT Talents"
            />
            <button type="submit" class="bg-transparent p-2 h-auto absolute right-0 rounded-full">
              <img src="~~/assets/icon/IconSearch.svg" alt="Search" />
            </button>
          </li>
          <li><BaseButton label="Sign up" href="/signup" variant="tertiary" size="small" /></li>
          <li><BaseButton label="Login" href="/signin" variant="primary" size="small" /></li>
        </ul>
      </nav>

      <button
        @click="toggleDarkMode()"
        class="self-end p-1 ml-auto md:ml-0"
        aria-label="Theme Switcher"
      >
        <img v-if="isDark" src="~/assets/icon/IconSun.svg" alt="Dark Mode" />
        <img v-else src="~/assets/icon/IconMoon.svg" alt="Light Mode" />
      </button>
      <button type="button" @click="toggleMenu" class="xl:hidden" aria-label="Menu">
        <i class="bi bi-list leading-none text-2xl"></i>
      </button>
    </div>
  </header>
</template>

<script setup>
import BaseButton from '../BaseButton/BaseButton.vue';
import { useGlobalStore } from '@/stores/index';

const globalStore = useGlobalStore();

const isDark = computed(() => {
  return globalStore.darkMode;
});

let isSmallScreen = ref(false),
  isMediumScreen = ref(false),
  menuIsOpen = ref(false),
  toggleMenu;

onMounted(() => {
  if (process.client) {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      globalStore.setDarkMode(true);
    } else {
      localStorage.theme = 'light';
      globalStore.setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }

    const setScreenSize = function () {
      isSmallScreen.value = window.matchMedia('(max-width: 767px)').matches;
      isMediumScreen.value = window.matchMedia('(max-width: 1279px)').matches;
    };
    setScreenSize();
    window.addEventListener('resize', setScreenSize);
  }

  toggleMenu = function () {
    menuIsOpen.value = !menuIsOpen.value;
  };

  const body = document.querySelector('body');
  const nav = document.querySelector('nav');

  const closeMenuOnClick = function (e) {
    const link = e.target.closest('a[href]');

    if (!link) return;

    if (menuIsOpen.value) menuIsOpen.value = false;
  };

  body.addEventListener('click', function (e) {
    closeMenuOnClick(e);
  });

  nav.addEventListener('click', function (e) {
    closeMenuOnClick(e);
  });

  window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    header.classList.toggle('sticky-header', window.scrollY > 0);
  });
});

const toggleDarkMode = function () {
  globalStore.toggleDarkMode(!globalStore.darkMode);

  localStorage.theme = globalStore.darkMode ? 'dark' : 'light';
  if (globalStore.darkMode) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

const navListItem = [
  {
    text: 'Find Talents',
    href: '/find-talents',
  },
  {
    text: 'My Dashboard',
    href: '/profile-details',
  },
  {
    text: 'Why Assiky ?',
    href: '/why-assiky',
  },
];
</script>

<style scoped src="./TheHeader.css"></style>
