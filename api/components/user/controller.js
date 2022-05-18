const store = require("../../../store/dummy");
const auth = require("../auth");
const { nanoid } = require("nanoid");

const TABLE = "user";

module.exports = (injectedStore = store) => {
  const list = () => {
    return injectedStore.list(TABLE);
  };

  const get = (id) => {
    return injectedStore.get(TABLE, id);
  };

  const upsert = async (body) => {
    const user = {
      name: body.name,
      username: body.username,
    };

    user.id = body.id || nanoid();

    if (body.password || body.username) {
      await auth.upsert({
        id: user.id,
        username: user.username,
        password: body.password
      })
    }

    return store.upsert(TABLE, user);
  };

  return {
    list,
    get,
    upsert,
  };
};
