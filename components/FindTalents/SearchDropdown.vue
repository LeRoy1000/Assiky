<template>
  <div class="absolute top-1/2 left-2 -translate-y-1/2 z-10 hidden xs:block">
    <button
      type="button"
      class="dropdownBtn text-fourthly p-2"
      aria-expanded="false"
      aria-controls="searchList"
    >
      <!-- <span>{{ searchValue ?? 'Fullstack' }}</span> -->
      <span>Fullstack</span>
      <i class="bi bi-chevron-down leading-none transition-transform ml-2" aria-hidden="true"></i>
    </button>

    <ul
      id="searchList"
      class="absolute bg-white rounded-lg shadow-md p-6 flex flex-col gap-4 w-max -ml-2 mt-4"
    >
      <li v-for="(item, i) in searchListItems" :key="item" class="flex items-center gap-2">
        <i class="bi bi-search" aria-hidden="true"></i>
        <!-- <input
          type="radio"
          :id="item"
          :value="item"
          v-model="searchValue"
          class="appearance-none"
        /> -->
        <label :for="item" class="cursor-pointer">{{ item }}</label>
      </li>
    </ul>
  </div>
</template>

<script setup>
const searchListItems = ['Fullstack Web', 'Mobile', 'DevOps', 'Cloud Computing'];
// const searchValue = ref('Fullstack');

onMounted(() => {
  if (process.client) {
    const dropdownBtn = document.querySelector('.dropdownBtn');

    dropdownBtn.addEventListener('click', function () {
      const ariaExpanded = dropdownBtn.getAttribute('aria-expanded');

      if (ariaExpanded === 'true') {
        dropdownBtn.setAttribute('aria-expanded', false);
      } else {
        dropdownBtn.setAttribute('aria-expanded', true);
      }
    });
  }
});
</script>

<style scoped>
.dropdownBtn[aria-expanded='false'] + ul {
  display: none;
}
</style>
