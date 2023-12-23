<template>
  <h1>Personnal gallery</h1>
  <h2>My images</h2>
  <div id="personnal-images">
    <personnal-image
      class="image-item"
      v-for="i in 5"
      :key="i"
    ></personnal-image>
    <div class="image-item" id="empty-image">
      <label class="add-image-label" for="add-image">Add an image</label>
      <input id="add-image" type="file" style="display: none" />
    </div>
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
  grid-gap: 5px;
}
#empty-image {
  align-items: center;
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  font-size: 2rem;
  justify-content: center;
}
.add-image-label {
  cursor: pointer;
}
.image-item {
  background-color: white;
  border-radius: 1rem;
}
</style>
