
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table => {
    table.increments();
    table.string('username').notNullable();
    table.specificType('hashed_password', 'char(60)').notNullable();
    table.string('firstName').notNullable();
    table.string('lastName').notNullable();
    table.string('email');
    table.string('nickname');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};
