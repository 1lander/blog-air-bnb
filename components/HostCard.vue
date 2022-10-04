<template>
  <div
    class="max-w-lg mb-5 py-2 px-6 rounded overflow-hidden bg-neutral-50 shadow-md"
  >
    <div class="flex items-center mb-1 gap-2">
      <img
        class="w-20 l-20 rounded-full"
        :src="profilePic"
        alt="Airbnb profile pic"
      />
      <div class="flex flex-col">
        <div class="flex flex-row items-center">
          <div class="font-bold text-2xl">{{ name }}</div>
        </div>
        <div class="flex flex-row items-center">
          <div v-for="badge in badges">
            <div class="flex flex-row items-center">
              <ChatBubbleBottomCenterIcon v-if="badge.id === 'reviews'" class="h-7 w-7 text-blue-400" />
              <CheckBadgeIcon v-if="badge.id === 'identity-verified'" class="h-7 w-7 text-blue-400" />
              <div>{{badge.label}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-html="description" class="text-gray-700 text-base"></div>
  </div>
</template>

<script>
import { CheckBadgeIcon, ChatBubbleBottomCenterIcon } from "@heroicons/vue/24/solid";

export default {
  name: "ReviewCard",
  components: { CheckBadgeIcon, ChatBubbleBottomCenterIcon },
  props: {
    name: {
      type: String,
      default: "Title",
    },
    description: {
      type: String,
      default: "desc",
    },
    isSuperhost: {
      type: Boolean,
      default: false,
    },
    badges: {
      type: [Object],
      default: [],
    },
    languages: {
      type: [String],
      default: [],
    },
    profilePic: {
      type: String,
      default: "profile pic",
    },
  },
  data() {
    return {
      showFullDescription: false,
    };
  },
  methods: {
    toggleReadMore() {
      this.showFullDescription = !this.showFullDescription;
    },
  },
};
</script>
