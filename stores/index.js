import { defineStore } from 'pinia';

export const useGlobalStore = defineStore('global', {
  state: () => ({
    darkMode: undefined,
  }),
  getters: {},
  actions: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
    },
    setDarkMode(value) {
      this.darkMode = value;
    },
  },
});
