<template>
  <div v-if="empty" class="image-item" id="empty-image">
    <label class="add-image-label" for="add-image">Add an image</label>
    <input id="add-image" type="file" />
  </div>
  <div v-else class="image-item">
    <div class="not-empty-image">
      <img
        :src="source"
        @click="toggleFullscreen"
        ref="image"
        alt="personnal image"
      />
      <div>
        <button class="delete-button delete-image-button" @click="deleteImage">
          X
        </button>
        <div style="clear: both">
          <span class="price-label">{{ price }} €</span>
          <button class="image-action-button" @click="toggleMarketplace">
            {{
              openedToMarketplace
                ? "Remove from marketplace"
                : "Open to marketplace"
            }}
          </button>
        </div>
        <form v-on:submit.prevent="updatePrice">
          <input
            placeholder="Price"
            type="number"
            v-model="modifiedPrice"
            min="0"
            step="10"
            style="width: 35%; display: inline-block"
          />
          <button
            class="image-action-button"
            style="width: 40%; display: inline-block"
          >
            Update price
          </button>
        </form>

        <form v-on:submit.prevent="share">
          <select v-model="selectedUsername">
            <option v-for="username of usernames" :key="username">
              {{ username }}
            </option>
          </select>
          <button class="image-action-button">Share</button>
        </form>
      </div>
    </div>
    <div style="text-align: left; min-height: 2.75rem">
      <span class="user-share-with" v-for="user of sharedWith" :key="user">
        <button
          class="delete-button delete-user-share-with-button"
          @click="deleteShare(user)"
        >
          X
        </button>
        {{ user }}
      </span>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, defineProps, defineEmits } from "vue";
import { useFullscreen } from "@vueuse/core";

const props = defineProps({
  empty: {
    type: Boolean,
    default: false,
  },
  id: {
    type: Number,
    required: false,
  },
  source: {
    type: String,
    required: false,
  },
  price: {
    type: Number,
    required: false,
  },
  openedToMarketplace: {
    type: Boolean,
    required: false,
  },
});

const emits = defineEmits([
  "update:price",
  "update:openedToMarketplace",
  "deleteImage",
]);

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

const updatePrice = () => {
  emits("update:price", modifiedPrice.value);
};

const deleteImage = () => {
  const result = confirm(
    "This image will be deleted from your galery.\n" +
      "People that have access to this image will not have it anymore.\n" +
      "Are you sure that you want to do this ?"
  );
  if (!result) return;
  emits("deleteImage", props.id);
};
const modifiedPrice = ref<number>(props.price ? props.price : 0);
const toggleMarketplace = () => {
  emits("update:openedToMarketplace", !props.openedToMarketplace);
};

const usernames = ref(["Nicolas", "Gregory", "Mathis", "Guillaume", "Vincent"]);
const selectedUsername = ref(usernames.value[0]);

const sharedWith = ref<Array<string>>([]); // to fill with api call ?
const share = () => {
  if (selectedUsername.value in sharedWith.value) return; // todo : doesnt work
  sharedWith.value.push(selectedUsername.value);
};

const deleteShare = (user: string) => {
  sharedWith.value.splice(sharedWith.value.indexOf(user), 1);
};
</script>
<style scoped>
form {
  border: 2px dashed lavender;
  border-radius: 1rem;
  margin: 0.25rem 0;
  display: flex;
  justify-content: space-between;
}
img {
  border-radius: 1rem;
  width: 90%;
  z-index: 10;
}

img:hover {
  transition: transform 100ms ease-in-out;
  transform: scale(1.5) translate(16.5%, 16.5%);
  cursor: zoom-in;
}
img:not(:hover) {
  transition: transform 100ms ease-in-out;
  transform: scale(1);
}
/* .price-and-delete-row {
  display: flex;
  justify-content: space-around;
  align-items: center;
} */
.user-share-with {
  background-color: lavender;
  border-radius: 1.25rem;
  display: inline-block;
  font-size: 0.75rem;
  padding: 0.5rem;
  margin: 0.25rem;
}
.delete-image-button {
  float: right;
  padding: 0.4rem 0.6rem;
}

.delete-button {
  background-color: lavenderblush;
  border: none;
  color: grey;
  font-weight: bold;
  border-radius: 1rem;
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
