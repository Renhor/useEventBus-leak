import { defineStore } from 'pinia';

export const useSomeStore = defineStore('Store', {
  state: () => ({
    form: {
      data: ''
    },
    someHeavyData: makeData(),
  }),
  getters: {},
  actions: {},
});

function makeData() {
  return 'someData'.repeat(100000);
}
