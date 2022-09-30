<template>
  <nav class="relative flex flex-wrap items-center justify-between px-2 py-3 bg-cyan-500 mb-3">
    <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
      <div class="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
        <NuxtLink class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white" to="/">
          Carla en Tom
        </NuxtLink>
      </div>

      <div>
        <NuxtLink class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white" to="/About">
          About
        </NuxtLink>
        <NuxtLink class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white" to="/Photos">
          Photos
        </NuxtLink>
        <NuxtLink class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white" to="/Reviews">
          Reviews
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar"
}
</script>