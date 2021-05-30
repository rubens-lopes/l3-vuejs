import { Model, Factory, createServer, Server } from "miragejs";
import { Registry } from "miragejs/-types";

const models = {
  pizza: Model,
};

const factories = {
  pizza: Factory.extend({
    name: "Pizza name",
    isGlutenFree: false,
  }),
};

export type MirageServer = Server<Registry<typeof models, typeof factories>>;

export function makeServer({ environment = "development" } = {}) {
  const server = createServer({
    environment,
    models,
    factories,

    seeds(server) {
      server.create("pizza", { name: "Portuguesa" });
      server.create("pizza", { name: "Calabresa" });
    },

    routes() {
      this.urlPrefix = "http://localhost:8080";

      this.get("pizza", ({ db }) => {
        return db.pizzas;
      });
    },
  });

  return server;
}
