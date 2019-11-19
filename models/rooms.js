const db = require("../data/db-config");

module.exports = {
  add,
  find,
  update,
  remove
};

async function add(room) {
  return db("rooms")
    .insert(room, ["*"])
    .then(() => find());
}

function find(filters) {
  if (filters) {
    return db("rooms")
      .select("*")
      .where(filters);
  } else {
    return db("rooms").select("*");
  }
}

function update(filters, changes) {
  // only allow one update at a time, so uses .first()
  return db("rooms")
    .update(changes, ["*"])
    .where(filters)
    .then(m =>
      find({
        id: m[0].id
      }).first()
    );
}

function remove(filters) {
  // only returns the number of deleted entries
  return db("rooms")
    .where(filters)
    .del();
}
