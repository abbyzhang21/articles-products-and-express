const express = require('express')
const Router = express.Router()

const Articles = require('../db/articles.js')
const DS_Art = new Articles()
const methodOverride = require('method-override');

Router.use(methodOverride('_method'));
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

//GET - new form
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
    console.log('....', item);
    res.render('detail_art', item);
})

//get - edit form
Router.get('/editarticles', (req, res) => {
    res.render('updateArt');
})
Router.put('/articles/:title/edit', (req, res) => {
    const { title } = req.body;
    const { body } = req.body;
    console.log('title.....', title);
    console.log('body.....', body);
    // let random = DS_Art._storage[0];
    let test = DS_Art.getArtByTitle(title);
    console.log('not so random', test);
    if (article.title !== info.title) {
        article.title = info.title;
    }
    if (article.author !== info.author) {
        article.author = infor.author;
    }
    if (article.description !== info.description) {
        article.description = info.description;
    }
    res.redirect('/articles/${title}');
});
Router.get('/articles/:title/delete', (req, res) => {
    if (!authorized) {
        res.redirect('/login');
    } else {
        const { title } = req.params;
        console.log('deleted article', title);
        const article = DS_Art.getArtByTitle(title);
        console.log('works?');
        DS_Art.deleteArtByTitle(article.title);
        const articles = DS_Art.all();
        res.render('articles', { articles });
    }
})
module.exports = Router;