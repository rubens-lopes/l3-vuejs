import { apiFactory } from "@/services";

const api = apiFactory("pizza");

export const allPizzas = async () => {
  const { data } = await api.get(`/`);

  return data;
};
