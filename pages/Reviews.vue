<template>
  <div v-if="store.host" class="flex-col justify-center gap-9">
    <ReviewCard
      v-for="review in store.reviews"
      :title="review.author.firstName"
      :description="review.comments"
      :stars="review.rating"
      :profilePic="review.author.thumbnailUrl"
      :datePosted="review.createdAt"
    />
  </div>
</template>

<script setup>
import { useAirBnbStore } from "~~/stores/airBnb";
import ReviewCard from "~~/components/ReviewCard.vue";

const store = useAirBnbStore();

onMounted(() => {
  if (!store.reviews) {
    store.getAirBnbListing();
  }
});
</script>
