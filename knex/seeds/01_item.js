
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('items').del()
    .then(function () {
      // Inserts seed entries
      return knex('items').insert([
        { title: 'Apple of Doom', body: 'Rains down sploding applez!!' },
        { title: 'Banana Peel of Extinction', body: 'Extincts all players in 10 meter radius.' },
        { title: 'Pineapple Blades of Paradise', body: 'Inflicts cutting damage and sends target to "Paradise"' }
      ]);
    });
};