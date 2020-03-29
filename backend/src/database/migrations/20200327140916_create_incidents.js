
exports.up = function(knex) {
  return knex.schema.createTable('incidents', function (table){
      table.increments(); //Id automático começando do 1.

      //Criaçção de campos no banco de dados knex.pass
      table.string('title').notNullable();
      table.string('description').notNullable();
      table.decimal('value').notNullable();

      table.string('ong_id').notNullable(); //Campo de chave estrangeira.

      table.foreign('ong_id').references('id').inTable('ongs');

;  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents');
};
