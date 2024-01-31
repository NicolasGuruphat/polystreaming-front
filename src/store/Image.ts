import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";
import { useNotification } from "@/store/Notification";
import router from "@/router";

export const useImage = defineStore("imageStore", () => {
  const notificationStore = useNotification();
  const personnalImages = ref([]);

  const sharedImages = ref([]);
  const publicImages = ref([]);

  function uploadImage(file: any) {
    const formData = new FormData();
    formData.append("image", file);
    formData.append("price", "0.0");
    formData.append("name", "");
    formData.append("description", "");
    formData.append("public", "false");
    axios
      .post("http://localhost:8080/images/save", formData, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => {
        getMyImages();
      })
      .catch(() => {
        notificationStore.setMessage("Server error", true);
      });
  }
  const modifyImage = (id: number, data: any) => {
    console.log("update");
    const formData = new FormData();
    formData.append("description", data.description);
    formData.append("name", data.name);
    formData.append("price", data.price);
    formData.append("public", data.ispublic);
    axios
      .put("http://localhost:8080/images/update/" + id, formData, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then(() => {
        getMyImages();
      })
      .catch((error) => {
        if (error.response.status === 403) {
          router.push("/");
        } else {
          notificationStore.setMessage("Server error", true);
        }
      });
  };
  const deleteImage = (id: number) => {
    axios
      .delete("http://localhost:8080/images/delete/" + id, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then(() => {
        getMyImages();
      })
      .catch((error) => {
        if (error.response.status === 403) {
          router.push("/");
        } else {
          notificationStore.setMessage("Server error", true);
        }
      });
  };
  const shareImage = (id: number, username: string) => {
    axios
      .post(
        "http://localhost:8080/images/share",
        { username: username, idimage: id },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      )
      .then(() => {
        getMyImages();
      })
      .catch((error) => {
        if (error.response.status === 403) {
          router.push("/");
        } else {
          notificationStore.setMessage("Server error", true);
        }
      });
    return;
  };
  const unshareImage = (username: string, id: number) => {
    axios
      .put(
        "http://localhost:8080/images/unshare",
        {
          username: username,
          idimage: id,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      )
      .then(() => {
        getMyImages();
      })
      .catch((error) => {
        if (error.response.status === 403) {
          router.push("/");
        } else {
          notificationStore.setMessage("Server error", true);
        }
      });
    return;
  };
  const removeFromMyShared = (id: number) => {
    const formData = new FormData();
    formData.append("idimage", id.toString());
    axios
      .put("http://localhost:8080/images/unsharewithme", formData, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then(() => {
        getImageSharedWithMe();
      })
      .catch((error) => {
        if (error.response.status === 403) {
          router.push("/");
        } else {
          notificationStore.setMessage("Server error", true);
        }
      });
  };
  const getMyImages = () => {
    axios
      .get("http://localhost:8080/images/mine", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        personnalImages.value = response.data;
      })
      .catch((error) => {
        if (error.response.status === 403) {
          router.push("/");
        } else {
          notificationStore.setMessage("Server error", true);
        }
      });
  };
  const getImageSharedWithMe = () => {
    axios
      .get("http://localhost:8080/images/shared", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        sharedImages.value = response.data;
      })
      .catch((error) => {
        if (error.response.status === 403) {
          router.push("/");
        } else {
          notificationStore.setMessage("Server error", true);
        }
      });
  };
  const getPublicImages = () => {
    axios
      .get("http://localhost:8080/images/public")
      .then((response) => {
        publicImages.value = response.data;
      })
      .catch(() => {
        notificationStore.setMessage("Server error", true);
      });
    return;
  };
  return {
    personnalImages,
    sharedImages,
    publicImages,
    uploadImage,
    modifyImage,
    deleteImage,
    shareImage,
    unshareImage,
    removeFromMyShared,
    getMyImages,
    getImageSharedWithMe,
    getPublicImages,
  };
});
