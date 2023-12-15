<template>
  <div class="flex justify-center items-center gap-2 md:gap-6">
    <div class="inputContainer w-full md:w-[65%] relative h-12">
      <SearchDropdown />
      <input
        class="w-full h-full custom-shadow text-sm leading-6 text-grey-blue placeholder:text-grey-blue rounded-lg py-2 pl-3 xs:pl-40 pr-3 bg-silver"
        type="search"
        name="searchInput"
        id="searchInput"
        aria-label="Search your IT Talents"
        placeholder="Search your IT Talents"
      />
      <button
        type="submit"
        class="text-grey-blue bg-transparent p-2 h-inherit absolute top-1/2 -translate-y-1/2 right-2 rounded-full"
        aria-label="Search"
      >
        <i class="bi bi-search leading-none text-2xl" aria-hidden="true"></i>
      </button>
    </div>
    <button
      type="button"
      class="bg-transparent p-2 rounded-md hover:shadow-md active:shadow-sm"
      aria-label="Filter"
    >
      <i class="bi bi-funnel text-tertiary leading-none text-2xl" aria-hidden="true"></i>
    </button>
  </div>
</template>

<script setup>
import SearchDropdown from './SearchDropdown.vue';
</script>

<style scoped>
.custom-shadow {
  box-shadow: 0px 4px 8px 0px rgba(171, 190, 209, 0.4);
}
@media screen and (min-width: 450px) {
  .inputContainer::before {
    content: '|';
    color: #abbed1;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 8.5rem;
  }
}
</style>
