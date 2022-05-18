const bcrypt = require("bcrypt");
const auth = require("../../../auth");
const TABLE = "auth";

module.exports = (injectedStore) => {
  const store = injectedStore || require("../../../store/dummy.js");

  const login = async (username, password) => {
    const data = await store.query(TABLE, { username });

    const compare = await bcrypt.compare(password, data.password);

    if (compare) {
      return auth.sign(data);
    }

    throw new Error("Información inválida");

  };

  const upsert = async (data) => {
    const authData = {
      id: data.id,
    };

    if (data.username) {
      authData.username = data.username;
    }

    if (data.password) {
      authData.password = await bcrypt.hash(data.password, 5);
    }

    console.log("user", authData);

    return store.upsert(TABLE, authData);
  };

  return {
    upsert,
    login,
  };
};
