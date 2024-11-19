# node-ex-ts-startup-example
##### Como iniciar um projeto nodejs backend com express e typescript configurado, bem resumido
![My Skills](https://skillicons.dev/icons?i=ts,nodejs,express,mongodb)

1. Inicie o projeto e instale o express
```bash
npm init -y
```

2. Insira o conteúdo a seguir no package.json
```json
{
  "name": "exemplo",
  "private": true,
  "version": "1.0.0",
  "description": "exemplo",
  "main": "src/index.ts",
  "scripts": {
    "build": "rimraf ./build && tsc",
    "start": "node build/index.js",
    "dev": "ts-node-dev src/index.ts"
  },
  "dependencies": {
    "cors": "^2.8.5",
    "express": "^4.19.2",
    "mongodb": "^6.10.0"
  },
  "devDependencies": {
    "@types/cors": "^2.8.17",
    "@types/express": "^4.17.21",
    "@types/node": "^22.9.0",
    "dotenv": "^16.4.5",
    "ts-node-dev": "^2.0.0",
    "typescript": "^5.6.3"
  }
}
```

3. Inicie a configuração do typescript
```bash
npx tsc --init
```

4. Insira o conteúdo abaixo no tsconfig.json
```json
{
  "compilerOptions": {
    "target": "es2016",
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "module": "commonjs",
    "moduleResolution": "node10",
    "allowJs": true,
    "outDir": "./build",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  },
  "include": [
    "src"
  ]
}
```

5. Instale as dependências
```bash
npm i
```

6. Crie um arquivo com nome ".env" na raíz do projeto e preencha-o com suas variáveis de ambiente:
```env
BACKENDPORT=5001
MONGODB_CONNSTRING=
MONGODB_DB_NAME=teste_db
```

7. Crie a pasta ./src na raíz do projeto

8. Crie o arquivo index.ts dentro de src, use o conteúdo abaixo como base:
```ts
import { MongoClient, Db } from "mongodb";
import express from 'express';
import cors from "cors";
import { configDotenv } from 'dotenv';
import { createRoutes } from './routes';

configDotenv();

const client = new MongoClient(process.env.MONGODB_CONNSTRING!);
let db: Db;

async function connectMongo() {
  try {
    await client.connect();
    db = client.db(process.env.MONGODB_DB_NAME);
    console.log("Conectado ao MongoDB");

    const server = express();
    server.use(cors());
    server.use(express.json());
    server.use(createRoutes(db));

    server.listen(process.env.BACKENDPORT, () => {
      console.log(`Backend rodando em: http://127.0.0.1:${process.env.BACKENDPORT}/`);
    });
  } catch (error) {
    console.error("Erro ao conectar ao MongoDB:", error);
  }
}

connectMongo();
```

9. Crie o arquivo routes.ts dentro de src, use o conteúdo abaixo como base:
```ts
import { Router } from "express";
import { Db } from "mongodb";
import { SeuService } from "./services/SeuService";
import { SeuController } from "./controllers/SeuController";

export function createRoutes(db: Db) {
  const router = Router();

  const seuService = new SeuService(db);
  const seuController = new SeuController(seuService);
  router.get('/', seuController.healthcheck);

  return router;
}
```

10. Crie o arquivo .gitignore na raízd o seu projeto, use o conteúdo abaixo como base:
```txt
node_modules/
.env
build/
```

11. Crie os diretórios ./services/ e ./controllers/ dentro de src

12. Crie SeuService.ts em ./services/ com o conteúdo abaixo como base:
```ts
import { Db } from "mongodb";

export class SeuService {
  constructor(private db: Db) { }

  healthcheck(): string {
    return "hello world"
  }
}
```

13. Crie SeuController em ./controllers/ com o conteúdo abaixo como base:
```ts
import { Request, Response } from 'express';
import { SeuService } from '../services/SeuService';

export class SeuController {
  constructor(private seuService: SeuService) { } // crie uma interface ISeuService

  healthcheck = (req: Request, res: Response) => {
    const result = this.seuService.healthcheck();
    return res.status(200).json({ message: result });
  };
}
```

---

### Acho que é isso

- Rodar a api
```bash
npm run dev
```

- Buildar a api
```bash
npm run build
```

- odar a versão buildada da api
```bash
npm run start
```
