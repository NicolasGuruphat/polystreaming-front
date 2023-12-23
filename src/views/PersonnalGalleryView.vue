<template>
  <h1>Personnal gallery</h1>
  <h2>My images</h2>
  <div id="personnal-images">
    <personnal-image
      :id="image.id"
      :source="image.source"
      v-model:price="image.price"
      v-model:openedToMarketplace="image.openedToMarketplace"
      v-for="image in publicImages"
      :key="image.id"
      @delete-image="
        (value) => {
          deleteFromGalery(value);
        }
      "
    />
    <personnal-image :empty="true" />
  </div>
  <h2>Image shared with me</h2>
</template>
<script setup lang="ts">
import PersonnalImage from "@/components/PersonnalImage.vue";
import { ref } from "vue";

let publicImages = ref([
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
  console.log(publicImages, id);
  publicImages.value = publicImages.value.filter((image) => {
    return image.id != id;
  });
};
</script>
<style>
#personnal-images {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5px;
}
</style>
