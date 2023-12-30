<template>
  <div id="username" v-if="logged">
    Hello <b>{{ loggedUsername }}</b> !
    <router-link to="/">Logout</router-link>
  </div>

  <router-link id="cart" v-if="logged" to="/cart"
    ><img
      src="@/assets/cart-shopping-solid.svg"
      alt="cart"
      style="height: 2rem"
    />
    <span v-if="cart.length != 0" id="cart-items-count">{{ cart.length }}</span>
  </router-link>

  <nav v-if="logged">
    <router-link to="/public-gallery">Public</router-link> |
    <router-link to="/personnal-gallery">Personnal</router-link>
  </nav>
  <router-view />
</template>
<script setup lang="ts">
import { useUser } from "@/store/User";
import { storeToRefs } from "pinia";

const store = useUser();
const { loggedUsername, logged, cart } = storeToRefs(store);
</script>
<style>
body {
  background-color: aliceblue;
}
button:hover {
  cursor: pointer;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: rgb(199, 199, 231);
}
h1 {
  font-size: 3rem;
  margin-bottom: 3rem;
}
h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
  margin-top: 1rem;
}
hr {
  margin-top: 3rem;
  margin-bottom: 2rem;
  /* border: none; */
  /* height: 0.5rem;
  background: lavender;
  border-radius: 1rem; */
  border-top: 0.5rem dotted lavender;
  color: transparent;
}
</style>
<style scoped>
#username {
  left: 1rem;
  position: absolute;
  top: 0.5rem;
}
#cart {
  right: 1rem;
  position: absolute;
  top: 0.5rem;
}
#cart:hover {
  filter: invert(100%) sepia(16%) saturate(4662%) hue-rotate(180deg)
    brightness(100%) contrast(96%);
}
#cart-items-count {
  background-color: red;
  border-radius: 5rem;
  color: white;
  font-weight: bold;
  padding: 0.25rem 0.6rem;
  text-decoration: none;
  position: absolute;
  left: -0.5rem;
  top: 1rem;
}
</style>
