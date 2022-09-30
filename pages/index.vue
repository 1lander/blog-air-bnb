<template>
  <div v-if="airbnbData" class="flex justify-center gap-9">
    <div class="flex-col">
      <h1 class="font-medium leading-tight text-5xl mt-0 mb-2 text-black-600">Our appartement</h1>
      <ListingCard
        :title="airbnbData.name"
        :images="airbnbData.photos"
        :description="airbnbData.sectionedDescription.description"
        :stars="airbnbData.reviewsModule.localizedOverallRating"
        :numberOfGuests="airbnbData.numberOfGuests"
        :city="airbnbData.city"
        :country="airbnbData.country"
      />
    </div>

    <div class="flex-col flex-wrap">
      <h1 class="font-medium leading-tight text-5xl mt-0 mb-2 text-black-600">What our guests think</h1>
      <ReviewCard
        v-for="review in airbnbData.reviews"
        :title="review.author.firstName"
        :description="review.comments"
        :stars="review.rating"
        :profilePic="review.author.thumbnailUrl"
        :datePosted="review.createdAt"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ListingCard from "~/components/ListingCard.vue";
import ReviewCard from "~~/components/ReviewCard.vue";

export default {
  name: "IndexPage",
  components: { ListingCard, ReviewCard },
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
