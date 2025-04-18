import express from "express";
import tarefaRoutes from "./routes/tarefaRoutes.js";
import notaRoutes from "./routes/notaRoutes.js";

const app = express();
const port = 4000;

app.use(express.json());
app.use("/tarefas", tarefaRoutes);
app.use("/notas", notaRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
