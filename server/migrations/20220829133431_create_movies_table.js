/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
        .createTable('movies', function (table) {
            table.increments('id');
            table.string('tmdbid', 255).notNullable();
            table.text('title');
            table.text('backdrop_path');
            table.string('original_language', 10);
            table.text('overview').nullable();
            table.text('poster_path');
            table.string('media_type', 100);
            table.text('genre_ids');
            table.string('popularity');
            table.string('release_date', 20);
            table.decimal('vote_average', 5);
            table.integer('vote_count');
            table.timestamps();
        });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('movies')
};
