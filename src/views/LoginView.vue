<template>
  <h1>Login</h1>
  <form v-on:submit.prevent="login">
    <input type="string" placeholder="Username" v-model="username" />
    <input type="string" placeholder="Password" v-model="password" />
    <button type="submit">Login</button>
  </form>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useUser } from "@/store/User";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";

const router = useRouter();

const store = useUser();
const { loggedUsername, logged } = storeToRefs(store);

let username = ref<string>("");
let password = ref<string>("");

const login = () => {
  let loginSuccessful = true;
  if (!loginSuccessful) return;
  router.push("/public-gallery");
  loggedUsername.value = username.value;
  logged.value = true;
};
</script>
<style scoped>
input {
  border: none;
  font-size: 1.5rem;
  margin: 1rem;
  width: 50%;
}
button {
  font-size: 1.25rem;
  width: 50%;
}
</style>
