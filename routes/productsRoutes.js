const express = require('express')
const Router = express.Router()
const Products = require('../db/products.js')
const DS_Prod = new Products()
const knex = require('../knex/knex.js')

//GET - Home page
Router.get('/', (req, res) => {
    // const items = DS_Prod.all()
    // console.log('items', items);
    // res.render('index', { items });
    DS_Prod.all()
        .then(results => {
            const items = results.rows
            res.render('index', { items })
        })
        .catch(err => {
            console.log('err', err)
        })
})
// GET - products page
Router.get('/products', (req, res) => {
    // const items = DS_Prod.all()
    // console.log('items', items)
    // res.render('products', { items });
    DS_Prod.all()
        .then(results => {
            const item = results.rows
            console.log(item);
            res.render('products', { item })
        })
        .catch(err => {
            console.log('err', err)
        })
})
// GET - product detail page
Router.get('/products/:id', (req, res) => {
    console.log('did this working.......?')
    const { id } = req.params;
    // const item = DS_Prod.getItemById(id)
    // console.log('item', item)
    DS_Prod.getItemById(id)
        .then(result => {
            const item = result.rows[0]
            res.render('detail', item)
        })
        .catch(err => {
            console.log('error', err)
        })
})

//GET - form
Router.get('/newproduct', (req, res) => {
    res.render('form');
})



//POST - new item
Router.post('/products/new', (req, res) => {
    // console.log('req.body', req.body)
    const prod = req.body
    // DS_Prod.add(prod)
    // res.redirect('/products')
    DS_Prod.add(prod)
        .then(result => {
            res.redirect('/');
        })
        .catch(err => {
            console.log('error', err)
        })
})
//GET - product edit form
Router.get("/products/:id/edit", (req, res) => {
    let { id } = req.params
    console.log("id", id)
    res.render('updateProd', { id });
})
//update
Router.post('/products/:id/edit', (req, res) => {
    // console.log(req.body);

    const prods = req.body;
    console.log("title.....", prods.title);
    const { id } = req.params;
    console.log('tis is not just id', id)
    DS_Prod.updateItemById(prods)
        .then(result => {

            const products = result.rows[0]
            console.log('this is product', products)
            res.redirect('/products')
        })
        .catch(err => {
            console.log('error', err)
        })
})
//delete 
Router.get('/products/:id/delete', (req, res) => {
    const { id } = req.params;
    // const product = DS_Prod.getProductById(id);
    DS_Prod.deleteItemById(id)
        .then(result => {
            const products = result.rows[0]
            res.redirect('/products')
        })
        .catch(err => {
            console.log('error', err)
        })
    // const products = DS_Prod.all();
    // res.render('products', { products });
});
module.exports = Router;