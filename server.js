const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const cards = require('./data')

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express:server
})

server.get("/", function(req, res){
    return res.render("index")
})

server.get("/sobre", function(req, res){
    return res.render("sobre")
})

server.get("/receitas", function(req, res){
    return res.render("receitas", {items: cards})
})

server.get("/recipes", function(req, res){
    const id = req.query.id
    const card = cards.find(function(card){
        if(card.id == id){
            return true
        }
    })

    if(!card){
        return res.send('Recipe not found')
    }

    return res.render("recipes", {item: card})
})

server.listen(5000, function(){
    console.log('Server is running');    
})