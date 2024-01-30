<template>
  <h1>Public gallery</h1>
  <button @click="sortByAscPrice()">Sort by asc price</button>
  <button @click="sortByDescPrice()">Sort by desc price</button>
  <button @click="sortByAuthorName()">Sort by author name</button>
  <div id="personnal-images">
    <public-image
      :source="image.source"
      :id="image.id"
      v-for="image in publicImages"
      :key="image.id"
      :price="image.price"
      :creator="image.creator"
    ></public-image>
  </div>
</template>
<script setup lang="ts">
import PublicImage from "@/components/PublicImage.vue";
import { useImage } from "@/store/Image";
import { storeToRefs } from "pinia";

const imageStore = useImage();
const { publicImages } = storeToRefs(imageStore);

const sortByAscPrice = () => {
  publicImages.value = publicImages.value.sort(function (img1, img2) {
    return img1.price > img2.price;
  });
};
const sortByDescPrice = () => {
  publicImages.value = publicImages.value.sort(function (img1, img2) {
    return img1.price < img2.price;
  });
};
const sortByAuthorName = () => {
  publicImages.value = publicImages.value.sort(function (img1, img2) {
    return img1.creator < img2.creator;
  });
};
</script>
<style scoped>
button {
  background-color: lavender;
  border: none;
  border-radius: 1rem;
  padding: 1rem;
  margin: 0.5rem;
}
#personnal-images {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(4, 1fr);
}
</style>
