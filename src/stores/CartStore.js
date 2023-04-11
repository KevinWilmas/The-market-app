import { groupBy } from "lodash";
import { defineStore } from "pinia";
import { useAuthUserStore } from "@/stores/AuthUserStore";

export const useCartStore = defineStore("CartStore", {
  state: () => {
    return {
      items: [],
    };
  },
  getters: {
    count: (state) => state.items.length,
    isEmpty: (state) => state.count === 0,
    grouped: (state) => {
      // grouping the cart in alphabetical order
      const grouped = groupBy(state.items, (item) => item.name);
      const sorted = Object.keys(grouped).sort();
      let inOrder = {};
      sorted.forEach((key) => (inOrder[key] = grouped[key]));
      return inOrder;
    },
    groupCount: (state) => (name) => state.grouped[name].length,
    //cart total
    total: (state) => state.items.reduce((p, c) => p + c.price, 0),
  },

  actions: {
    checkout() {
      const authUserStore = useAuthUserStore();
      alert(
        `${authUserStore.username} username just bought ${this.count} items at a total of $${this.total}`
      );
    },
    addItems(count, item) {
      count = parseInt(count);
      for (let index = 0; index < count; index++) {
        this.items.push({ ...item });
      }
    },
    // Removing items from cart
    clearItem(itemName) {
      this.items = this.items.filter((item) => item.name !== itemName);
    },
    // Reducing or increasing item count in the cart
    setItemCount(item, count) {
      this.clearItem(item.name);
      this.addItems(count, item);
    },
  },
});
