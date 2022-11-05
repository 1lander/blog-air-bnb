<script setup>
import {
  CheckBadgeIcon,
  ChatBubbleBottomCenterIcon,
  LanguageIcon,
  TrophyIcon,
} from "@heroicons/vue/24/solid";

defineProps({
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
})
</script>

<template>
  <div
    class="max-w-xl mb-5 py-2 px-6 rounded overflow-hidden bg-neutral-50 shadow-md"
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
        <div v-if="isSuperhost" class="flex flex-row items-center">
          <TrophyIcon class="h-5 w-5 text-yellow-500" />
          <div class="text-lg">Super Host</div>
        </div>
      </div>
    </div>

    <div class="flex flex-row items-center mb-2 mt-2">
      <div v-for="badge in badges">
        <div class="flex flex-row items-center">
          <ChatBubbleBottomCenterIcon
            v-if="badge.id === 'reviews'"
            class="h-6 w-6 text-blue-400 ml-2"
          />
          <CheckBadgeIcon
            v-if="badge.id === 'identity-verified'"
            class="h-6 w-6 text-blue-400 ml-2"
          />
          <div>{{ badge.label }}</div>
        </div>
      </div>
    </div>

    <div class="flex flex-row items-center mb-2 mt-2">
      <LanguageIcon class="h-6 w-6 text-blue-400 ml-2" />
      <div v-for="(language, i) in languages">
        <span>{{ language }}</span
        >{{ i < languages.length - 1 ? ", " : "" }}
      </div>
    </div>

    <div v-html="description" class="text-gray-700 text-base"></div>
  </div>
</template>