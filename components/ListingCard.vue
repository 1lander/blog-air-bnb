<template>
  <div class="max-w-xl rounded overflow-hidden bg-neutral-50 shadow-md">
    <div class="relative">
      <p class="text-white ml-2 absolute bottom-0 right-2">
        {{ imageIndicator }}
      </p>
      <img
        class="w-full"
        :src="images[imageIndex].large"
        alt="Airbnb listing photo"
      />
    </div>

    <div class="flex justify-between">
      <button class="btn text-blue-700 ml-2" @click="viewPreviousImage">
        Previous
      </button>
      <button class="btn text-blue-700 mr-2" @click="viewNextImage">
        Next
      </button>
    </div>
    <div class="px-6 py-2 pb-2">
      <div class="font-bold text-2xl mb-2">{{ title }}</div>

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
          <div>{{ address }}</div>
        </div>
      </div>

      <div v-html="descriptionView" class="text-gray-700 text-base"></div>

      <button
        v-if="showFullDescription"
        class="btn text-blue-700 text-base"
        @click="toggleReadMore()"
      >
        show less
      </button>
      <button
        v-else
        class="btn text-blue-700 text-base"
        @click="toggleReadMore()"
      >
        read more
      </button>
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
    country: {
      type: String,
      default: "Country",
    },
  },
  data() {
    return {
      imageIndex: 0,
      showFullDescription: false,
    };
  },
  methods: {
    viewNextImage() {
      if (this.imageIndex >= this.images.length - 1) {
        return;
      } else {
        this.imageIndex = this.imageIndex + 1;
      }
    },
    viewPreviousImage() {
      if (this.imageIndex <= 0) {
        return;
      } else {
        this.imageIndex = this.imageIndex - 1;
      }
    },
    toggleReadMore() {
      this.showFullDescription = !this.showFullDescription;
    },
  },
  computed: {
    descriptionView() {
      if (this.showFullDescription) {
        return this.description;
      } else {
        return this.description.substring(0, 400) + "...";
      }
    },
    imageIndicator() {
      return this.imageIndex + 1 + "/" + this.images.length;
    },
    address() {
      return this.city + ", " + this.country;
    },
  },
};
</script>
