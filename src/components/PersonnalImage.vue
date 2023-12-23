<template>
  <div
    style="
      /* border: 2px dashed grey; */
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    "
  >
    <img src="/blue.png" style="width: 100%; padding: 5%" />
    <div>
      <button class="image-action-button">Delete</button>
      <form v-on:submit.prevent="openToMarketplace">
        <input placeholder="Price" type="number" v-model="price" />
        <button class="image-action-button" type="submit">
          Open to marketplace
        </button>
      </form>
      <form v-on:submit.prevent="share">
        <select v-model="selectedUsername">
          <option v-for="username of usernames" :key="username">
            {{ username }}
          </option>
          <!-- ="test[]" size="1" multiple> -->
        </select>

        <button class="image-action-button">Share</button>
      </form>
      <span class="user-share-with" v-for="user of sharedWith" :key="user">
        <button
          class="delete-user-share-with-button"
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
import { reactive, ref } from "vue";

const price = ref<number>(0);
const openToMarketplace = () => {
  console.log(price.value);
};

const usernames = reactive(["Nicolas", "Gregory", "Mathis"]);
const selectedUsername = ref(usernames[0]);

const sharedWith = reactive<Array<string>>([]); // to fill with api call ?
const share = () => {
  if (selectedUsername.value in sharedWith) return; // todo : doesnt work
  sharedWith.push(selectedUsername.value);
};

const deleteShare = (user: string) => {
  sharedWith.splice(sharedWith.indexOf(user), 1);
};
</script>
<style scoped>
.user-share-with {
  background-color: lavender;
  border-radius: 1.25rem;
  display: inline-block;
  padding: 0.5rem;
  margin: 0.25rem;
}
.delete-user-share-with-button {
  background-color: lavender;
  border: none;
  border-radius: 1rem;
  color: red;
  font-size: 0.75rem;
  font-weight: bold;
  margin-right: 0.5rem;
  padding: 0.25rem 0.5rem;
}

.image-action-button,
input,
select {
  background-color: lavender;
  border: none;
  border-radius: 1rem;
  margin: 0.5rem;
  padding: 0.5rem;
}
</style>
