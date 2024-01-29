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
import { ref } from "vue";
let publicImages = ref([
  {
    id: 1,
    source: "blue.png",
    price: 50,
    openedToMarketplace: false,
    creator: "Nicolas",
  },
  {
    id: 2,
    source: "stonks.jpg",
    price: 540,
    openedToMarketplace: true,
    creator: "Nicolas",
  },
  {
    id: 3,
    source: "gratin.webp",
    price: 800,
    openedToMarketplace: true,
    creator: "Mathis",
  },
  {
    id: 4,
    source: "the_hearth_of_the_andes.JPG",
    price: 300,
    openedToMarketplace: true,
    creator: "Nicolas",
  },
  {
    id: 5,
    source: "blue.png",
    price: 50,
    openedToMarketplace: false,
    creator: "Nicolas",
  },
  {
    id: 6,
    source: "stonks.jpg",
    price: 540,
    openedToMarketplace: true,
    creator: "Nicolas",
  },
  {
    id: 7,
    source: "gratin.webp",
    price: 800,
    openedToMarketplace: true,
    creator: "Nicolas",
  },
  {
    id: 8,
    source: "the_hearth_of_the_andes.JPG",
    price: 300,
    openedToMarketplace: true,
    creator: "Nicolas",
  },
]);
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
