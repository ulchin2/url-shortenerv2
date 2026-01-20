import express from "express";
import config from "config";
import cors from "cors";
import routes from "./routes";
import db from "./db";

const app = express();

// CORS
app.use(
  cors({
    origin: config.get("corsOrigin"),
  })
);

// Parse JSON
app.use(express.json()); // ou bodyParser.json()

// Conectar DB
db();

// Registrar rotas
routes(app);

// Iniciar servidor
const port = config.get("port") as number;
app.listen(port, "0.0.0.0", () => {
  console.log(`Application listening at http://localhost:${port}`);
});
