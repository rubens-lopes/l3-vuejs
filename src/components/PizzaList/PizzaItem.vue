<template>
  <li class="font-light flex">
    <pizza-id>{{ pizza.id }}</pizza-id>

    <pizza-name>{{ pizza.name }}</pizza-name>

    <pizza-gluten>
      <font-awesome-icon
        :icon="getGlutenIcon({ isGlutenFree: pizza.isGlutenFree })"
      ></font-awesome-icon>
    </pizza-gluten>
  </li>
</template>

<script lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import PizzaId from "@/components/PizzaList/PizzaId.vue";
import PizzaName from "@/components/PizzaList/PizzaName.vue";
import PizzaGluten from "@/components/PizzaList/PizzaGluten.vue";

export default {
  components: {
    FontAwesomeIcon,
    PizzaId,
    PizzaName,
    PizzaGluten,
  },
  props: {
    // eslint-disable-next-line no-undef
    pizza: Object as () => Pizza,
  },
  methods: {
    getGlutenIcon({ isGlutenFree = false } = {}) {
      return isGlutenFree ? `check` : `times`;
    },
  },
};
</script>
