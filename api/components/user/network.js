const express = require("express");
const response = require("../../../network/response");
const Controller = require("./index");

const router = express.Router();

// Internal functions
const list = async (req, res) => {
  try {
    const list = await Controller.list();
    response.success(req, res, list, 200);
  } catch (error) {
    response.error(req, res, error.message, 500);
  }
};

const get = async (req, res) => {
  try {
    const user = await Controller.get(req.params.id);
    response.success(req, res, user, 200);
  } catch (error) {
    response.error(req, res, error.message, 500);
  }
};

const upsert = async (req, res) => {
  try {
    const user = await Controller.upsert(req.body);
    response.success(req, res, user, 201);
  } catch (error) {
    response.error(req, res, err.message, 500);
  }
};

// Routes
router.get("/", list);
router.get("/:id", get);
router.post("/", upsert);
router.put("/", upsert);

module.exports = router;
