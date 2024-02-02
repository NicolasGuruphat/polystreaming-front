<template>
  <h1>Cart</h1>
  <div v-if="cart.length != 0">
    <table>
      <tr>
        <th scope="col">Image</th>
        <th scope="col">Price</th>
        <th scope="col">Id</th>
        <th scope="col">Owner</th>
      </tr>
      <tr v-for="item in cart" :key="item.id">
        <td>
          <img
            :src="'http://localhost:8080/images/image/' + item.id"
            style="height: 100%; width: 100%; border-radius: 0.75rem"
          />
        </td>
        <td>{{ item.price }} €</td>
        <td>{{ item.id }}</td>
        <td>{{ item.creator }}</td>
        <td style="position: relative">
          <button
            class="delete-button delete-image-button"
            @click="deleteFromCart(item.id)"
          >
            x
          </button>
        </td>
      </tr>
      <tr>
        <td>Total price :</td>
        <td>{{ totalPrice }} €</td>
        <td>Article numbers :</td>
        <td>{{ cart.length }}</td>
        <td>
          <button class="delete-button delete-all-button" @click="emptyCart">
            Empty cart
          </button>
        </td>
      </tr>
    </table>
    <button id="confirm-purchase-button" @click="buyCartContent">
      Confirm purchase
    </button>
  </div>
  <div v-else>
    Cart is empty. You can purchase images at
    <router-link to="/public-gallery" id="public-gallery"
      >public gallery</router-link
    >
  </div>
</template>
<script setup lang="ts">
import { useUser } from "@/store/User";
import { storeToRefs } from "pinia";
import { ref, computed, onMounted } from "vue";
import { useImage } from "@/store/Image";
import { useNotification } from "@/store/Notification";

const imageStore = useImage();
const store = useUser();
const { cart } = storeToRefs(store);
const storeNotification = useNotification();
// in the end, it will be get by an endpoint

// let cartImages = ref([
//   {
//     id: 1,
//     source: "the_hearth_of_the_andes.JPG",
//     price: 50,
//     public: false,
//     owner: "Nicolas",
//   },
//   {
//     id: 3,
//     source: "stonks.jpg",
//     price: 800,
//     public: true,
//     owner: "Gregory",
//   },
// ]);
const totalPrice = computed(() => {
  return cart.value.reduce((accumulator, element) => {
    return accumulator + element.price;
  }, 0);
});
const deleteFromCart = (id: number) => {
  cart.value = cart.value.filter((image) => {
    return image.id != id;
  });
};
const emptyCart = () => {
  cart.value = [];
};
const buyCartContent = () => {
  storeNotification.setMessage("Congratulation, you're a pigeon !", false);
  emptyCart();
};
</script>
<style scoped>
#confirm-purchase-button {
  background-color: lavender;
  border: none;
  border-radius: 2rem;
  font-size: 2rem;
  margin: 0.5rem;
  padding: 1rem;
}
tr td {
  border-top: 5px solid white;
  border-bottom: 5px solid white;
  background-color: white;
}
tr td:last-child {
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
  border-right: 5px solid white;
}
tr td:first-child {
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;

  border-left: 5px solid white;
}
table td {
  width: 20%;
  padding: 1rem;
}
table th {
  padding: 1rem;
}
table {
  border-collapse: separate;
  border-spacing: 0 1rem;
  margin-left: auto;
  margin-right: auto;
  font-size: 1.25rem;
  width: 75%;
}
.delete-button {
  background-color: lavenderblush;
  border: none;
  color: grey;
}
.delete-image-button {
  font-weight: bold;
  border-radius: 2rem;
  padding: 0.6rem 1.2rem;
  font-size: 1.8rem;
}
.delete-all-button {
  border-radius: 2rem;
  padding: 0.6rem 1.2rem;
  font-size: 1.25rem;
}
</style>
