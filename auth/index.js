const jwt = require("jsonwebtoken");
const config = require("../config");
const error = require("../utils/error");

const secret = config.jwt.secret;

const sign = (data) => {
  return jwt.sign(data, secret);
};

const verify = (token) => {
  return jwt.verify(token, secret);
}

const check = {
  own: (req, owner) => {
    const decoded = decodeHeader(req);
    if (decoded.id !== owner) {
      // throw new Error("No tienes permiso");
      throw error("No tienes permiso", 401);
    }
  },
};

const getToken = (auth) => {
  if (!auth) {
    throw new Error("Token no encontrado");
  }

  if (!auth.includes("Bearer ")) {
    throw new Error("Formato inválido");
  }

  return auth.replace("Bearer ", "");
}

const decodeHeader = (req) => {
  const authorization = req.headers.authorization || "";
  const token = getToken(authorization);
  const decoded = verify(token);
  req.user = decoded;

  return decoded;
};

module.exports = {
  sign,
  check
};
