const express = require("express");
const router = new express.Router();
const User = require("../models/User");

const getAll = () => User.find();
const getOne = id => User.findById(id);
const updateOne = (id, data) => User.findByIdAndUpdate(id, data, { new: true });
const deleteOne = id => User.findByIdAndDelete(id);
const create = data => User.create(data);

router.get("/", (req, res) => {
  getAll()
    .then(users => {
      res.status(200).send(users);
    })
    .catch(error => res.status(500).send("Something went wrong"));
});

router.get("/:id", (req, res) => {
  getOne(req.params.id)
    .then(user => {
      res.status(200).send(user);
    })
    .catch(error => res.status(500).send("Something went wrong"));
});

router.post("/", (req, res) => {
  create(req.body)
    .then(user => res.status(200).send(user))
    .catch(err => res.status(500).send("Something went wrong"));
});

router.delete("/:id", (req, res) => {
  deleteOne(req.params.id)
    .then(deletedUser => {
      res.status(200).send(deletedUser);
    })
    .catch(error => res.status(500).send("Something went wrong"));
});

router.patch("/:id", (req, res) => {
  updateOne(req.params.id, req.body).then(updatedUser =>
    res.status(200).send(updatedUser)
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
