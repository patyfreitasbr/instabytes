
import getTodosPosts from "../models/postModels.js";

export async function lisarPosts (req, res) {
    const posts = await getTodosPosts(); // Chama a função para obter todos os posts
    res.status(200).json(posts); // Envia os posts como resposta JSON com o código de status 200 (OK)
}



