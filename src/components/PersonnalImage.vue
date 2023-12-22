<template>
  <div style="border: 1px solid black">
    <img src="/blue.png" /><button>Delete</button>
    <form v-on:submit.prevent="openToMarketplace">
      <input placeholder="Price" type="number" v-model="price" /><button
        type="submit"
      >
        Open to marketplace
      </button>
    </form>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";

const price = ref<number>(0);
const openToMarketplace = () => {
  console.log(price.value);
};
</script>
