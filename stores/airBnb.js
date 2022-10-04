import { defineStore } from "pinia";
import axios from "axios";

export const useAirBnbStore = defineStore("airBnb", {
  state: () => ({
    airBnbListing: null,
  }),
  actions: {
    getAirBnbListing() {
      axios
        .get(
          "https://api.apify.com/v2/actor-tasks/accurate_desert~airbnb-scraper-task/runs/last/dataset/items?token=apify_api_RgjUrvWcrpyl9mef0QN8A9m6RYnB9s1Ees9A"
        )
        .then((response) => {
          console.log(response.data[0]);
          this.airBnbListing = response.data[0];
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});
