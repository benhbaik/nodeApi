
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('contact').del()
    .then(function () {
      // Inserts seed entries
      return knex('contact').insert([
        {id: 1, data: 'This is some default data'}
    });
};
