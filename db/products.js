class product {
    constructor() {
        this._count = 1;
        this._storage = []
        this.add({
            name: 'GENIUS Liquid Collagen',
            price: 115,
            Inventory: 20
        })
        this.add({
            name: 'Squalane + Peptide Eye Gel',
            price: 54,
            Inventory: 30
        })
        this.add({
            name: 'T.L.C. Framboos Glycolic',
            price: 90,
            Inventory: 25
        })
        this.add({
            name: 'Rose Deep Hydration Facial',
            price: 44,
            Inventory: 70
        })
        this.add({
            name: 'Creme de la Mer',
            price: 175,
            Inventory: 12
        })
        this.add({
            name: 'Facial Treatment Essence',
            price: 179,
            Inventory: 96
        })
    }
    all() {
        return [...this._storage];
    }
    getItemById(id) {
        return this._storage.filter(item => id == item.id)[0]
    }
    add(item) {
        item.id = this._count
        this._storage.push(item)
        this._count++
        return item.id;
    }
    updateItemById(id) { }
    deleteItemById(id) { }
}
module.exports = product;
