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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = require("dotenv");
const routes_1 = require("./routes");
const ErrorHandler_1 = require("./errors/ErrorHandler");
const seedDatabase_1 = require("./seedDatabase");
(0, dotenv_1.configDotenv)();
const client = new mongodb_1.MongoClient(process.env.MONGODB_CONNSTRING);
let db;
function connectMongo() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            db = client.db(process.env.MONGODB_DB_NAME);
            console.log("Conectado ao MongoDB");
            if (process.env.NODE_ENV === "dev")
                yield (0, seedDatabase_1.seedDatabase)(db);
            const server = (0, express_1.default)();
            server.use((0, cors_1.default)());
            server.use(express_1.default.json());
            server.use((0, routes_1.createRoutes)(db));
            server.use((0, ErrorHandler_1.errorHandler)());
            server.listen(process.env.BACKENDPORT, () => {
                console.log(`Backend rodando em: http://127.0.0.1:${process.env.BACKENDPORT}/`);
            });
        }
        catch (error) {
            console.error("Erro ao conectar ao MongoDB:", error);
        }
    });
}
connectMongo();
