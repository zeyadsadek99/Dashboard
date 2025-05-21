<template>
  <div class="flex flex-col app !bg-white">
    <navbar />
    <div class="flex">
      <sideBar />
      
      <div class="app_wrapper flex-1 p-4">
        <router-link to="/">Home</router-link>
        <router-link to="/slider">Slider</router-link>
        <router-view></router-view>
      </div>
    </div>
    <footer class="mt-auto">
      <p class="text-sub py-3 text-center text-sm">
        "All Copyrights are reserved by"

        <bdi>
          <span class="text-primary font-medium"> ZUKSH </span> @{{
            currentYear
          }}
        </bdi>
      </p>
    </footer>
  </div>
</template>

<script setup>
const currentYear = new Date().getFullYear();
</script>

<style lang="scss">
.app {
  min-height: calc(100vh - 55px);
}
.app_wrapper {
  div {
    @apply w-full flex flex-col;
  }
}
</style>
