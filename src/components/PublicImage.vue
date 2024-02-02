<template>
  <div style="position: relative; text-align: center; width: 100%">
    <img
      :src="'http://localhost:8080/images/image/' + id"
      ref="image"
      alt="shared image"
    />
    <button class="image-info buy-image-button" @click="addToCart">
      <img
        src="@/assets/cart-shopping-solid.svg"
        alt="cart"
        style="height: 1rem; border-radius: 0"
      />
    </button>
    <div class="image-info image-price">{{ price }} €</div>
    <div class="image-info image-creator">{{ creator }}</div>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from "vue";
import { useUser } from "@/store/User";
import { storeToRefs } from "pinia";
import { useNotification } from "@/store/Notification";

const store = useUser();
const { cart } = storeToRefs(store);
const storeNotification = useNotification();

const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
  source: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: false,
  },
  creator: {
    type: String,
    required: true,
  },
});
const addToCart = () => {
  if (cart.value.map((item) => item.id).includes(props.id)) {
    storeNotification.setMessage("Already in cart", true);
  } else {
    storeNotification.setMessage("Successfuly added to cart", false);
    cart.value.push({
      id: props.id,
      price: props.price,
      creator: props.creator,
    });
  }
};
</script>
<style scoped>
img {
  border-radius: 1rem;
  z-index: 10;
  max-width: inherit;
  max-height: inherit;
  height: inherit;
  width: inherit;
  object-fit: cover;
}
.image-info {
  background-color: rgba(255, 240, 245, 0.9);
  color: black;
  position: absolute;
}
.image-creator {
  border-radius: 1rem;
  padding: 0.5rem;
  right: 5px;
  top: 80px;
}
.image-price {
  border-radius: 1rem;
  padding: 0.5rem;
  right: 5px;
  top: 40px;
}
.buy-image-button {
  background-color: rgba(230, 230, 250, 0.9);
  border: none;
  border-radius: 1rem;
  font-weight: bold;
  padding: 0.4rem 0.6rem;
  right: 5px;
  top: 5px;
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
