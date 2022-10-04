<template>
  <div v-if="store.airBnbListing" class="flex justify-center gap-9 flex-wrap">
    <div class="flex-col">
      <h1 class="font-medium leading-tight text-5xl mt-0 mb-2 text-black-600">Our appartement</h1>
      <ListingCard
        :title="store.airBnbListing.name"
        :images="store.airBnbListing.photos"
        :description="store.airBnbListing.sectionedDescription.description"
        :stars="store.airBnbListing.reviewsModule.localizedOverallRating"
        :numberOfGuests="store.airBnbListing.numberOfGuests"
        :city="store.airBnbListing.city"
        :country="store.airBnbListing.country"
      />
    </div>

    <div class="flex-col">
      <h1 class="font-medium leading-tight text-5xl mt-0 mb-2 text-black-600">What our guests think</h1>
      <ReviewCard
        v-for="review in store.airBnbListing.reviews"
        :title="review.author.firstName"
        :description="review.comments"
        :stars="review.rating"
        :profilePic="review.author.thumbnailUrl"
        :datePosted="review.createdAt"
      />
    </div>
  </div>
</template>

<script setup>
import { useAirBnbStore } from "~~/stores/airBnb";
import ListingCard from "~/components/ListingCard.vue";
import ReviewCard from "~~/components/ReviewCard.vue";

const store = useAirBnbStore();

onMounted(() => {
  store.getAirBnbListing()
})
</script>
