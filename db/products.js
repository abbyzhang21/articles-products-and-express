class product {
    constructor() {
        this.knex = require('../knex/knex.js');
    }
    all() {
        return this.knex.raw('SELECT * FROM items');
    }
    getItemById(id) {
        return this.knex.raw(`SELECT * FROM items WHERE id = ${id}`)
    }
    add(prod) {
        return this.knex.raw(`INSERT INTO items(name, description) VALUES('${prod.name}','${prod.description}')`)
    }
    updateItemById(id, prods) {
        // getItemById(id);
        return this.knex.raw(`UPDATE items SET getItemById().name =${prods.name}  WHERE id=${id}`)
    }
    deleteItemById(id) {
        return this.knex.raw(`DELETE FROM items WHERE id = ${id}`)
    }
}
module.exports = product;
