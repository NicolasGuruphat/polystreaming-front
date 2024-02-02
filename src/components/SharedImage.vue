<template>
  <div style="position: relative; text-align: center; width: 100%">
    <img
      :src="'http://localhost:8080/images/image/' + id"
      @click="toggleFullscreen"
      ref="image"
      alt="shared image"
    />
    <button class="delete-image-button" @click="deleteImage">X</button>
    <div class="image-info image-creator">{{ creator }}</div>
  </div>
</template>
<script setup lang="ts">
import { ref, defineProps } from "vue";
import { useFullscreen } from "@vueuse/core";
import { useImage } from "@/store/Image";

const imageStore = useImage();

const props = defineProps({
  empty: {
    type: Boolean,
    default: false,
  },
  id: {
    type: Number,
  },
  price: {
    type: Number,
  },
  public: {
    type: Boolean,
  },
  creator: {
    type: String,
  },
});

const image = ref<HTMLElement>();
const { isFullscreen, toggle } = useFullscreen(image);
const toggleFullscreen = () => {
  if (image.value == undefined) return;
  toggle();
  if (isFullscreen) {
    image.value.style.cursor = "zoom-out";
  } else {
    image.value.style.cursor = "zoom-in";
  }
};

const deleteImage = () => {
  const result = confirm(
    "This image will be deleted from your galery.\n" +
      "You will not be able to see this image anymore.\n" +
      "Are you sure that you want to do this ?"
  );
  if (!result) return;
  imageStore.removeFromMyShared(props.id);
};
</script>
<style scoped>
.image-info {
  background-color: rgba(255, 240, 245, 0.9);
  color: black;
  position: absolute;
}
.image-creator {
  border-radius: 1rem;
  padding: 0.5rem;
  right: 5px;
  top: 40px;
}
form {
  border: 2px dashed lavender;
  border-radius: 1rem;
  margin: 0.25rem 0;
  display: flex;
  justify-content: space-between;
}
img {
  border-radius: 1rem;
  z-index: 10;
  max-width: inherit;
  max-height: inherit;
  height: inherit;
  width: inherit;
  object-fit: cover;
}

.delete-image-button {
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: lavenderblush;
  border: none;
  color: grey;
  font-weight: bold;
  border-radius: 1rem;
  padding: 0.4rem 0.6rem;
}

.delete-user-share-with-button {
  font-size: 0.5rem;
  margin-right: 0.25rem;
  padding: 0.275rem 0.4rem;
}

.image-action-button,
input,
select {
  background-color: lavender;
  border: none;
  border-radius: 1rem;
  margin: 0.5rem;
  padding: 0.5rem 0.5rem;
}

img:hover {
  cursor: zoom-in;
}
#empty-image {
  align-items: center;
  background-color: rgba(250, 250, 230, 0.5);
  border: 5px dashed #f0e6fa;
  display: flex;
  font-size: 2rem;
  justify-content: center;
}
#add-image {
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
}
.add-image-label {
  cursor: pointer;
  position: absolute;
}
.image-item {
  background-color: white;
  border-radius: 1rem;
  padding: 1.5% 1.5%;
}
#empty-image {
  min-height: 30vh;
}
.not-empty-image {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
.price-label {
  font-style: italic;
  clear: both;
}
</style>
