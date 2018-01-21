
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table => {
    table.increments();
    table.string('email').unique();
    table.specificType('hashed_password', 'char(60)');
    table.string('firstName');
    table.string('lastName');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};
