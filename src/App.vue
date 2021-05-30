<template>
  <div>
    <div class="p-7">
      <menu-item to="/">Home</menu-item> |
      <menu-item to="/about">About</menu-item>
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
