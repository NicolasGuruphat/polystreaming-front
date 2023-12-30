<template>
  <h1>Personnal gallery</h1>
  <h2>My images</h2>
  <div class="gallery">
    <personnal-image
      :id="image.id"
      :source="image.source"
      v-model:price="image.price"
      v-model:openedToMarketplace="image.openedToMarketplace"
      v-for="image in peronnalImages"
      :key="image.id"
      @delete-image="
        (value) => {
          deleteFromGalery(value);
        }
      "
    />
    <personnal-image :empty="true" />
  </div>
  <hr />
  <h2>Image shared with me</h2>
  <div class="shared-gallery">
    <shared-image
      class="shared-image"
      :id="image.id"
      :source="image.source"
      v-model:price="image.price"
      v-model:openedToMarketplace="image.openedToMarketplace"
      v-for="image in sharedImages"
      :key="image.id"
      @delete-image="
        (value) => {
          deleteFromSharedGalery(value);
        }
      "
    />
  </div>
</template>
<script setup lang="ts">
import PersonnalImage from "@/components/PersonnalImage.vue";
import SharedImage from "@/components/SharedImage.vue";
import { ref } from "vue";

let peronnalImages = ref([
  { id: 1, source: "blue.png", price: 50, openedToMarketplace: false },
  { id: 2, source: "stonks.jpg", price: 540, openedToMarketplace: true },
  { id: 3, source: "gratin.webp", price: 800, openedToMarketplace: true },
  {
    id: 4,
    source: "the_hearth_of_the_andes.JPG",
    price: 300,
    openedToMarketplace: true,
  },
]);

let sharedImages = ref([
  { id: 1, source: "blue.png", price: 50, openedToMarketplace: false },
  { id: 2, source: "stonks.jpg", price: 540, openedToMarketplace: true },
  { id: 3, source: "gratin.webp", price: 800, openedToMarketplace: true },
  {
    id: 4,
    source: "the_hearth_of_the_andes.JPG",
    price: 300,
    openedToMarketplace: true,
  },
]);

const deleteFromGalery = (id: number) => {
  peronnalImages.value = peronnalImages.value.filter((image) => {
    return image.id != id;
  });
};
const deleteFromSharedGalery = (id: number) => {
  sharedImages.value = sharedImages.value.filter((image) => {
    return image.id != id;
  });
};
</script>
<style>
.gallery {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 5px;
}
.shared-gallery {
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(2, 1fr);
}
</style>
