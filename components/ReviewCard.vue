<template>
  <div
    class="max-w-lg mb-5 py-2 px-6 rounded overflow-hidden bg-neutral-50 shadow-md"
  >
    <div class="flex items-center mb-1 gap-2">
      <img
        class="w-8 l-8 rounded-full"
        :src="profilePic"
        alt="Airbnb profile pic"
      />
      <div class="font-bold text-xl">{{ title }}</div>
      <div class="flex items-center">
        <StarIcon class="h-6 w-6 text-yellow-500" />
        <div>{{ stars }}</div>
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
      v-else-if="this.description.length > 180"
      class="btn text-blue-700 text-base"
      @click="toggleReadMore()"
    >
      read more
    </button>
    <div class="text-gray-500">{{ formatedDate }}</div>
  </div>
</template>

<script>
import {
  StarIcon,
  UserIcon,
  BuildingOffice2Icon,
} from "@heroicons/vue/24/solid";
import moment from "moment";

export default {
  name: "ReviewCard",
  components: { StarIcon, UserIcon, BuildingOffice2Icon },
  props: {
    title: {
      type: String,
      default: "Title",
    },
    description: {
      type: String,
      default: "desc",
    },
    stars: {
      type: Number,
      default: 0,
    },
    profilePic: {
      type: String,
      default: "profile pic",
    },
    datePosted: {
      type: String,
      default: moment(),
    },
  },
  data() {
    return {
      imageIndex: 0,
      showFullDescription: false,
    };
  },
  methods: {
    toggleReadMore() {
      this.showFullDescription = !this.showFullDescription;
    },
  },
  computed: {
    descriptionView() {
      if (this.description.length < 180) {
        return this.description;
      } else {
        if (this.showFullDescription) {
          return this.description;
        } else {
          return this.description.substring(0, 180) + "...";
        }
      }
    },
    formatedDate() {
      return moment(this.datePosted).format("DD/MM/YYYY");
    },
  },
};
</script>
