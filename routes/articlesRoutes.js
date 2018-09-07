const express = require('express')
const Router = express.Router()

const Articles = require('../db/articles.js')
const DS_Art = new Articles()


//GET - Articles Page
Router.get('/articles', (req, res) => {
    const items = DS_Art.all()
    // console.log('items', items);
    res.render('articles', { items });
})
// GET - product detail page
// Router.get('/articles/:id', (req, res) => {
//     const { id } = req.params;
//     const item = DS_Art.getItemById(id)
//     console.log('item', item)
//     res.render('detail_art', item);
// })

//GET - form
Router.get('/newarticle', (req, res) => {
    res.render('form_art');
})



//POST - new item
Router.post('/articles/new', (req, res) => {
    // console.log('req.body', req.body)
    const item = req.body
    DS_Art.add(item)
    res.redirect('/articles')
})

//Article detail
Router.get('/articles/:title', (req, res) => {
    const { title } = req.params;
    const item = DS_Art.getArtByTitle(title);
    res.render('detail_art', item);
})

//PUT - edit article
Router.get('/articles/:title/edit', (req, res) => {
    const { title } = req.params;
    const item = DS_Art.getArtByTitle(title);
    res.render('updateArt', item);
})
Router.put('/articles/:title/edit', (req, res) => {
    const { title } = req.params;
    const item = DS_Art.getArtByTitle(title);
    res.redirect('/articles');
})

module.exports = Router;