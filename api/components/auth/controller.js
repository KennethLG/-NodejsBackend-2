const TABLE = "auth";

module.exports = (injectedStore) => {
  const store = injectedStore || require("../../../store/dummy.js");

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
  };
};
