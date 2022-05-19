const express = require("express");
const secure = require("./secure");
const response = require("../../../network/response");
const Controller = require("./index");

const router = express.Router();

// Internal functions
const list = async (req, res, next) => {
  try {
    const list = await Controller.list();
    response.success(req, res, list, 200);
  } catch (error) {
    next();
  }
};

const get = async (req, res) => {
  try {
    const user = await Controller.get(req.params.id);
    response.success(req, res, user, 200);
  } catch (error) {
    next();
  }
};

const upsert = async (req, res) => {
  try {
    const user = await Controller.upsert(req.body);
    response.success(req, res, user, 201);
  } catch (error) {
    next();
  }
};

// Routes
router.get("/", list);
router.get("/:id", get);
router.post("/", upsert);
router.put("/", secure("update"), upsert);

module.exports = router;
