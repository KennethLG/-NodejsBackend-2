const express = require("express");
const response = require("../../../network/response");
const controller = require("./index");

const router = express.Router();

router.get("/", async (req, res) => {

  try {
    const list = await controller.list();
    response.success(req, res, list);
  } catch (error) {
    response.error(req, res, err.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const user = await controller.get(req.params.id);
    response.success(req, res, user);
  } catch (error) {
    response.error(req, res, err.message);
  }
});

module.exports = router;
