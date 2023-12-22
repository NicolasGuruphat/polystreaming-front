<template>
  <h1>Public gallery</h1>
  <div id="personnal-images">
    <public-image
      :source="image.source"
      :id="image.id"
      v-for="image in publicImages"
      :key="image.id"
    ></public-image>
  </div>
</template>
<script setup lang="ts">
import PublicImage from "@/components/PublicImage.vue";
const publicImages = [
  { id: 1, source: "blue.png" },
  { id: 2, source: "blue.png" },
];
</script>
<style>
#personnal-images {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
</style>
