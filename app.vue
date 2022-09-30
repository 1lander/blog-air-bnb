<template>
  <div class="bg-white">
    <NavBar />
    <NuxtPage />
  </div>
</template>

<script>
  import '@/assets/css/tailwind.css'
  import NavBar from "~/components/NavBar.vue";
 
  export default {
    components: { NavBar },
  };
</script>  