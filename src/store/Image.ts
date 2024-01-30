import axios from "axios";
import { defineStore } from "pinia";
import { reactive, ref } from "vue";

export const useImage = defineStore("imageStore", () => {
  const personnalImages = ref([
    { id: 1, source: "blue.png", price: 50, openedToMarketplace: false },
    { id: 2, source: "stonks.jpg", price: 540, openedToMarketplace: true },
    { id: 3, source: "gratin.webp", price: 800, openedToMarketplace: true },
    {
      id: 4,
      source: "the_hearth_of_the_andes.JPG",
      price: 300,
      openedToMarketplace: true,
    },
  ]);
  const sharedImages = ref([
    { id: 1, source: "blue.png", price: 50, openedToMarketplace: false },
    { id: 2, source: "stonks.jpg", price: 540, openedToMarketplace: true },
    { id: 3, source: "gratin.webp", price: 800, openedToMarketplace: true },
    {
      id: 4,
      source: "the_hearth_of_the_andes.JPG",
      price: 300,
      openedToMarketplace: true,
    },
  ]);
  const publicImages = ref([
    {
      id: 1,
      source: "blue.png",
      price: 50,
      openedToMarketplace: false,
      creator: "Nicolas",
    },
    {
      id: 2,
      source: "stonks.jpg",
      price: 540,
      openedToMarketplace: true,
      creator: "Nicolas",
    },
    {
      id: 3,
      source: "gratin.webp",
      price: 800,
      openedToMarketplace: true,
      creator: "Mathis",
    },
    {
      id: 4,
      source: "the_hearth_of_the_andes.JPG",
      price: 300,
      openedToMarketplace: true,
      creator: "Nicolas",
    },
    {
      id: 5,
      source: "blue.png",
      price: 50,
      openedToMarketplace: false,
      creator: "Nicolas",
    },
    {
      id: 6,
      source: "stonks.jpg",
      price: 540,
      openedToMarketplace: true,
      creator: "Nicolas",
    },
    {
      id: 7,
      source: "gratin.webp",
      price: 800,
      openedToMarketplace: true,
      creator: "Nicolas",
    },
    {
      id: 8,
      source: "the_hearth_of_the_andes.JPG",
      price: 300,
      openedToMarketplace: true,
      creator: "Nicolas",
    },
  ]);
  function uploadImage(file: any) {
    /*
    axios
      .post(
        "http://localhost:8080/images/save",
        {
          name: "",
          price: 0.0,
          description: "",
          image: file,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then(() => {
        console.log("image uploaded");
      });
      */
    console.log(file);

    // getMyImages();
  }
  const modifyImage = () => {
    return;
  };
  const deleteImage = (id: number) => {
    return;
  };
  const shareImage = () => {
    return;
  };
  const unshareImage = () => {
    // remove a person
    return;
  };
  const removeFromMyShared = () => {
    // remove me
    return;
  };
  const getMyImages = () => {
    return;
  };
  const getImageSharedWithMe = () => {
    return;
  };
  const getPublicImages = () => {
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
