const Pet = require("../models/pets.model");

module.exports.findAllPets = (req, res) => {
  Pet.find()
    .then((allDaPets) => {
      res.json({ Pets: allDaPets });
    })
    .catch((err) => {
      res.status(500).json({ message: "Something went wrong", error: err });
    });
};

module.exports.findOneSinglePet = (req, res) => {
  Pet.findOne({ _id: req.params.id })
    .then((oneSinglePet) => {
      res.json({ Pet: oneSinglePet });
    })
    .catch((err) => {
      res.status(500).json({ message: "Something went wrong", error: err });
    });
};

module.exports.createNewPet = (req, res) => {
  Pet.create(req.body)
    .then((newlyCreatedPet) => {
      res.json({ Pet: newlyCreatedPet });
    })
    .catch((err) => {
      res.status(400).json({ message: "Something went wrong", error: err });
    });
};

module.exports.updateExistingPet = (req, res) => {
  Pet.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedPet) => {
      res.json({ Pet: updatedPet });
    })
    .catch((err) => {
      res.status(400).json({ message: "Something went wrong", error: err });
    });
};

module.exports.deleteAnExistingPet = (req, res) => {
  Pet.deleteOne({ _id: req.params.id })
    .then((result) => {
      res.json({ result: result });
    })
    .catch((err) => {
      res.status(500).json({ message: "Something went wrong", error: err });
    });
};
