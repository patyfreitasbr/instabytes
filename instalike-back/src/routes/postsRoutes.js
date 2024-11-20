import express from "express"
import { listarPosts } from "../controllers/postsController.js"

const routes = (app) => {
    // Habilita o middleware para analisar o corpo das requisições JSON
    app.use(express.json()); 
    //rotas para buscar todos os posts
    app.get("/posts", listarPosts);

}

export default routes;
