<template>
  <div class="container">
    <h2 class="my-4">Pizzas</h2>

    <ul class="flex flex-col">
      <pizza-headers />

      <template v-for="pizza in pizzas">
        <pizza-item :key="pizza.id" :pizza="pizza" />
      </template>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import PizzaItem from "@/components/PizzaList/PizzaItem.vue";
import PizzaHeaders from "@/components/PizzaList/PizzaHeaders.vue";
import { allPizzas } from "@/services";

export default Vue.extend({
  components: {
    PizzaItem,
    PizzaHeaders,
  },
  data() {
    return {
      // eslint-disable-next-line no-undef
      pizzas: [] as Pizza[],
    };
  },
  async beforeCreate() {
    this.$data.pizzas = await allPizzas();
  },
});
</script>
