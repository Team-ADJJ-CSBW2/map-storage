exports.up = function(knex) {
  return knex.schema.createTable("rooms", rooms => {
    rooms.increments();

    rooms.integer("room_id");

    rooms.string("title", 256);
    rooms.string("description", 999);
    rooms.string("coordinates", 256);

    rooms.integer("elevation");
    rooms.string("terrain", 256);

    rooms.specificType("items", "text ARRAY");

    rooms.specificType("exits", "text ARRAY");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("rooms");
};
