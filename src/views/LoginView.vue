<template>
  <h1>Login</h1>
  <form v-on:submit.prevent="login">
    <input type="text" placeholder="Username" v-model="username" required />
    <input type="password" placeholder="Password" v-model="password" required />
    <div style="width: 50%">
      <div style="text-align: left">
        <router-link to="/register" id="register">
          You don't have an account ? Please register
        </router-link>
      </div>
    </div>
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
  border-radius: 1rem;
  font-size: 1.5rem;
  margin: 1rem;
  padding: 0.75rem 0.75rem;
  width: 50%;
}
button {
  font-size: 1.25rem;
  background-color: lavender;
  border: 1px solid grey;
  border-radius: 1rem;
  border: none;
  padding: 0.75rem 1.25rem;
  width: 50%;
  margin: 1rem 0;
}
form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
#register {
  margin: 1rem 0;
}
</style>
