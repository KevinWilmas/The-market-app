<script setup>
// imports
import CartWidget from "./CartWidget.vue";
</script>

<template>
  <header
    class="flex justify-between p-6 mb-10 items-center"
    style="background-image: url('/images/double-bubble-outline.png')"
  >
    <h1 class="text-4xl font-bold text-primary-a">The Market Place</h1>
    <CartWidget />
  </header>
</template>

<style>
header {
  border: medium dashed #eaf6f6;
  border-width: 0 0 20px 0;
  width: 100%;
}
</style>
