import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import { useNotification } from "@/store/Notification";

export const useUser = defineStore("userStore", () => {
  const loggedUsername = ref(localStorage.getItem("username"));
  const logged = ref(false);
  const cart = reactive<Array<number>>([]);
  const router = useRouter();
  const notificationStore = useNotification();
  const otherUsernames = ref([]);

  const getOtherUsernames = () => {
    axios
      .get("http://localhost:8080/authentication/users", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((resposne) => {
        otherUsernames.value = resposne.data;
      });
  };
  const login = (username: string, password: string) => {
    axios
      .post("http://localhost:8080/authentication/login", {
        name: username,
        password: password,
      })
      .then((response) => {
        router.push("/public-gallery");
        loggedUsername.value = username;
        logged.value = true;
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("username", username);
      })
      .catch((error) => {
        if (error.response.status === 404) {
          notificationStore.setMessage("Bad credentials", true);
        } else {
          notificationStore.setMessage("Server error", true);
        }
      });
  };
  const register = (username: string, password: string) => {
    axios
      .post("http://localhost:8080/authentication/signup", {
        name: username,
        password: password,
      })
      .then(() => {
        notificationStore.setMessage("Account created successfully", false);
        router.push("/login");
      })
      .catch((error) => {
        if (error.response.status === 400) {
          notificationStore.setMessage("Already existing user", true);
        } else {
          notificationStore.setMessage("Server error", true);
        }
      });
    return;
  };
  const logout = () => {
    if (localStorage.getItem("token") != "") {
      axios
        .post(
          "http://localhost:8080/authentication/logout",
          {},
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        )
        .catch(() => {
          notificationStore.setMessage("Server error", true);
        })
        .finally(() => {
          localStorage.setItem("username", "");
          localStorage.setItem("token", "");
          logged.value = false;
          loggedUsername.value = "";
        });
    }
  };
  return {
    loggedUsername,
    logged,
    cart,
    otherUsernames,
    login,
    register,
    logout,
    getOtherUsernames,
  };
});
