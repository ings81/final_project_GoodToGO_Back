const express = require("express");
const router = new express.Router();
const Aliment = require("../models/Aliment");

const getAll = () => Aliment.find();
const getOne = id => Aliment.findById(id);
const updateOne = (id, data) => Aliment.findByIdAndUpdate(id, data);
const deleteOne = id => Aliment.findByIdAndDelete(id);
const create = data => Aliment.create(data);

router.get("/", (req, res) => {
  getAll()
    .then(aliments => {
      res.status(200).send(aliments);
    })
    .catch(error => res.status(500).send("Something went wrong"));
});

router.get("/:id", (req, res) => {
  getOne(req.params.id)
    .then(aliment => {
      res.status(200).send(aliment);
    })
    .catch(error => res.status(500).send("Something went wrong"));
});

router.post("/", (req, res) => {
  create(req.body)
    .then(aliment => res.status(200).send(aliment))
    .catch(err => res.status(500).send("Something went wrong"));
});

router.delete("/:id", (req, res) => {
  deleteOne(req.params.id)
    .then(aliments => {
      res.status(200).send(aliments);
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
