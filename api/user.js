const express = require("express");
const router = new express.Router();
const User = require("../models/User");
const Command = require("../models/Command");
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

router.get("/last-order", (req, res) => {
  User.findById(req.user._id)
    .populate("purchases")
    .then(dbRes => res.send(dbRes))
    .catch(err => res.send("Something went wrong in the database"));
});

router.post("/payment", (req, res) => {
  console.log(req.user);
  const currentOrderItems = req.body;

  const articles = [];
  for (let item of currentOrderItems) {
    let objectToSave = {};
    objectToSave.price = item.price;
    objectToSave.title = item.title;
    objectToSave.image = item.image;
    articles.push(objectToSave);
  }
  const orderRef = Date.now() + "BK";
  const userId = req.user._id;
  Command.create({
    articles: articles,
    orderRef: orderRef,
    user: userId
  })
    .then(dbRes => {
      User.findByIdAndUpdate(userId, { $push: { purchases: dbRes._id } })
        .then(updatedUser => {
          res.send(dbRes);
        })
        .catch(dbErr => res.send("Something went wrong updating the user"));
    })
    .catch(dbErr => res.send("An error occured with the database"));
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
