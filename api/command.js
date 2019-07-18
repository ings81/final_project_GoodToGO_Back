const express = require("express");
const router = new express.Router();
const Command = require("../models/Command");

const getAll = () => Command.find();
const getOne = id => Command.findById(id);
const updateOne = (id, data) => Command.findByIdAndUpdate(id, data);
const deleteOne = id => Command.findByIdAndDelete(id);
const create = data => Command.create(data);

router.get("/", (req, res) => {
  getAll()
    .then(commands => {
      res.status(200).send(commands);
    })
    .catch(error => res.status(500).send("Something went wrong"));
});

router.get("/:id", (req, res) => {
  getOne(req.params.id)
    .then(command => {
      res.status(200).send(command);
    })
    .catch(error => res.status(500).send("Something went wrong"));
});

router.post("/", (req, res) => {
  create(req.body)
    .then(command => res.status(200).send(command))
    .catch(err => res.status(500).send("Something went wrong"));
});

router.delete("/:id", (req, res) => {
  deleteOne(req.params.id)
    .then(commands => {
      res.status(200).send(commands);
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
