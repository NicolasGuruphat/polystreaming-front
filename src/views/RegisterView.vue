<template>
  <h1>Register</h1>
  <form v-on:submit.prevent="register">
    <input type="text" placeholder="Username" v-model="username" required />
    <input type="password" placeholder="Password" v-model="password" required />
    <div style="width: 50%">
      <div style="text-align: left">
        <router-link to="/" id="login">
          You already have an account ? Please login
        </router-link>
      </div>
    </div>
    <button type="submit">Register</button>
  </form>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useUser } from "@/store/User";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";

const router = useRouter();

const store = useUser();
const { loggedUsername, logged } = storeToRefs(store);

let username = ref<string>("");
let password = ref<string>("");

onMounted(() => {
  logged.value = false;
  loggedUsername.value = "";
});
const register = () => {
  let registerSuccessful = true;
  if (!registerSuccessful) return;
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
  background-color: white;
  border: 1px solid grey;
  border-radius: 1rem;
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
