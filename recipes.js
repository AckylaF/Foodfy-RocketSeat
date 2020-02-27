const fs = require('fs')
const cards = require('./data.json')


exports.index = function(req, res){
    return res.render("admin/recipes", { recipes: cards.recipes} )
}

exports.show = function(req, res){
    const { id } = req.params

    const foundRecipe = cards.recipes.find(function(recipe){
        return recipe.id == id
    })
    if (!foundRecipe) return res.send("Recipe not found")

    const recipe = {
        ...foundRecipe
    }


    return res.render("admin/show", {recipe})    
    
}

exports.create = function(req, res){

    return res.render("admin/create")
}

exports.post = function(req, res){
    const keys = Object.keys(req.body)

    for(key of keys){
        if (req.body[key] == ""){
            return res.send('Please, fill all fields')
        }
    }
    
    let { imgSource, foodName, chef, ingredients, preparation, information} = req.body
    const id = Number(cards.recipes.length + 1)

    cards.recipes.push({
        imgSource,
        foodName,
        id,
        chef,
        ingredients,
        preparation,
        information
    })

    fs.writeFile("data.json", JSON.stringify(cards, null, 2), function(err){
        if(err) return res.send("error")

        return res.redirect("/admin/recipes")
    })
}

exports.edit = function(req, res){
    const { id } = req.params

    const recipe = cards.recipes.find(function(recipe){
        return recipe.id == id
    })
    
    if(!recipe){
        return res.send("Recipe not found")
    }
    
    return res.render("admin/edit", { recipe })
}

exports.put = function(req, res){
    const { id } = req.body

    let index = 0
    const foundRecipe = cards.recipes.find(function(recipe, foundIndex){
        if (id == recipe.id){
            index = foundIndex
            return true
        }
    })
    if (!foundRecipe) return res.send("Recipe not found")

    const recipe = {
        ...foundRecipe,
        ...req.body,
        id: Number(req.body.id)
    }

    cards.recipes[index] = recipe

    fs.writeFile("data.json", JSON.stringify(cards, null, 2), function(err){
        if(err) res.send("Write error!")

        return res.redirect(`/admin/recipes/${id}`)
    })
}

exports.delete = function(req, res){
    const { id } = req.body 

    const filteredRecipes = cards.recipes.filter(function(recipe){
        return recipe.id != id
    })

    cards.recipes = filteredRecipes

    fs.writeFile("data.json", JSON.stringify(cards, null, 2), function(err){
        if (err) res.send("Write file error")

        return res.redirect("/admin/recipes")
    })
}
