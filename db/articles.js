class article {
    constructor() {
        // this._count = 1;
        this._storage = [];
        this.add({
            title: 'Why We Crave Junk Food',
            body: 'First, there is the sensation of eating the food. This includes what it tastes like (salty, sweet, umami, etc.), what it smells like, and how it feels in your mouth. This last quality — known as “orosensation” — can be particularly important. Food companies will spend millions of dollars to discover the most satisfying level of crunch in a potato chip. Food scientists will test for the perfect amount of fizzle in a soda. These elements all combine to create the sensation that your brain associates with a particular food or drink.',
            author: 'JAMES CLEAR'
        })
        this.add({
            title: 'What Should I Eat',
            body: 'Eat more greens.There isnt a consensus on the best diet, but pretty much everyone agrees on one thing: eat more veggies. Youll be hard-pressed to find a single diet that doesnt think eating more plants is a good idea.',
            author: 'CREAMY'
        })
        this.add({
            title: 'How to Say No to Temptation',
            body: 'Learning how to say no is one of the most useful skills you can develop, especially when it comes to living a healthy life. Research is starting to show that small changes can make it easier for you to say no, resist temptation and stick to healthy eating habits.',
            author: 'JOHN'
        })
        this.add({
            title: 'Two Simple Ways to Eat Healthy',
            body: 'The main idea of most good diets is the same: eat whole foods that are unprocessed and that grew or lived outdoors. Some of them have different variations — no animal products, no grains, etc. — but most of them fit the general “real food” framework.',
            author: 'Kittle'
        })
    }
    all() {
        return [...this._storage];
    }
    getArtByTitle(title) {
        return this._storage.filter(item => title == item.title)[0]
    }
    add(item) {
        // item.id = this._count
        this._storage.push(item)
        // this._count++
        // return item.id;
    }
    updateArtByTitle(title) {
        let select = this._storage.getArtByTitle(title);
        let index = this._storage.indexOf(select);
        return index;
    }
    deleteArtByTitle(title) {

    }
}


module.exports = article;