import { defineStore } from "pinia";
import { reactive, ref } from "vue";

export const useUser = defineStore("app", () => {
  const loggedUsername = ref("");
  const logged = ref(false);
  const cart = reactive<Array<number>>([]);
  return { loggedUsername, logged, cart };
});
