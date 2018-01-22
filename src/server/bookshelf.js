const knex = require('../db/knex');
const bookshelf = require('bookshelf');

export default bookshelf(knex(knexConfig.development));
