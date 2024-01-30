<template>
  <h1>Personnal gallery</h1>
  <h2>My images</h2>
  <div class="gallery">
    <personnal-image
      :id="image.id"
      :source="image.source"
      v-model:price="image.price"
      v-model:openedToMarketplace="image.openedToMarketplace"
      v-for="image in personnalImages"
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
import { useImage } from "@/store/Image";
import { storeToRefs } from "pinia";

const imageStore = useImage();
const { personnalImages, sharedImages } = storeToRefs(imageStore);

const deleteFromGalery = (id: number) => {
  imageStore.deleteImage(id);
  // personnalImages.value = personnalImages.value.filter((image) => {
  //   return image.id != id;
  // });
};
const deleteFromSharedGalery = (id: number) => {
  imageStore.removeFromMyShared(id);
  // sharedImages.value = sharedImages.value.filter((image) => {
  //   return image.id != id;
  // });
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
