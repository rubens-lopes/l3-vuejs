<template>
  <li class="font-bold flex">
    <pizza-id>Id</pizza-id>

    <pizza-name />

    <pizza-gluten>Sem glútem</pizza-gluten>
  </li>
</template>

<script lang="ts">
export default {
  components: {
    PizzaId: () => import("@/components/PizzaList/PizzaId.vue"),
    PizzaName: () => import("@/components/PizzaList/PizzaName.vue"),
    PizzaGluten: () => import("@/components/PizzaList/PizzaGluten.vue"),
  },
};
</script>
