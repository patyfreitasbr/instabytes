// Importa o módulo Express para criar o servidor web
import express from "express"; 
import routes from "./src/routes/postsRoutes.js";

 // Cria uma instância do servidor Express
const app = express();

routes(app);

app.listen(3000, () => {
    console.log("servidor escutando..."); // Inicia o servidor na porta 3000 e imprime uma mensagem no console
});



