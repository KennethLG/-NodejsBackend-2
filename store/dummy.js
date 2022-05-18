const db = {
  user: [
    {
      id: 1,
      username: "Dracula",
      password: "12345",
    },
  ],
};

const list = async (table) => {
  return db[table] || [];
};

const get = async (table, id) => {
  let col = await list(table);
  return col.find((item) => item.id === id) || null;
};

const upsert = async (table, data) => {
  if (!db[table]) {
    db[table] = [];
  }

  db[table].push(data);
};

const remove = async (table, id) => {
  return true;
};

const query = async (table, q) => {
  const col = await list(table);

  const key = Object.keys(q)[0];

  return col.find((item) => item[key] === q[key]) || null;
};

module.exports = {
  list,
  get,
  upsert,
  remove,
  query,
};
