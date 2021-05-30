<template>
  <div class="max-w-screen-md m-auto p-6 bg-gray-300 min-h-screen">
    <div class="px-7">
      <menu-item to="/">Home</menu-item>
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
import MenuItem from "@/components/MenuItem.vue";

export default {
  components: {
    MenuItem,
  },
};
</script>
