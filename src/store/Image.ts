import { defineStore } from "pinia";
import { reactive, ref } from "vue";

export const useImage = defineStore("app", () => {
  const uploadImage = () => {
    return;
  };
  const modifyImage = () => {
    return;
  };
  const deleteImage = () => {
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
