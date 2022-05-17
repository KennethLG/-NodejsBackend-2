const db = {
  user: [{ id: "1", name: "Carlos" }],
};

const list = (table) => {
  return db[table];
};

const get = async (table, id) => {
  let col = await list(table);
  return col.find((item) => item.id === id) || null;
};

const upsert = (table, data) => {
  db[collection].push(data);
}

const remove = (table, id) => {
  return true;
}

module.exports = {
  list,
  get,
  upsert,
  remove,
};
