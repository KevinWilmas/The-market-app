import { defineStore } from "pinia";

export const useAuthUserStore = defineStore("AuthUserStore", {
  state: () => {
    return {
      username: "kevinwilmas", // In real life will be imported dynamically
    };
  },
});
