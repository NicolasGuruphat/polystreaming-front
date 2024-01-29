import { defineStore } from "pinia";
import { reactive, ref } from "vue";

export const useUser = defineStore("app", () => {
  const loggedUsername = ref("");
  const logged = ref(false);
  const cart = reactive<Array<number>>([]);
  const login = () => {
    return;
  };
  const register = () => {
    return;
  };
  const logout = () => {
    return;
  };
  return { loggedUsername, logged, cart, login, register, logout };
});
