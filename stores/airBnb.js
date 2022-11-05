import { defineStore } from "pinia";
import data from '../assets/data/dataset_airbnb-scraper-task.json'

export const useAirBnbStore = defineStore("airBnb", {
  state: () => ({
    airBnbListing: data,
    reviews: data.reviews,
    host:  data.primaryHost
  })
});
