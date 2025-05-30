import { MongoClient, Db } from "mongodb";
import express from 'express';
import cors from "cors";
import { configDotenv } from 'dotenv';
import { createRoutes } from './routes';
import { errorHandler } from "./errors/ErrorHandler";
import { seedDatabase } from "./seedDatabase";

configDotenv();

const client = new MongoClient(process.env.MONGODB_CONNSTRING!);
let db: Db;

async function connectMongo() {
  try {
    await client.connect();
    db = client.db(process.env.MONGODB_DB_NAME);
    console.log("Conectado ao MongoDB");

    if (process.env.NODE_ENV === "dev")
      await seedDatabase(db);

    const server = express();
    server.use(cors());
    server.use(express.json());
    server.use(createRoutes(db));
    server.use(errorHandler());

    server.listen(process.env.BACKENDPORT, () => {
      console.log(`Backend rodando em: http://127.0.0.1:${process.env.BACKENDPORT}/`);
    });
  } catch (error) {
    console.error("Erro ao conectar ao MongoDB:", error);
  }
}

connectMongo();