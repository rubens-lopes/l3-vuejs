<template>
  <router-link
    v-bind="$attrs"
    v-on="$listeners"
    class="
      text-yellow-600
      hover:text-yellow-500
      font-mono
      uppercase
      font-bold
      underline
    "
  >
    <slot />
  </router-link>
</template>

<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>
