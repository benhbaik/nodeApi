
exports.up = function(knex, Promise) {
  return knex.schema.createTable('contact', function(table) {
    table.increments();
    table.string('data', 20000);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('contact');
};
