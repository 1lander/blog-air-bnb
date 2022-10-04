<template>
  <div v-if="store.host" class="flex justify-center gap-9 flex-wrap">
    <HostCardVue
      :name="store.host.name"
      :description="store.host.about"
      :isSuperHost="store.host.isSuperhost"
      :badges="store.host.badges"
      :languages="store.host.languages"
      :profilePic="store.host.pictureUrl"
    />
  </div>
</template>

<script setup>
import { useAirBnbStore } from "~~/stores/airBnb";
import HostCardVue from "~~/components/HostCard.vue";

const store = useAirBnbStore();

onMounted(() => {
  if(!store.host){
    store.getAirBnbListing()
  }
})
</script>
