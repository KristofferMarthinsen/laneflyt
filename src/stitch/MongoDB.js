import { RemoteMongoClient } from "mongodb-stitch-browser-sdk";
import { app } from "./app";

const mongoClient = app.getServiceClient(
    RemoteMongoClient.factory,
    "mongodb-atlas"
  );
// TODO: Instantiate a collection handle for todo.items
const items = mongoClient.db("todo").collection("items");

export { items };