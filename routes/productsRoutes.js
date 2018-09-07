const express = require('express')
const Router = express.Router()
const Products = require('../db/products.js')
const DS_Prod = new Products()



//GET - Home page
Router.get('/', (req, res) => {
    // const items = DS_Inv.all()
    res.render('index');
})
// GET - products page
Router.get('/products', (req, res) => {
    const items = DS_Prod.all()
    console.log('items', items)
    res.render('products', { items });
})
// GET - product detail page
Router.get('/products/:id', (req, res) => {
    const { id } = req.params;
    const item = DS_Prod.getItemById(id)
    // console.log('item', item)
    res.render('detail', item);
})

//GET - form
Router.get('/newproduct', (req, res) => {
    res.render('form');
})



//POST - new item
Router.post('/products/new', (req, res) => {
    // console.log('req.body', req.body)
    const prod = req.body
    DS_Prod.add(prod)
    res.redirect('/products')
})

module.exports = Router;