<script lang="ts" setup>
import { useSomeStore } from '~/store/useSomeStore';
import { useSomeComponentLogic } from './useSomeComponentLogic';
import { storeToRefs } from 'pinia';

const store = useSomeStore();
const { form } = storeToRefs(store);

// ok
// useSomeComponentLogic(store.form);

// cause leaks
useSomeComponentLogic(form);
</script>

<template>
  <div>
    Some Component
    <!--  -->
  </div>
</template>

<style module>
</style>
