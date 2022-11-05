<script setup>
import { useAirBnbStore } from "~~/stores/airBnb";
import ListingCard from "~/components/ListingCard.vue";
import ReviewCard from "~~/components/ReviewCard.vue";
import HostCardVue from "~~/components/HostCard.vue";

const store = useAirBnbStore();
</script>

<template>
  <div v-if="store.airBnbListing" class="flex justify-center gap-9 flex-wrap">
    <div class="flex-col gap-9">
      <div>
        <h1 class="font-medium leading-tight text-5xl mb-2 text-black-600">
          Our appartement
        </h1>
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
      <div>
        <h1 class="font-medium leading-tight text-5xl mb-2 text-black-600">
          About us
        </h1>
        <HostCardVue
          :name="store.host.name"
          :description="store.host.about"
          :isSuperhost="store.host.isSuperhost"
          :badges="store.host.badges"
          :languages="store.host.languages"
          :profilePic="store.host.pictureUrl"
        />
      </div>
    </div>

    <div class="flex-col">
      <h1 class="font-medium leading-tight text-5xl mb-2 text-black-600">
        What our guests think
      </h1>
      <ReviewCard
        v-for="review in store.reviews"
        :title="review.author.firstName"
        :description="review.comments"
        :stars="review.rating"
        :profilePic="review.author.thumbnailUrl"
        :datePosted="review.createdAt"
      />
    </div>
  </div>
</template>