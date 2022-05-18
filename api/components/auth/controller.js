const auth = require("../../../auth");

const TABLE = "user";

module.exports = (injectedStore) => {
  const store = injectedStore || require("../../../store/dummy.js");

  const login = async (username, password) => {
    const data = await store.query(TABLE, { username });

    if (data.password === password) {
      return auth.sign(data);
    }

    throw new Error("Información inválida");

  };

  const upsert = (data) => {
    const authData = {
      id: data.id,
    };

    if (data.username) {
      authData.username = data.username;
    }

    if (data.password) {
      authData.password = data.password;
    }

    return store.upsert(TABLE, authData);
  };

  return {
    upsert,
    login,
  };
};
