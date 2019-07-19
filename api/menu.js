const express = require("express");
const router = new express.Router();
const Menu = require("../models/Menu");

const getAll = () => Menu.find();
const getOne = id => Menu.findById(id);
const updateOne = (id, data) => Menu.findByIdAndUpdate(id, data);
const deleteOne = id => Menu.findByIdAndDelete(id);
const create = data => Menu.create(data);

router.get("/", (req, res) => {
  getAll()
    .then(menus => {
      res.status(200).send(menus);
    })
    .catch(error => res.status(500).send("Something went wrong"));
});

router.get("/:id", (req, res) => {
  getOne(req.params.id)
    .then(menu => {
      res.status(200).send(menu);
    })
    .catch(error => res.status(500).send("Something went wrong"));
});

router.post("/", (req, res) => {
  console.log(req.body);
  create(req.body)
    .then(menu => res.status(200).send(menu))
    .catch(err => res.status(500).send("Something went wrong"));
});

router.delete("/:id", (req, res) => {
  deleteOne(req.params.id)
    .then(menus => {
      res.status(200).send(menus);
    })
    .catch(error => res.status(500).send("Something went wrong"));
});

router.patch("/:id", (req, res) => {
  updateOne(req.params.id).then(updatedDocument =>
    res.status(200).send(updatedDocument)
  );
});

module.exports = {
  router,
  getAll,
  getOne,
  deleteOne,
  updateOne,
  create
};
