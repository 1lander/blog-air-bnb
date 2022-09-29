<template>
  <div class="max-w-sm rounded overflow-hidden shadow-2xl">
    <img
      class="w-full"
      :src="images[imageIndex].large"
      alt="Airbnb listing photo"
    />
    <div class="flex justify-between">
      <button class="btn text-blue-700 ml-2" @click="viewPreviousImage">Previous</button>
      <button class="btn text-blue-700 mr-2" @click="viewNextImage">Next</button>
    </div>
    <div class="px-6 py-4 pb-2">
      <div class="font-bold text-xl mb-2">{{ title }}</div>

      <div class="flex direction-row gap-4 mb-3">
        <div class="flex items-center">
          <StarIcon class="h-6 w-6 text-yellow-500" />
          <div>{{ stars }}</div>
        </div>

        <div class="flex items-center">
          <UserIcon class="h-6 w-6 text-grey-500" />
          <div>{{ numberOfGuests }}</div>
        </div>

        <div class="flex items-center">
          <BuildingOffice2Icon class="h-6 w-6 text-grey-500" />
          <div>{{ city }}</div>
        </div>
      </div>

      <p class="text-gray-700 text-base">
        {{ shortDescription }}
      </p>
      <p class="text-blue-700 text-base">read more</p>
    </div>
  </div>
</template>

<script>
import {
  StarIcon,
  UserIcon,
  BuildingOffice2Icon,
} from "@heroicons/vue/24/solid";

export default {
  name: "ListingCard",
  components: { StarIcon, UserIcon, BuildingOffice2Icon },
  props: {
    title: {
      type: String,
      default: "Title",
    },
    description: {
      type: String,
      default: "Title",
    },
    images: {
      type: [Object],
      default: [],
    },
    stars: {
      type: String,
      default: "0",
    },
    numberOfGuests: {
      type: Number,
      default: 1,
    },
    city: {
      type: String,
      default: "City",
    },
  },
  data() {
    return {
      imageIndex: 0,
    };
  },
  methods: {
    viewNextImage() {
      if (this.imageIndex >= this.images.length - 1) {
        return;
      }else{
        this.imageIndex = this.imageIndex + 1;
      }
    },
    viewPreviousImage() {
      if (this.imageIndex <= 0) {
        return;
      }else{
        this.imageIndex = this.imageIndex - 1;
      }
    },
  },
  computed: {
    shortDescription() {
      return this.description.substring(0, 200) + "...";
    },
  },
};
</script>
