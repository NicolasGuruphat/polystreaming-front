<template>
  <div style="border: 1px solid black">
    <img :src="source" />
    <button @click="addToCart">Add to cart</button>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from "vue";
import { useUser } from "@/store/User";
import { storeToRefs } from "pinia";

const store = useUser();
const { cart } = storeToRefs(store);

const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
  source: {
    type: String,
    required: true,
  },
});
const addToCart = () => {
  if (props.id in cart.value) return;
  cart.value.push(props.id);
};
</script>
