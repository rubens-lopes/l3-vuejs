<template>
  <li class="font-bold flex">
    <pizza-id>Id</pizza-id>

    <pizza-name />

    <pizza-gluten>Sem glútem</pizza-gluten>
  </li>
</template>

<script lang="ts">
import PizzaId from "@/components/PizzaList/PizzaId.vue";
import PizzaName from "@/components/PizzaList/PizzaName.vue";
import PizzaGluten from "@/components/PizzaList/PizzaGluten.vue";

export default {
  components: {
    PizzaId,
    PizzaName,
    PizzaGluten,
  },
};
</script>
