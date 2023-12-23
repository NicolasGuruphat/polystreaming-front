<template>
  <div id="username" v-if="logged">Hello {{ loggedUsername }} !</div>

  <router-link id="cart" v-if="logged" to="/cart">cart</router-link>

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
const { loggedUsername, logged } = storeToRefs(store);
</script>
<style>
body {
  background-color: aliceblue;
}
button:hover {
  cursor: pointer;
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
</style>
<style>
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
  color: #42b983;
}
</style>
