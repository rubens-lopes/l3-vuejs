import { createServer, Server } from "miragejs";
import { Registry } from "miragejs/-types";

const models = {};

const factories = {};

export type MirageServer = Server<Registry<typeof models, typeof factories>>;

export function makeServer({ environment = "development" } = {}) {
  const server = createServer({
    environment,
    models,
    factories,

    seeds(server) {},

    routes() {
      this.urlPrefix = "http://localhost:8080";
    },
  });

  return server;
}
