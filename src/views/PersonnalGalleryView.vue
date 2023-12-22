<template>
  <h1>Personnal gallery</h1>
  <h2>My images</h2>
  <div id="personnal-images">
    <personnal-image v-for="i in 5" :key="i"></personnal-image>
  </div>
  <h2>Image shared with me</h2>
</template>
<script setup lang="ts">
import PersonnalImage from "@/components/PersonnalImage.vue";
</script>
<style>
#personnal-images {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
</style>
