const error = (message, code) => {
  const err = new Error(message);

  if (code) {
    err.statusCode = code;
  }

  return err;
}

module.exports = error;