const express = require('express')
const app = express();
const bp = require('body-parser')
const exphbs = require('express-handlebars')
const prodRoutes = require('./routes/productsRoutes.js')
const artRoutes = require('./routes/articlesRoutes.js')
const PORT = process.env.PORT || 5000
// const knex = require('./knex/knex.js');

app.use(express.static('public'))
app.use(bp.urlencoded({ extended: true }))
app.engine('.hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', '.hbs')

app.use('/', prodRoutes)
app.use('/', artRoutes)

app.listen(PORT, () => {
    console.log(`Started app on port: ${PORT}`);
})