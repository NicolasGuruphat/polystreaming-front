<template>
  <h1>Cart</h1>
  <span>{{ cart }}</span>
</template>
<script setup lang="ts">
import { useUser } from "@/store/User";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";

const store = useUser();
const { cart } = storeToRefs(store);
onMounted(() => {
  console.log(cart.value);
});
</script>
