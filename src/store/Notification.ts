import { defineStore } from "pinia";
import { ref } from "vue";

export const useNotification = defineStore("notificatioStore", () => {
  const enabled = ref(false);
  const message = ref("");
  const isError = ref(true);
  const setMessage = (notifMessage: string, error: boolean) => {
    console.log(error);
    isError.value = error;
    if (error) {
      message.value = "Error : " + notifMessage;
    } else {
      message.value = notifMessage;
    }
    enabled.value = true;
    setTimeout(function () {
      message.value = "";
      enabled.value = false;
      isError.value = true;
    }, 2000);
  };

  return { enabled, message, isError, setMessage };
});
