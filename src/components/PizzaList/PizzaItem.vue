<template>
  <li class="font-light flex">
    <pizza-id>{{ pizza.id }}</pizza-id>

    <pizza-name>{{ pizza.name }}</pizza-name>

    <pizza-gluten>{{ pizza.isGlutenFree }}</pizza-gluten>
  </li>
</template>

<script lang="ts">
export default {
  components: {
    PizzaId: () => import("@/components/PizzaList/PizzaId.vue"),
    PizzaName: () => import("@/components/PizzaList/PizzaName.vue"),
    PizzaGluten: () => import("@/components/PizzaList/PizzaGluten.vue"),
  },
  props: {
    // eslint-disable-next-line no-undef
    pizza: Object as () => Pizza,
  },
};
</script>
