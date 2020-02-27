const express = require('express')
const routes = express.Router()
const recipes = require('./recipes')

routes.get("/", function(req, res){
    return res.render("admin/home")
})

routes.get("/sobre", function(req, res){
    return res.render("admin/sobre")
})
routes.get("/admin/recipes", recipes.index); // Mostrar a lista de receitas
routes.get("/admin/recipes/create", recipes.create); // Mostrar formulário de nova receita
routes.get("/admin/recipes/:id", recipes.show); // Exibir detalhes de uma receita
routes.get("/admin/recipes/:id/edit", recipes.edit); // Mostrar formulário de edição de receita

routes.post("/admin/recipes", recipes.post) // Cadastrar nova receitas
routes.put("/admin/recipes", recipes.put); // Editar uma receita
routes.delete("/admin/recipes", recipes.delete); //Deletar uma receita


module.exports = routes