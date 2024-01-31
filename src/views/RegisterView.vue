<template>
  <h1>Register</h1>
  <form v-on:submit.prevent="register">
    <input type="text" placeholder="Username" v-model="username" required />
    <input type="password" placeholder="Password" v-model="password" required />
    <input
      type="password"
      placeholder="Confirm password"
      v-model="confirmPassword"
      required
    />
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
import { useNotification } from "@/store/Notification";

const router = useRouter();

let notificationStore = useNotification();

const userStore = useUser();
const store = useUser();
const { loggedUsername, logged } = storeToRefs(store);

let username = ref<string>("");
let password = ref<string>("");
let confirmPassword = ref<string>("");
const register = () => {
  if (password.value != confirmPassword.value) {
    notificationStore.setMessage(
      "Password and confirm password are different",
      true
    );
  } else {
    userStore.register(username.value, password.value);
  }
};

onMounted(() => {
  logged.value = false;
  loggedUsername.value = "";
});
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
  border: none;
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
