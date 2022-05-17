const store = require("../../../store/dummy");
const nanoid = require("nanoid");

const TABLE = "user";

module.exports = (injectedStore = store) => {
  const list = () => {
    return injectedStore.list(TABLE);
  };

  const get = (id) => {
    return injectedStore.get(TABLE, id);
  };

  const upsert = (body) => {
    const user = {
      name: body.name,
    };

    if (body.id) {
      user.id = body.id;
    } else {
      user.id = nanoid();
    }

    return store.upsert(TABLA, user);
  };

  return {
    list,
    get,
    upsert,
  };
};
