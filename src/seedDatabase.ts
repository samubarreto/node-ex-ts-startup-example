import { Db, ObjectId } from "mongodb";
import { IExample } from "./models/IExample";

export async function seedDatabase(db: Db) {
  const users = db.collection<IExample>("example_db");

  const existing = await users.countDocuments();
  if (existing > 0) {
    console.log("Seed ignorado: usuários já existem.");
    return;
  }

  await users.insertMany([
    {
      _id: new ObjectId("681ad15aa12df6766121338a"),
      name: "Alice Santos",
      email: "alice@example.com",
      passwordHash: "$2b$10$aliceHash",
      createdAt: new Date(),
      updatedAt: new Date(),
      isActive: true,
      role: "admin",
      avatarUrl: "https://i.pravatar.cc/150?img=1",
    },
    {
      _id: new ObjectId(),
      name: "Bruno Lima",
      email: "bruno@example.com",
      passwordHash: "$2b$10$brunoHash",
      createdAt: new Date(),
      updatedAt: new Date(),
      isActive: true,
      role: "user",
      avatarUrl: "https://i.pravatar.cc/150?img=2",
    },
    {
      _id: new ObjectId(),
      name: "Carla Mendes",
      email: "carla@example.com",
      passwordHash: "$2b$10$carlaHash",
      createdAt: new Date(),
      updatedAt: new Date(),
      isActive: false,
      role: "moderator",
      avatarUrl: "https://i.pravatar.cc/150?img=3",
    },
    {
      _id: new ObjectId(),
      name: "Diego Rocha",
      email: "diego@example.com",
      passwordHash: "$2b$10$diegoHash",
      createdAt: new Date(),
      updatedAt: new Date(),
      isActive: true,
      role: "user",
      avatarUrl: "https://i.pravatar.cc/150?img=4",
    },
    {
      _id: new ObjectId(),
      name: "Eduarda Pires",
      email: "eduarda@example.com",
      passwordHash: "$2b$10$eduardaHash",
      createdAt: new Date(),
      updatedAt: new Date(),
      isActive: true,
      role: "admin",
      avatarUrl: "https://i.pravatar.cc/150?img=5",
    },
    {
      _id: new ObjectId(),
      name: "Fábio Cunha",
      email: "fabio@example.com",
      passwordHash: "$2b$10$fabioHash",
      createdAt: new Date(),
      updatedAt: new Date(),
      isActive: false,
      role: "user",
      avatarUrl: "https://i.pravatar.cc/150?img=6",
    },
    {
      _id: new ObjectId(),
      name: "Gabriela Torres",
      email: "gabriela@example.com",
      passwordHash: "$2b$10$gabrielaHash",
      createdAt: new Date(),
      updatedAt: new Date(),
      isActive: true,
      role: "moderator",
      avatarUrl: "https://i.pravatar.cc/150?img=7",
    },
    {
      _id: new ObjectId(),
      name: "Henrique Silva",
      email: "henrique@example.com",
      passwordHash: "$2b$10$henriqueHash",
      createdAt: new Date(),
      updatedAt: new Date(),
      isActive: true,
      role: "user",
      avatarUrl: "https://i.pravatar.cc/150?img=8",
    },
    {
      _id: new ObjectId(),
      name: "Isabela Martins",
      email: "isabela@example.com",
      passwordHash: "$2b$10$isabelaHash",
      createdAt: new Date(),
      updatedAt: new Date(),
      isActive: true,
      role: "admin",
      avatarUrl: "https://i.pravatar.cc/150?img=9",
    },
    {
      _id: new ObjectId(),
      name: "João Victor",
      email: "joaov@example.com",
      passwordHash: "$2b$10$joaoHash",
      createdAt: new Date(),
      updatedAt: new Date(),
      isActive: false,
      role: "user",
      avatarUrl: "https://i.pravatar.cc/150?img=10",
    },
  ]);


  console.log("Seed de usuários inserido com sucesso.");
}
