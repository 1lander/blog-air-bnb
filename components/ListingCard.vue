<script setup>
import {
  StarIcon,
  UserIcon,
  BuildingOffice2Icon,
} from "@heroicons/vue/24/solid";

const props = defineProps({
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
})

const imageIndex = ref(0)
const showFullDescription = ref(false)

const viewNextImage = () => {
  if (imageIndex.value >= props.images.length - 1) {
    return
  } else {
    imageIndex.value = imageIndex.value + 1
  }
}

const viewPreviousImage = () => {
  if (imageIndex.value <= 0) {
    return
  } else {
    imageIndex.value = imageIndex.value - 1
  }
}

const toggleReadMore = () => {
  showFullDescription.value = !showFullDescription.value
}

const descriptionView = computed(() => {
  if (showFullDescription.value) {
    return props.description;
  } else {
    return props.description.substring(0, 400) + "...";
  }
})

const imageIndicator = computed(() => {
  return `${imageIndex.value + 1}/${props.images.length}`
})

const address = computed(() => {
  return props.city + ", " + props.country;
})
</script>

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