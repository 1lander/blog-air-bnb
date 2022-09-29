<template>
  <div>
    <NavBar />
    <div v-if="airbnbData" class="flex justify-center gap-5">
      <ListingCard
        :title="airbnbData.name"
        :images="airbnbData.photos"
        :description="airbnbData.sectionedDescription.description"
        :stars="airbnbData.reviewsModule.localizedOverallRating"
        :numberOfGuests="airbnbData.numberOfGuests"
        :city="airbnbData.city"
      />
      <!-- <ListingCard
        :title="airbnbData.name"
        :headerPhoto="airbnbData.photos[0].large"
        :description="airbnbData.sectionedDescription.description"
      />
      <ListingCard
        :title="airbnbData.name"
        :headerPhoto="airbnbData.photos[0].large"
        :description="airbnbData.sectionedDescription.description"
      /> -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
import NavBar from "~/components/NavBar.vue";
import ListingCard from "~/components/card/ListingCard.vue";

export default {
  name: "IndexPage",
  components: { NavBar, ListingCard },
  data() {
    return {
      airbnbData: null,
    };
  },
  created() {
    axios
      .get(
        "https://api.apify.com/v2/actor-tasks/accurate_desert~airbnb-scraper-task/runs/last/dataset/items?token=apify_api_RgjUrvWcrpyl9mef0QN8A9m6RYnB9s1Ees9A"
      )
      .then((response) => {
        console.log(response.data[0]);
        this.airbnbData = response.data[0];
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
