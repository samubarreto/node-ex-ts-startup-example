"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedDatabase = seedDatabase;
const mongodb_1 = require("mongodb");
function seedDatabase(db) {
    return __awaiter(this, void 0, void 0, function* () {
        const users = db.collection("example_db");
        const existing = yield users.countDocuments();
        if (existing > 0) {
            console.log("Seed ignorado: usuários já existem.");
            return;
        }
        yield users.insertMany([
            {
                _id: new mongodb_1.ObjectId("681ad15aa12df6766121338a"),
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
                _id: new mongodb_1.ObjectId(),
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
                _id: new mongodb_1.ObjectId(),
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
                _id: new mongodb_1.ObjectId(),
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
                _id: new mongodb_1.ObjectId(),
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
                _id: new mongodb_1.ObjectId(),
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
                _id: new mongodb_1.ObjectId(),
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
                _id: new mongodb_1.ObjectId(),
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
                _id: new mongodb_1.ObjectId(),
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
                _id: new mongodb_1.ObjectId(),
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
    });
}
