import { makeServer, MirageServer } from "@/server";
import { allPizzas } from "@/services";

describe("PizzaService", () => {
  let server: MirageServer;

  beforeEach(() => {
    server = makeServer({ environment: "test" });
  });

  afterEach(() => {
    server.shutdown();
  });

  it("allPizzas should return pizza list", async () => {
    server.create("pizza", { name: "Peperoni" });
    server.create("pizza", { name: "Marguerita", isGlutenFree: true });

    const result = await allPizzas();

    expect(result).toIncludeAllMembers(
      server.schema.db.pizzas.where(() => true)
    );
  });
});
