const express = require("express");
const route = express.Router();
const {
  createUser,
  getUsers,
  getUser,
  deleteUser,
  updateUser,
} = require("../controllers/sampleController");

//POST
route.post("/", createUser);

//GET
route.get("/", getUsers);

//GET SPECIFIC
route.get("/:id", getUser);

//DELETE
route.delete("/:id", deleteUser);

//UPDATE
route.patch("/:id", updateUser);

module.exports = route;
