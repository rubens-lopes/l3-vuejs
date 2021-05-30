import { shallowMount } from "@vue/test-utils";
import PizzaItem from "@/components/PizzaList/PizzaItem.vue";

describe("PizzaItem.vue", () => {
  it("renders a pizza properly", () => {
    const pizza = {
      id: 2,
      name: "Moda da casa",
      isGlutenFree: false,
    };

    const wrapper = shallowMount(PizzaItem, {
      propsData: { pizza },
    });

    expect(wrapper).toMatchSnapshot();
  });
});
